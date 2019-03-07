var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameOverScene = (function (_super) {
    __extends(GameOverScene, _super);
    function GameOverScene(score) {
        if (score === void 0) { score = '0'; }
        var _this = _super.call(this) || this;
        _this.scoreNumber = score;
        return _this;
    }
    GameOverScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameOverScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.animation.play();
        this.score.text = this.scoreNumber;
        var score = egret.localStorage.getItem('score') || 0;
        if (parseInt(this.scoreNumber) > score) {
            score = this.scoreNumber;
            egret.localStorage.setItem('score', this.scoreNumber);
        }
        this.historyScore.text = score + '';
        console.log(score);
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Global.addScene(new GameScene());
        }, this);
    };
    return GameOverScene;
}(eui.Component));
__reflect(GameOverScene.prototype, "GameOverScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameOverScene.js.map