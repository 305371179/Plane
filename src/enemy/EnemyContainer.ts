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
	public moveAndShoot(bulletContainer:BulletContainer, time:number){
		for(let i = this.enemies.length-1;i >= 0;i--){
			let enemy = this.enemies[i]
			enemy.move(time)
			enemy.shoot(bulletContainer, time)
			//子弹超出了屏幕，就销毁
			if(!enemy.validate()){
				this.destroy(i)
			}
		}
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