/*
全局类，提供场景的过渡和stage的引用
*/
class Global {
	public static stage:egret.Stage;
	public static plane:HeroPlane
	public static addScene(scene:eui.UIComponent){
		this.stage.addChild(scene)
	}
	public static replaceScene(scene:eui.UIComponent){
		this.stage.removeChildren()
		this.stage.addChild(scene)
	}
	public static pause(){
		// egret.Tween.removeTweens(Global.plane)
		const child = this.stage.getChildAt(this.stage.numChildren-1)
		if(child && child instanceof GameScene) {
			egret.Tween.removeTweens(child.heroPlane)
			// egret.Tween.removeAllTweens()
		}
	}
	// public static resume() {
	// 	egret.Tween.resumeTweens(Global.plane)
	// 	const child = this.stage.getChildAt(this.stage.numChildren-1)
	// 	if(child && child instanceof GameScene) {
	// 		egret.Tween.resumeTweens(child.heroPlane)
	// 	}
	// }
}