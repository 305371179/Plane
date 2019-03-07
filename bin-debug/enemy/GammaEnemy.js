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
var GammaEnemy = (function (_super) {
    __extends(GammaEnemy, _super);
    function GammaEnemy(name) {
        if (name === void 0) { name = 'gamma_png'; }
        var _this = _super.call(this, name) || this;
        //撞击主角所造成的爆炸伤害
        _this.expoldeAtk = 20;
        _this.setScale(0.3);
        _this.flySpeed = 0.2 + Math.random() * 0.5;
        _this.hp = 100;
        _this.score = 3;
        return _this;
    }
    GammaEnemy.prototype.shoot = function () {
    };
    return GammaEnemy;
}(BaseEnemy));
__reflect(GammaEnemy.prototype, "GammaEnemy");
//# sourceMappingURL=GammaEnemy.js.map