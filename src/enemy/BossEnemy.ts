class BossEnemy extends AlphaEnemy{
	//撞击主角所造成的爆炸伤害
	public expoldeAtk:number = 20
	public factor:number = 0
	public direction:number = 1
	public constructor(name:string = 'boss_0_png') {
		super(name)
		this.hp = 2000
		this.score = 1000
		this.factor = Math.atan(Math.random()*Math.PI/4) * (Math.random()<0.5?1:-1)
		this.bulletSpeed = 0.4
		this.bulletType = BossBullet
		this.hitCheckRadius = 100
		this.changeSpeed()
		this.setScale(0.6)
		this.bulletPositions=[
			{
				type:BossBullet,
				shootInterval: 1500 + Math.random()* 1000,
				positions:[
					{x:-32,y:0},{x:32,y:0}
				]
			},
			{
				type:BossDartBullet,
				shootInterval: 2500 + Math.random()* 1000,
				positions:[
					{x:-100,y:10},{x:100,y:10}
				]
			},
		]
	}
	protected changeSpeed(){
		this.flySpeed = 0.05 +Math.random() * 0.05
	}
	public move(time:number){
		this.flySpeed = 0.05 +Math.random() * 0.1
		let delY = this.flySpeed * time
		this.y += delY * this.direction
		this.x += delY * this.factor
		// if(this.x < 50 || this.x > Global.stage.stageWidth-50){
		// 	this.factor = Math.atan(Math.random()*Math.PI/4) * (this.factor<0?1:-1)
		// }
		// const x = this.anchorOffsetX*this.scaleX
		// const y = this.anchorOffsetY*this.scaleY
		const {x,y} = this.getXY()
		const factor = Math.atan(Math.random()*Math.PI/4)
		if(this.x > Global.stage.stageWidth-x) {
			this.factor = -factor
			this.changeSpeed()
		}else if(this.x < x){
			this.factor = factor
			this.changeSpeed()
		}
		if(this.y>Global.stage.stageHeight*1/3){
			this.direction = -1
			this.factor = factor * (this.factor<0?-1:1)
			this.changeSpeed()
		}else if(this.y < y) {
			this.direction = 1
			this.factor = factor * (this.factor<0?-1:1)
			this.changeSpeed()
		}
		// if(this.y>100){
		// 	this.y = 100
		// 	this.x =100
		// }
	}
	/*子弹发射*/
	public shoot(bulletContainer:BulletContainer, time:number){
		this.bulletPositions.forEach(item => {
			const positions = item['positions']
			const type:any = item['type']
			const shootInterval = item['shootInterval']
			item['time'] = item['time'] ? item['time'] + time : time
			if(item['time'] >= shootInterval){
				item['time'] = 0
				positions.forEach(position=>{
					let bullet:BaseBullet = new type(this)
					bullet.show(position)
					bulletContainer.addBullet(bullet)
				})
			}
		})
	}
	//
	public hitCheck(target:BasePlane,length:number = 50):boolean{
		return false
	}
}