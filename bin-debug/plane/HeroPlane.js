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
        var _this = _super.call(this, name) || this;
        _this.score = 0;
        return _this;
    }
    HeroPlane.prototype.init = function () {
        this.setScale(0.5);
        this.flySpeed = 300;
        this.hp = 1000;
        this.bulletSpeed = -6;
        this.bulletPositions = [
            { x: -20, y: 20 },
            { x: 20, y: 20 }
        ];
    };
    /*飞机的飞行*/
    HeroPlane.prototype.move = function (x, y) {
        var speedo = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) / this.flySpeed;
        egret.Tween.removeTweens(this);
        var tw = egret.Tween.get(this, {});
        tw.to({ x: x, y: y }, speedo * 1000, egret.Ease.sineOut);
    };
    /*派发血量改变事件*/
    HeroPlane.prototype.dispatchHPEvent = function () {
        var event = new egret.Event('setHP');
        event.data = this.hp + '';
        this.dispatchEvent(event);
    };
    /*派发分数改变事件*/
    HeroPlane.prototype.dispatchScoreEvent = function () {
        var event = new egret.Event('setScore');
        event.data = this.score + '';
        this.dispatchEvent(event);
    };
    /*子弹发射*/
    HeroPlane.prototype.shoot = function (bulletContainer, timeOnEnterFrame) {
        // this.bulletPositions.forEach(position => {
        var _this = this;
        // })
        if (!this.addShootTime(timeOnEnterFrame)) {
            return;
        }
        this.bulletPositions.forEach(function (position) {
            var bullet = new BaseBullet('bullet_png', _this);
            bullet.show(position);
            bulletContainer.addBullet(bullet);
        });
    };
    return HeroPlane;
}(BasePlane));
__reflect(HeroPlane.prototype, "HeroPlane");
//# sourceMappingURL=HeroPlane.js.map