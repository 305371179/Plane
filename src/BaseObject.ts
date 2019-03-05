/*所有对象的基类，提供一些最通用的方法*/
class BaseObject extends egret.Sprite{
	//每个对象都有一张位图
	private bitmap:egret.Bitmap;
	public constructor(name:string) {
		super()
		this.bitmap = this.createBitmapByName(name)
		this.addChild(this.bitmap)
		// 设置锚点为图片中心点
		this.setCenter()
	}
	
	private setCenter(){
		this.anchorOffsetX =this.bitmap.width/2
		this.anchorOffsetY = this.bitmap.height/2
	}
	/*设置缩放*/
	public setScale(scale:number){
		this.scaleX = scale
		this.scaleY = scale
	}
	/*将资源名转化成位图*/
	private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
		if(!texture) {
			throw `${name}图片不存在`
		}
        result.texture = texture;
        return result;
    }
}