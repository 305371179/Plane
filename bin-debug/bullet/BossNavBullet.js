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
var BossNavBullet = (function (_super) {
    __extends(BossNavBullet, _super);
    function BossNavBullet(owner, name) {
        if (name === void 0) { name = 'bullet_navigate_png'; }
        var _this = _super.call(this, owner, name) || this;
        _this.atk = 60;
        _this.rotation = 180;
        return _this;
    }
    // public show(position:Object) {
    // 	this.x = this.owner.x + position['x']
    // 	this.y = this.owner.y + position['y']
    // }
    BossNavBullet.prototype.trace = function (time, plane) {
        var distance = this.bulletSpeed * time;
        var angle = Math.PI / 2;
        if (this.angle !== undefined) {
            angle = this.angle;
        }
        else {
            if (plane.x - this.x !== 0) {
                angle = Math.atan((plane.y - this.y) / (plane.x - this.x));
            }
            if (plane.x - this.x < 0) {
                angle += Math.PI;
            }
            this.angle = angle;
        }
        var rotation = angle * 180 / Math.PI;
        this.y += distance * Math.sin(angle);
        this.x += distance * Math.cos(angle);
        this.rotation = 90 + rotation;
    };
    return BossNavBullet;
}(BossBullet));
__reflect(BossNavBullet.prototype, "BossNavBullet");
//# sourceMappingURL=BossNavBullet.js.map