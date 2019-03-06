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
var HeroPlane = (function (_super) {
    __extends(HeroPlane, _super);
    function HeroPlane(name) {
        return _super.call(this, name) || this;
    }
    HeroPlane.prototype.init = function () {
        this.setScale(0.5);
        this.flySpeed = 300;
        this.hp = 10;
        this.bulletSpeed = -0.6;
        this.bulletPositions = [
            { x: -20, y: 20 },
            { x: 20, y: 20 }
        ];
        Global.plane = this;
    };
    /*飞机的飞行*/
    HeroPlane.prototype.fly = function (x, y) {
        var speedo = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) / this.flySpeed;
        egret.Tween.removeTweens(this);
        var tw = egret.Tween.get(this, {});
        tw.to({ x: x, y: y }, speedo * 1000, egret.Ease.sineOut);
    };
    /*增加血量*/
    HeroPlane.prototype.addBlood = function (blood) {
        if (blood === void 0) { blood = 0; }
        this.dispatchHPEvent(-blood);
    };
    /*派发血量改变事件*/
    HeroPlane.prototype.dispatchHPEvent = function (atk) {
        if (atk === void 0) { atk = 0; }
        if (this.hp === 0)
            return;
        this.hp -= atk;
        if (this.hp <= 0) {
            this.hp = 0;
            this.explode();
        }
        var event = new egret.Event('setHP');
        event.data = this.hp;
        this.dispatchEvent(event);
    };
    /*派发分数改变事件*/
    HeroPlane.prototype.dispatchScoreEvent = function (score) {
        if (score === void 0) { score = 0; }
        this.score += score;
        var event = new egret.Event('setScore');
        event.data = this.score + '';
        this.dispatchEvent(event);
    };
    /*子弹发射*/
    HeroPlane.prototype.shoot = function (bulletContainer, time) {
        var _this = this;
        if (this.isExplode)
            return;
        if (!this.addShootTime(time)) {
            return;
        }
        this.bulletPositions.forEach(function (position) {
            var bullet = new BaseBullet('bullet_png', _this);
            bullet.show(position);
            bulletContainer.addBullet(bullet);
        });
    };
    HeroPlane.prototype.hurt = function (target) {
        if (target instanceof BaseEnemy) {
            this.dispatchHPEvent(target.expoldeAtk);
        }
        else {
            this.dispatchHPEvent(target.atk);
        }
        this.playHurtParticle(target);
    };
    HeroPlane.prototype.explode = function () {
        var _this = this;
        this.playHurtParticle(null, function () {
            var event = new egret.Event('gameOver');
            _this.dispatchEvent(event);
        });
    };
    return HeroPlane;
}(BasePlane));
__reflect(HeroPlane.prototype, "HeroPlane");
//# sourceMappingURL=HeroPlane.js.map