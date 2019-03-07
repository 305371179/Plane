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
var BossEnemy2 = (function (_super) {
    __extends(BossEnemy2, _super);
    function BossEnemy2(name) {
        if (name === void 0) { name = 'boss_2_png'; }
        var _this = _super.call(this, name) || this;
        //撞击主角所造成的爆炸伤害
        _this.expoldeAtk = 20;
        _this.factor = 0;
        _this.direction = 1;
        _this.laserDuration = 2000;
        _this.laserInterval = 1000;
        _this.laserTime = 0;
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
    /*子弹发射*/
    BossEnemy2.prototype.shoot = function (bulletContainer, time) {
        _super.prototype.shoot.call(this, bulletContainer, time);
        this.laserTime += time;
        if (!this.laserBullet && this.laserTime > this.laserInterval) {
            this.laserBullet = new LaserBullet(this);
            this.laserBullet.duration = this.laserDuration;
            bulletContainer.addBullet(this.laserBullet);
            this.laserTime = 0;
        }
        else if (this.laserBullet && this.laserBullet.isDie) {
            this.laserTime = 0;
            this.laserBullet = null;
            this.laserDuration = 2000 + Math.random() * 4000;
            this.laserInterval = 4000 + Math.random() * 2000;
        }
    };
    return BossEnemy2;
}(BossEnemy));
__reflect(BossEnemy2.prototype, "BossEnemy2");
//# sourceMappingURL=BossEnemy2.js.map