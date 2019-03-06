class GameOverScene extends eui.Component implements  eui.UIComponent {
	private score:eui.BitmapLabel;
	private animation:egret.Tween;
	private button:eui.Button;
	private scoreNumber:string;
	public constructor(score:string='0') {
		super();
		this.scoreNumber = score
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.animation.play()
		this.score.text = this.scoreNumber
		this.button.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Global.addScene(new GameScene())
		},this)
	}
	
}