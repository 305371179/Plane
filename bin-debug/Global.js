var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
全局类，提供场景的过渡和stage的引用
*/
var Global = (function () {
    function Global() {
    }
    Global.addScene = function (scene) {
        this.stage.addChild(scene);
    };
    Global.replaceScene = function (scene) {
        this.stage.removeChildren();
        this.stage.addChild(scene);
    };
    Global.pause = function () {
        var child = this.stage.getChildAt(this.stage.numChildren - 1);
        if (child && child instanceof GameScene) {
            egret.Tween.pauseTweens(child.heroPlane);
        }
    };
    Global.resume = function () {
        var _this = this;
        egret.setTimeout(function () {
            var child = _this.stage.getChildAt(_this.stage.numChildren - 1);
            if (child && child instanceof GameScene) {
                egret.Tween.resumeTweens(child.heroPlane);
            }
        }, this, 0);
    };
    return Global;
}());
__reflect(Global.prototype, "Global");
//# sourceMappingURL=Global.js.map