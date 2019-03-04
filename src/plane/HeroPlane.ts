class HeroPlane extends BasePlane {
	
	public constructor(name:string) {
		super(name)
		this.setScale(0.5)
		this.flySpeed =300 
	}

	/*飞机的飞行*/
	public fly(x:number, y:number) {
		var speedo = Math.sqrt(Math.pow(x-this.x,2)+Math.pow(y-this.y,2))/this.flySpeed;
		egret.Tween.removeTweens(this)
		var tw = egret.Tween.get( this, {} );
		tw.to( {x,y}, speedo*1000, egret.Ease.sineOut)
	}
}