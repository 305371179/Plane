class BetaEnemy extends AlphaEnemy{
	//撞击主角所造成的爆炸伤害
	public expoldeAtk:number = 20
	public factor:number = 0
	public constructor(name:string = 'beta_png') {
		super(name)
		this.hp = 80
		this.score = 2
		this.factor = Math.atan(Math.random()*Math.PI/4) * (Math.random()<0.5?1:-1)
		this.bulletSpeed = 0.4
		this.bulletType = BetaBullet
		this.setScale(0.6)
		this.bulletPositions=[
			{x:-25,y:0},
			{x:25,y:0}
		]
	}
	public move(time:number){
		let delY = this.flySpeed * time
		this.y += delY
		this.x += delY * this.factor
		if(this.x < 50 || this.x > Global.stage.stageWidth-50){
			this.factor *=-1
		}
	}
}