class BaseEnemy extends BasePlane{
	public constructor(name:string) {
		super(name)
	}
	public init(){
		this.setScale(0.5)
		this.appear(100,100)
		this.flySpeed = 0.1 + Math.random() * 0.2
		this.bulletSpeed = this.flySpeed + 0.3 * Math.random() +0.1
		this.shootInterval = Math.random() * 500 + 500
		this.bulletPositions = [
			{x: -20,y: 20},
			{x: 20,y: 20}
		]
	}
	public move(time:number){
		this.y += this.flySpeed * time
	}
	/*子弹发射*/
	public shoot(bulletContainer:BulletContainer, time:number){
		// this.bulletPositions.forEach(position => {

		// })
		if(!this.addShootTime(time)){
			return
		}
		this.bulletPositions.forEach(position => {
			let bullet = new BaseBullet('bullet_ball_png', this)
			bullet.show(position)
			bulletContainer.addBullet(bullet)
		})
	}
}