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
var AlphaEnemy = (function (_super) {
    __extends(AlphaEnemy, _super);
    function AlphaEnemy(name) {
        if (name === void 0) { name = 'alpha_png'; }
        var _this = _super.call(this, name) || this;
        //撞击主角所造成的爆炸伤害
        _this.expoldeAtk = 20;
        _this.bulletType = AlphaBullet;
        return _this;
    }
    return AlphaEnemy;
}(BaseEnemy));
__reflect(AlphaEnemy.prototype, "AlphaEnemy");
//# sourceMappingURL=AlphaEnemy.js.map