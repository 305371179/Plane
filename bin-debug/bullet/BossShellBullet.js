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
var BossBullet = (function (_super) {
    __extends(BossBullet, _super);
    function BossBullet(owner, name) {
        if (name === void 0) { name = 'bullet_shell_png'; }
        var _this = _super.call(this, owner, name) || this;
        _this.owner = owner;
        _this.setScale(0.2);
        _this.bulletSpeed = owner.bulletSpeed;
        _this.atk = 30;
        return _this;
    }
    BossBullet.prototype.show = function (position) {
        this.x = this.owner.x + position['x'];
        this.y = this.owner.y + position['y'];
    };
    BossBullet.prototype.move = function (time) {
        this.y += this.bulletSpeed * time;
    };
    return BossBullet;
}(BaseBullet));
__reflect(BossBullet.prototype, "BossBullet");
//# sourceMappingURL=BossShellBullet.js.map