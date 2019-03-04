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
var HeroPlane = (function (_super) {
    __extends(HeroPlane, _super);
    function HeroPlane(name) {
        var _this = _super.call(this, name) || this;
        _this.setScale(0.5);
        _this.flySpeed = 300;
        return _this;
    }
    /*飞机的飞行*/
    HeroPlane.prototype.fly = function (x, y) {
        var speedo = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) / this.flySpeed;
        egret.Tween.removeTweens(this);
        var tw = egret.Tween.get(this, {});
        tw.to({ x: x, y: y }, speedo * 1000, egret.Ease.sineOut);
    };
    return HeroPlane;
}(BasePlane));
__reflect(HeroPlane.prototype, "HeroPlane");
//# sourceMappingURL=HeroPlane.js.map