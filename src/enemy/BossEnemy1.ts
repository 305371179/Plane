class BossEnemy1 extends BossEnemy{
	//撞击主角所造成的爆炸伤害
	public expoldeAtk:number = 20
	public factor:number = 0
	public direction:number = 1
	public constructor(name:string = 'boss_1_png') {
		super(name)
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
			{
				type:BossNavBullet,
				shootInterval: 3500 + Math.random()* 1000,
				positions:[
					{x:-60,y:0},{x:60,y:0}
				]
			},
		]
	}
}