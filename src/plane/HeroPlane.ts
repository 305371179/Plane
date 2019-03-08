class HeroPlane extends BasePlane {
	public constructor(name:string) {
		super(name)
	}
	public init(){
		this.setScale(0.5)
		this.flySpeed =300 
		this.hp = 100;
		this.bulletSpeed = -0.6
		this.bulletPositions = [
			{x: -20,y: 20},
			{x: 20,y: 20}
		]
		Global.plane=this
	}
	/*飞机的飞行*/
	public fly(x:number, y:number) {
		// this.x = x
		// this.y = y
		var speed = Math.sqrt(Math.pow(x-this.x,2)+Math.pow(y-this.y,2))/this.flySpeed;
		egret.Tween.removeTweens(this)
		var tw = egret.Tween.get( this, {} );
		tw.to( {x,y}, speed*300, egret.Ease.sineOut)
	}
	/*增加血量*/
	public addBlood(blood:number = 0){
		this.dispatchHPEvent(-blood)
	}
	/*派发血量改变事件*/
	public dispatchHPEvent(atk:number = 0){
		if(this.hp === 0) return
		this.hp -= atk
		if(this.hp<=0){
			this.hp = 0
			this.explode()
		}
		let event = new egret.Event('setHP')
		event.data = this.hp
		this.dispatchEvent(event)
	}
	/*派发分数改变事件*/
	public dispatchScoreEvent(score:number = 0){
		this.score += score
		let event = new egret.Event('setScore')
		event.data = this.score + ''
		this.dispatchEvent(event)
	}
	/*子弹发射*/
	public shoot(bulletContainer:BulletContainer, time:number){
		if(this.isExplode)return
		if(!this.addShootTime(time)){
			return
		}
		this.bulletPositions.forEach(position => {
			let bullet = new HeroBullet(this)
			bullet.show(position)
			bulletContainer.addBullet(bullet)
		})
	}
	public hurt(target:BasePlane){
		if(target instanceof BaseEnemy){
			this.dispatchHPEvent(target.expoldeAtk)
		}else{
			this.dispatchHPEvent(target.atk)
		}
		this.playHurtParticle(target)
	}
	public explode(){
		this.playHurtParticle(null,()=>{
			let event = new egret.Event('gameOver')
			this.dispatchEvent(event)
		})
	}
}