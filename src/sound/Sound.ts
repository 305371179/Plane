class Sound {
	public static sound:egret.Sound;
	public static channel:egret.SoundChannel;
	public static play(){
		if(!this.sound){
			this.sound = RES.getRes('StarWar_mp3')
		}
		this.channel = this.sound.play()
	}
	public static close(){
		this.channel.stop()
	}
}