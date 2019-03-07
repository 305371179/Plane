/*飞机的基类，提供通用的方法和属性*/
class BasePlane extends BaseObject{
	//飞机的分数值
	public score:number = 0;
	//血量
	protected hp:number = 10000;
	//攻击力
	public atk:number = 10;
	//飞行速度
	protected flySpeed:number = 300
	//是否爆炸的状态
	public isExplode:boolean = false
	//是否销毁的状态
	public isDie:boolean = false
	//子弹出现的位置
	public bulletPositions:Array<Object> = []
	//子弹飞行的速度
	public bulletSpeed:number = 0.05
	//子弹发射的频率
	public shootInterval:number = 200
	public threshold:number = 0
	//碰撞半径
	public hitCheckRadius:number = 50
	public constructor(name:string) {
		super(name)
		this.init()
	}
	/*初始化*/
	protected init(){

	}
	//累计间隔时间,控制子弹发射的频率
	public addShootTime(passOnEnterFrame:number):boolean{
		this.threshold += passOnEnterFrame
		if(this.threshold > this.shootInterval) {
			this.threshold = 0
			return true
		}
		return false
	}
	/*
	碰撞检测
	通过比较飞机直接的直线距离和给定值length大小，来判断是否碰撞
	*/
	public hitCheck(target:BasePlane,length:number = 50):boolean{
		return this._hitCheck(target,length)
	}
	public _hitCheck(target:BasePlane,length:number = 50):boolean{
		// 如果对象已经爆炸了，就无需继续检测
		if(this.isExplode || target.isExplode)return false
		let x1 = this.x
		let y1 = this.y
		let x2 = target.x
		let y2 = target.y
		if((Math.pow((x1-x2),2)+Math.pow((y1-y2),2))>Math.pow(length, 2)){
			return false
		}
        return true
	}
	
	/*减少血量*/
	public reduceHP(target:BasePlane){
		this.hp -= target.atk
		if(this.hp<=0){//如果血量低于0，就播放爆炸粒子动画
			this.explode()
		}
	}
	
	/*出现的初始位置*/
	public appear(x:number, y:number) {
		this.x = x
		this.y = y
	}
	/*发射子弹*/
	public shoot(bulletContainer:BulletContainer,passOnEnterFrame:number){

	}
	// /*飞行*/
	// public fly(x:number, y:number){
		
	// }
	/*受到子弹攻击，遭受伤害*/
	public hurt(target:BasePlane){
		this.playHurtParticle(target)
	}
	protected playHurtParticle(target:BasePlane = null,callback:Function = null){
		let config = 'boom_hurt_json'
		if(!target){
			config = 'boom_explode_json'
		}
		let particle = new BaseParticle('boom_yellow_png', config)
		if(target){
			let x = target.x
			let y = target.y
			if(target instanceof BaseEnemy){
				x = this.x + target.x >>1
				y = this.y + target.y >>1
			}
			const point = this.globalToLocal(x , y)
			particle.x = point.x
			particle.y = point.y
		}else{
			particle.x = this.anchorOffsetX
			particle.y = this.anchorOffsetY
		}
		particle.start(500)
		this.addChild(particle)
		egret.setTimeout(()=>{
			this.removeChild(particle)
			if(!target){
				this.isDie = true
				callback && callback()
			}
		},this, 1000)
	}
	/*受到撞击，遭受伤害*/
	protected impact(){

	}
	/*血量耗尽，触发爆炸*/
	protected explode(){
	}
	public getXY(){
		return new egret.Point(this.anchorOffsetX*this.scaleX,this.anchorOffsetY*this.scaleY)
	}
	/*判断飞机是否在屏幕外面了*/
	public validate(){
		const {x,y} = this.getXY()
		return !(this.x < -x || this.x > Global.stage.stageWidth + y || this.y < -y || this.y > Global.stage.stageHeight +y)
	}
	/*销毁对象*/
	public destroy() {
		if(this.parent){
			this.isDie = true
			this.parent.removeChild(this)
		}
	}
	/*飞机移动*/
	public move(time:number){
		this.y += this.flySpeed * time
	}
}