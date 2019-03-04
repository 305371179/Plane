class GameScene extends eui.Component implements  eui.UIComponent {
	// 正常情况下，60fps的时间是1/60 * 1000毫秒
	private timeInterval:number = 1/60 * 1000
	// 在游戏暂停后，恢复的第一帧
	/*背景滚动相关属性*/
	private bg1:eui.Image;
	private bg2:eui.Image;
	private bgSpeed:number = 0.5;
	//记录上一帧的时间
	private timeOnEnterFrame:number = 0;
	// 玩家飞机
	public heroPlane:HeroPlane;
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
		this.init()
		this.setListeners()
	}
	private init() {
		this.heroPlane = new HeroPlane('hero_png')
		this.heroPlane.appear(Global.stage.stageWidth/2, Global.stage.stageHeight * 2/3)
		this.addChild(this.heroPlane)
	}
	/*设置监听*/
	private setListeners() {
		this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this)
	}

	private onEnterFrame() {
		/*获取每一帧的时间差，用时间间隔设置位移会更加平滑*/
		const now = egret.getTimer();
        const time = this.timeOnEnterFrame;
        const pass = now - time;
		this.timeOnEnterFrame = now
		//当帧频低于30帧，就跳过，一般来说，页面从后台转入前台就会出现低于30帧的情况
		if(pass > this.timeInterval * 2) {
			return
		}
		this.scrollBg(pass)
	}
	/*滚动背景*/
	private scrollBg(pass:number){
		const delY = this.bgSpeed * pass
		this.bg1.y += delY
		this.bg2.y += delY
		if(this.bg1.y > Global.stage.stageHeight){
			this.bg1.y = 0
			this.bg2.y = - Global.stage.stageHeight
		}
	}
}