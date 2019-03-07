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
var BossEnemy1 = (function (_super) {
    __extends(BossEnemy1, _super);
    function BossEnemy1(name) {
        if (name === void 0) { name = 'boss_1_png'; }
        var _this = _super.call(this, name) || this;
        //撞击主角所造成的爆炸伤害
        _this.expoldeAtk = 20;
        _this.factor = 0;
        _this.direction = 1;
        _this.bulletPositions = [
            {
                type: BossBullet,
                shootInterval: 1500 + Math.random() * 1000,
                positions: [
                    { x: -32, y: 0 }, { x: 32, y: 0 }
                ]
            },
            {
                type: BossDartBullet,
                shootInterval: 2500 + Math.random() * 1000,
                positions: [
                    { x: -100, y: 10 }, { x: 100, y: 10 }
                ]
            },
            {
                type: BossNavBullet,
                shootInterval: 3500 + Math.random() * 1000,
                positions: [
                    { x: -60, y: 0 }, { x: 60, y: 0 }
                ]
            },
        ];
        return _this;
    }
    return BossEnemy1;
}(BossEnemy));
__reflect(BossEnemy1.prototype, "BossEnemy1");
//# sourceMappingURL=BossEnemy1.js.map