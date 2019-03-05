class HeroPlane extends BasePlane {
	private score:number = 0
	public constructor(name:string) {
		super(name)
	}
	public init(){
		this.setScale(0.5)
		this.flySpeed =300 
		this.hp = 1000;
		this.bulletSpeed = -6
		this.bulletPositions = [
			{x: -20,y: 20},
			{x: 20,y: 20}
		]
	}
	/*飞机的飞行*/
	public move(x:number, y:number) {
		var speedo = Math.sqrt(Math.pow(x-this.x,2)+Math.pow(y-this.y,2))/this.flySpeed;
		egret.Tween.removeTweens(this)
		var tw = egret.Tween.get( this, {} );
		tw.to( {x,y}, speedo*1000, egret.Ease.sineOut)
	}
	/*派发血量改变事件*/
	public dispatchHPEvent(){
		let event = new egret.Event('setHP')
		event.data = this.hp + ''
		this.dispatchEvent(event)
	}
	/*派发分数改变事件*/
	public dispatchScoreEvent(){
		let event = new egret.Event('setScore')
		event.data = this.score + ''
		this.dispatchEvent(event)
	}
	/*子弹发射*/
	public shoot(bulletContainer:BulletContainer, timeOnEnterFrame:number){
		// this.bulletPositions.forEach(position => {

		// })
		if(!this.addShootTime(timeOnEnterFrame)){
			return
		}
		this.bulletPositions.forEach(position => {
			let bullet = new BaseBullet('bullet_png', this)
			bullet.show(position)
			bulletContainer.addBullet(bullet)
		})
	}
}