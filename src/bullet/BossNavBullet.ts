class BossNavBullet extends BossBullet{
	public angle:number;
	public constructor(owner:BasePlane, name:string = 'bullet_navigate_png') {
		super(owner,name)
		this.atk = 60
		this.rotation = 180
	}
	// public show(position:Object) {
	// 	this.x = this.owner.x + position['x']
	// 	this.y = this.owner.y + position['y']
	// }
	public trace(time:number,plane:BasePlane){
		const distance = this.bulletSpeed * time
		let angle = Math.PI/2;
		if(this.angle!==undefined){
			angle = this.angle
		}else{
			if(plane.x - this.x!==0){
				angle =  Math.atan((plane.y - this.y)/(plane.x - this.x))
			}
			if(plane.x - this.x < 0) {
				angle += Math.PI
			}
			this.angle = angle
		}
		let rotation = angle*180/Math.PI
		this.y += distance * Math.sin(angle)
		this.x += distance * Math.cos(angle)
		this.rotation = 90 +rotation
	}
}