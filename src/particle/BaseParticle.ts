class BaseParticle extends particle.GravityParticleSystem{
	public constructor(textureName:string = "boom_white_png", configName:string = "boom_white_json") {
		//获取纹理
		let texture = RES.getRes(textureName);
		//获取配置
		let config = RES.getRes(configName);
		super(texture,config)
	}
}