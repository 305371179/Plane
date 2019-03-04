var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
    return Global;
}());
__reflect(Global.prototype, "Global");
//# sourceMappingURL=Global.js.map