class AlphaEnemy extends BaseEnemy{
	//撞击主角所造成的爆炸伤害
	public expoldeAtk:number = 20
	public constructor(name:string = 'alpha_png') {
		super(name)
		this.bulletType = AlphaBullet
	}
	
}