class MenuScene extends eui.Component implements  eui.UIComponent {
	public animation:egret.Tween;
	public button:eui.Button;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.animation.play()
		this.button.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Global.replaceScene(new GameScene())
		},this)
	}
	
}