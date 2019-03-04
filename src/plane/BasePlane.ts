/*飞机的基类，提供通用的方法和属性*/
class BasePlane extends BaseObject{
	//血量
	protected hp:number = 10000;
	//攻击力
	public atk:number = 10;
	//飞行速度
	protected flySpeed:number = 300
	//爆炸粒子动画播放的时间
	public explodeTime:number = 1000
	//受攻击粒子动画播放的时间
	public hurtTime:number = 500
		//是否爆炸的状态
	public isExplode:boolean = false
	//是否销毁的状态
	public isDie:boolean = false
	public constructor(name:string) {
		super(name)
	}
	/*
	碰撞检测
	通过比较飞机直接的直线距离和给定值length大小，来判断是否碰撞
	*/
	public hitCheck(target:BasePlane,length:number = 50):boolean{
		// 如果对象已经爆炸了，就无需继续检测
		if(target.isExplode)return false
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
	/*飞行*/
	public fly(x:number, y:number){
		
	}
	/*受到子弹攻击，遭受伤害*/
	protected hurt(){

	}
	/*受到撞击，遭受伤害*/
	protected impact(){

	}
	/*血量耗尽，触发爆炸*/
	protected explode(){
	}
}