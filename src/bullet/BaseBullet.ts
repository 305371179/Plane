class BaseBullet extends BasePlane{
	public owner:BasePlane;
	
	public constructor(owner:BasePlane,name:string) {
		super(name)
		this.owner = owner
		this.setScale(0.2)
		this.bulletSpeed = owner.bulletSpeed
	}
	public show(position:Object) {
		this.x = this.owner.x + position['x']
		this.y = this.owner.y + position['y']
	}
	public move(time:number){
		this.y += this.bulletSpeed * time
	}
	// protected explode(){
	// }
}