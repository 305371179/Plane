class BulletContainer extends egret.Sprite{
	public bullets:Array<BaseBullet> = [];
	public constructor() {
		super()
	}
	public addBullet(bullet:BaseBullet){
		this.bullets.push(bullet)
		this.addChild(bullet)
	}
	public move(time:number){
		for(let i = this.bullets.length-1;i >= 0;i--){
			let bullet = this.bullets[i]
			bullet.move(time)
			//子弹超出了屏幕，就销毁
			if(!bullet.validate()){
				this.destroy(i)
			}
		}
		// console.log(this.bullets.length,this.numChildren)
	}
	public destroy(index:number){
		this.removeChildAt(index)
		this.bullets.splice(index,1)
	}
}