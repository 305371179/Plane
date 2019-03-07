class GammaEnemy extends BaseEnemy{
	//撞击主角所造成的爆炸伤害
	public expoldeAtk:number = 20
	public constructor(name:string = 'gamma_png') {
		super(name)
		this.setScale(0.3)
		this.flySpeed = 0.2 + Math.random() * 0.5
		this.hp = 100
		this.score = 3
	}
	public shoot(){

	}
}