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
var BossDartBullet = (function (_super) {
    __extends(BossDartBullet, _super);
    function BossDartBullet(owner, name) {
        if (name === void 0) { name = 'bullet_dart_png'; }
        var _this = _super.call(this, owner, name) || this;
        _this.factor = 0;
        _this.owner = owner;
        _this.setScale(0.2);
        _this.bulletSpeed = owner.bulletSpeed;
        _this.atk = 40;
        _this.factor = Math.atan(Math.random() * Math.PI / 8) * (Math.random() < 0.5 ? 1 : -1);
        return _this;
    }
    // public show(position:Object) {
    // 	this.x = this.owner.x + position['x']
    // 	this.y = this.owner.y + position['y']
    // }
    BossDartBullet.prototype.move = function (time) {
        var delY = this.bulletSpeed * time;
        this.y += delY;
        this.x += delY * this.factor;
        this.rotation += 5;
    };
    return BossDartBullet;
}(BaseBullet));
__reflect(BossDartBullet.prototype, "BossDartBullet");
//# sourceMappingURL=BossDartBullet.js.map