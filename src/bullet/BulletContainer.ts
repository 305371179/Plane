class BulletContainer extends egret.Sprite{
	public bullets:Array<BaseBullet> = [];
	public constructor() {
		super()
	}
	public addBullet(bullet:BaseBullet){
		this.bullets.push(bullet)
		this.addChild(bullet)
	}
	public move(heroPlane:HeroPlane, enemiyContainer:EnemyContainer, time:number){
		for(let i = this.bullets.length-1;i >= 0;i--){
			let bullet = this.bullets[i]
			bullet.move(time)
			//子弹是主角飞机发射的，检查是否碰撞到敌机
			if(bullet.owner === heroPlane){
				const enemy = enemiyContainer.hitCheck(bullet)
				if(enemy){
					heroPlane.dispatchScoreEvent(enemy.score)
					this.destroy(i)
					continue
				}
			}else{
				if(bullet.hitCheck(heroPlane)){
					heroPlane.hurt(bullet)
					this.destroy(i)
					continue
				}
			}
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