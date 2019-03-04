/*
全局类，提供场景的过渡和stage的引用
*/
class Global {
	public static stage:egret.Stage;
	public static addScene(scene:eui.UIComponent){
		this.stage.addChild(scene)
	}
	public static replaceScene(scene:eui.UIComponent){
		this.stage.removeChildren()
		this.stage.addChild(scene)
	}
}