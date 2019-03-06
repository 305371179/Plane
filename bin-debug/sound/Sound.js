var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sound = (function () {
    function Sound() {
    }
    Sound.play = function () {
        if (!this.sound) {
            this.sound = RES.getRes('StarWar_mp3');
        }
        this.channel = this.sound.play();
    };
    Sound.close = function () {
        this.channel.stop();
    };
    return Sound;
}());
__reflect(Sound.prototype, "Sound");
//# sourceMappingURL=Sound.js.map