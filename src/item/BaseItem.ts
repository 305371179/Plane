class BaseItem extends BasePlane{
	public factor:number;
	public constructor(name) {
		super(name)
		this.init()
	}
	public init(){
		this.flySpeed = 0.2
		this.setScale(0.2)
		this.factor = Math.atan(Math.random()*Math.PI/4) * (Math.random()<0.5?1:-1)
		
	}
	/*影响*/
	public react(heroPlane:HeroPlane){

	}
	public move(time:number){
		let delY = this.flySpeed * time
		this.y += delY
		// console.log(this.factor,4444)
		this.x += delY * this.factor
		if(this.x < 0 || this.x > Global.stage.stageWidth){
			this.factor *=-1
			this.x - delY * this.factor
		}
		
	}
}