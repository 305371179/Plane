class BossBullet extends BaseBullet{
	public owner:BasePlane;
	public constructor(owner:BasePlane, name:string = 'bullet_shell_png') {
		super(owner,name)
		this.owner = owner
		this.setScale(0.2)
		this.bulletSpeed = owner.bulletSpeed
		this.atk = 30
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