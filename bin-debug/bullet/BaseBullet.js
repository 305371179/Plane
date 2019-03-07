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
var BaseBullet = (function (_super) {
    __extends(BaseBullet, _super);
    function BaseBullet(owner, name) {
        var _this = _super.call(this, name) || this;
        _this.owner = owner;
        _this.setScale(0.2);
        _this.bulletSpeed = owner.bulletSpeed;
        return _this;
    }
    BaseBullet.prototype.show = function (position) {
        this.x = this.owner.x + position['x'];
        this.y = this.owner.y + position['y'];
    };
    BaseBullet.prototype.move = function (time) {
        this.y += this.bulletSpeed * time;
    };
    return BaseBullet;
}(BasePlane));
__reflect(BaseBullet.prototype, "BaseBullet");
//# sourceMappingURL=BaseBullet.js.map