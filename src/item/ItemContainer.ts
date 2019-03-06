class ItemContainer extends egret.Sprite{
	public threshold:number = 5000;
	public createTime:number = 0;
	public items:Array<BaseItem> = [];
	public constructor() {
		super()
	}
	//累计间隔时间,控制物品生成频率
	public addthreathod(passOnEnterFrame:number):boolean{
		this.createTime += passOnEnterFrame
		if(this.createTime > this.threshold) {
			this.createTime = 0
			this.threshold = Math.random()*10000 + 5000
			return true
		}
		return false
	}
	private appear(item:BaseItem){
		item.appear(Math.random() * Global.stage.stageWidth,-50)
	}
	public createItem(passOnEnterFrame:number){
		if(!this.addthreathod(passOnEnterFrame)){
			return
		}
		const item = new BloodItem()
		this.appear(item)
		this.addItem(item)
	}
	public move(heroPlane:HeroPlane, time:number){
		for(let i = this.items.length-1;i >= 0;i--){
			let item = this.items[i]
			item.move(time)
			if(item.hitCheck(heroPlane,50)){
				item.react(heroPlane)
				this.destroy(i)
				continue
			}
			//子弹超出了屏幕，就销毁
			if(!item.validate()){
				this.destroy(i)
			}
		}
	}
	private addItem(item:BaseItem){
		this.items.push(item)
		this.addChild(item)
	}
	public destroy(index:number){
		this.removeChildAt(index)
		this.items.splice(index,1)
	}
}