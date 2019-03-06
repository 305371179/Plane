class EnemyContainer extends egret.Sprite{
	public threshold:number = 1000;
	public createTime:number = 0;
	public enemies:Array<BaseEnemy> = [];
	public constructor() {
		super()
	}
	//累计间隔时间,控制敌机生成频率
	public addthreathod(passOnEnterFrame:number):boolean{
		this.createTime += passOnEnterFrame
		if(this.createTime > this.threshold) {
			this.createTime = 0
			return true
		}
		return false
	}
	private appear(enemy:BaseEnemy){
		enemy.appear(Math.random() * Global.stage.stageWidth,-50)
	}
	public createEnemy(passOnEnterFrame:number){
		if(!this.addthreathod(passOnEnterFrame)){
			return
		}
		const enemy = new BaseEnemy('alpha_png')
		this.appear(enemy)
		this.addEnemy(enemy)
	}
	public moveAndShoot(heroPlane:HeroPlane,bulletContainer:BulletContainer, time:number){
		for(let i = this.enemies.length-1;i >= 0;i--){
			let enemy = this.enemies[i]
			enemy.move(time)
			if(enemy.isDie){
				this.destroy(i)
				continue
			}
			if(enemy.isExplode){
				continue
			}
			enemy.shoot(bulletContainer, time)
			if(enemy.hitCheck(heroPlane,80)){
				// this.destroy(i)
				enemy.explode()
				heroPlane.hurt(enemy)
				continue
			}
			//子弹超出了屏幕，就销毁
			if(!enemy.validate()){
				this.destroy(i)
			}
		}
	}
	public hitCheck(heroPlane:HeroPlane, target:BaseBullet):BaseEnemy{
		for(let i = this.enemies.length - 1; i >= 0; i--){
			const enemy = this.enemies[i]
			//当飞机还在屏幕外面，就不做碰撞检测
			if(enemy.y< 0 || enemy.isExplode)continue
			if(target.hitCheck(enemy)){
				// this.destroy(i)
				let hp = enemy.hurt(target)
				if(hp === 0){
					heroPlane.dispatchScoreEvent(enemy.score)
				}
				// this.gameScene.scoreNumber = enemy.score
				// enemy.hurm(bullet)
				// enemy.explode()
				return enemy
			}
		}
		return null
	}
	private addEnemy(enemy:BaseEnemy){
		this.enemies.push(enemy)
		this.addChild(enemy)
	}
	public destroy(index:number){
		this.removeChildAt(index)
		this.enemies.splice(index,1)
	}
}