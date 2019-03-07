class BossDartBullet extends BaseBullet{
	public factor:number = 0
	public constructor(owner:BasePlane, name:string = 'bullet_dart_png') {
		super(owner,name)
		this.owner = owner
		this.setScale(0.2)
		this.bulletSpeed = owner.bulletSpeed
		this.atk = 40
		this.factor = Math.atan(Math.random()*Math.PI/8) * (Math.random()<0.5?1:-1)
	}
	// public show(position:Object) {
	// 	this.x = this.owner.x + position['x']
	// 	this.y = this.owner.y + position['y']
	// }
	public move(time:number){
		const delY = this.bulletSpeed * time
		this.y += delY
		this.x += delY * this.factor
		this.rotation += 5
	}
	// protected explode(){
	// }
}