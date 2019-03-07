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
var HeroBullet = (function (_super) {
    __extends(HeroBullet, _super);
    function HeroBullet(owner, name) {
        if (name === void 0) { name = 'bullet_png'; }
        var _this = _super.call(this, owner, name) || this;
        _this.owner = owner;
        _this.setScale(0.2);
        _this.atk = 20;
        _this.bulletSpeed = owner.bulletSpeed;
        return _this;
    }
    return HeroBullet;
}(BaseBullet));
__reflect(HeroBullet.prototype, "HeroBullet");
//# sourceMappingURL=HeroBullet.js.map