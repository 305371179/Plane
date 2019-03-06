class BloodItem extends BaseItem{
	//增加血量
	public blood:number = 10
	public constructor() {
		super('blood_png')
	}
	public react(heroPlane:HeroPlane){
		heroPlane.addBlood(this.blood)
	}
}