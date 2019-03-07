class EnemyContainer extends egret.Sprite{
	protected threshold:number = 1500;
	protected createTime:number = 0;
	public enemies:Array<BaseEnemy> = [];
	private enemyTypes:Array<any> = [AlphaEnemy,BetaEnemy,GammaEnemy]

	private stepTime:number = 0
	private currentIndex:number = 0
	private currentBoss:BossEnemy;
	private stageSetting = [
		{
			boss:BossEnemy,
			time: 20000,
		},
		{
			boss:BossEnemy1,
			time: 30000,
		},
		{
			boss:BossEnemy2,
			time: 50000,
		},
	]
	public constructor() {
		super()
		// let a:any= this.enemyType[0]
		// let a1:AlphaEnemy = new a()
	}
	//累计间隔时间,控制敌机生成频率
	public addthreathod(passOnEnterFrame:number):boolean{
		this.stepTime += passOnEnterFrame
		this.createTime += passOnEnterFrame
		if(this.createTime > this.threshold) {
			this.createTime = 0
			this.threshold = 1000 + Math.random()*500
			return true
		}
		return false
	}
	private appear(enemy:BaseEnemy){
		const {x,y} = enemy.getXY()
		enemy.appear(x + Math.random() * (Global.stage.stageWidth-2*x),-y)
	}
	public createEnemy(passOnEnterFrame:number){
		if(!this.addthreathod(passOnEnterFrame)){
			return
		}
		// if(this.enemies.length>0)return
		let enemy;
		const currentStage = this.stageSetting[this.currentIndex%this.stageSetting.length]
		if(!this.currentBoss && this.stepTime > currentStage['time']){
			enemy = new currentStage['boss']
			this.currentBoss = enemy
			this.currentIndex ++
		}else{
			const type = Global.getRandomElement(this.enemyTypes)
			enemy = new type()
		}
		if(this.currentBoss && this.currentBoss.isDie){
			this.currentBoss = null
			this.stepTime = 0
		}
		// const enemy = new BetaEnemy()
		// const enemy = new GammaEnemy()
		// const enemy = new BossEnemy()
		// const enemy = new BossEnemy1()
		// const enemy = new BossEnemy2()
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
			if(target.hitCheck(enemy,enemy.hitCheckRadius)){
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