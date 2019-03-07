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
var BetaEnemy = (function (_super) {
    __extends(BetaEnemy, _super);
    function BetaEnemy(name) {
        if (name === void 0) { name = 'beta_png'; }
        var _this = _super.call(this, name) || this;
        //撞击主角所造成的爆炸伤害
        _this.expoldeAtk = 20;
        _this.factor = 0;
        _this.hp = 80;
        _this.score = 2;
        _this.factor = Math.atan(Math.random() * Math.PI / 4) * (Math.random() < 0.5 ? 1 : -1);
        _this.bulletSpeed = 0.4;
        _this.bulletType = BetaBullet;
        _this.setScale(0.6);
        _this.bulletPositions = [
            { x: -25, y: 0 },
            { x: 25, y: 0 }
        ];
        return _this;
    }
    BetaEnemy.prototype.move = function (time) {
        var delY = this.flySpeed * time;
        this.y += delY;
        this.x += delY * this.factor;
        if (this.x < 50 || this.x > Global.stage.stageWidth - 50) {
            this.factor *= -1;
        }
    };
    return BetaEnemy;
}(AlphaEnemy));
__reflect(BetaEnemy.prototype, "BetaEnemy");
//# sourceMappingURL=BetaEnemy.js.map