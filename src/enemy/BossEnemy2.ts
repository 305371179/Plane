class BossEnemy2 extends BossEnemy{
	//撞击主角所造成的爆炸伤害
	public expoldeAtk:number = 20
	public factor:number = 0
	public direction:number = 1
	public laserBullet:LaserBullet;
	public laserDuration:number = 2000
	public laserInterval:number = 1000
	public laserTime:number = 0
	public constructor(name:string = 'boss_2_png') {
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
	/*子弹发射*/
	public shoot(bulletContainer:BulletContainer, time:number){
		super.shoot(bulletContainer,time)
		this.laserTime += time
		if(!this.laserBullet && this.laserTime > this.laserInterval) {
			this.laserBullet = new LaserBullet(this)
			this.laserBullet.duration = this.laserDuration
			bulletContainer.addBullet(this.laserBullet)
			this.laserTime = 0
		}else if(this.laserBullet&&this.laserBullet.isDie){
			this.laserTime = 0
			this.laserBullet = null
			this.laserDuration = 2000 + Math.random() * 4000
			this.laserInterval = 4000 + Math.random() * 2000
		}
	} 
}