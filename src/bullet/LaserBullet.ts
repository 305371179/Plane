class LaserBullet extends BaseBullet{
	public duration:number = 100
	public timer:number = 0
	public static initFirst: boolean = true
	public static egretFactory: dragonBones.EgretFactory;
	public constructor(owner:BasePlane, name:string = 'bullet_ball_png') {
		super(owner,name)
		this.bitmap.visible = false
		this.owner = owner
		this.atk = 1
		this.setScale(1.5)
		this.anchorOffsetX = 0
		this.anchorOffsetY = 0
		// this.appear(0,0)
		this.appear(this.owner.x,this.owner.y + this.anchorOffsetY*this.scaleY)
		if(LaserBullet.initFirst){
			//提前资源
			var dragonbonesData = RES.getRes( "laser_ske_json" );  
			var textureData = RES.getRes( "laser_tex_json" );  
			var texture = RES.getRes( "laser_tex_png" );
			//组装数据
			LaserBullet.egretFactory = dragonBones.EgretFactory.factory;
			LaserBullet.egretFactory.parseDragonBonesData(dragonbonesData);  
			LaserBullet.egretFactory.parseTextureAtlasData(textureData, texture);
		}
		
        //构建骨架显示对象
        let armatureDisplay: dragonBones.EgretArmatureDisplay = LaserBullet.egretFactory.buildArmatureDisplay("Sprite");
        //添加到舞台
        this.addChild(armatureDisplay);
        armatureDisplay.animation.play("Sprite",0);

	}
	public hitCheck(heroPlane:BasePlane,length:number = 50){
		if(Math.abs(this.x - heroPlane.x ) < length){
			heroPlane.hurt(this)
		}
		return false
	}
	public validate(){
		return true
	}
	public move(time:number){
		if(this.isDie)return
		this.timer+=time
		if(this.timer>this.duration){
			this.isDie = true
		}
		this.appear(this.owner.x,this.owner.y + this.anchorOffsetY*this.scaleY)
	}
}