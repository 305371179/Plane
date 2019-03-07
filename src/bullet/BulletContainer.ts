class BulletContainer extends egret.Sprite{
	public bullets:Array<BaseBullet> = [];
	// private sound:egret.Sound;
	public constructor() {
		super()
		// this.sound = RES.getRes('bullet_mp3')
	}
	public addBullet(bullet:BaseBullet){
		this.bullets.push(bullet)
		this.addChild(bullet)
		// this.sound.play()
	}
	public move(heroPlane:HeroPlane, enemiyContainer:EnemyContainer, time:number){
		for(let i = this.bullets.length-1;i >= 0;i--){
			let bullet = this.bullets[i]
			if(bullet instanceof BossNavBullet) {
				bullet.trace(time,heroPlane)
			}else {
				
				bullet.move(time)
			}
			if(bullet.isDie){
				this.destroy(i)
				continue
			}
			//子弹是主角飞机发射的，检查是否碰撞到敌机
			if(bullet.owner === heroPlane){
				const enemy = enemiyContainer.hitCheck(heroPlane,bullet)
				if(enemy){
					// heroPlane.dispatchScoreEvent(enemy.score)
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