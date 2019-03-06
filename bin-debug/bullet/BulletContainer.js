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
var BulletContainer = (function (_super) {
    __extends(BulletContainer, _super);
    // private sound:egret.Sound;
    function BulletContainer() {
        var _this = _super.call(this) || this;
        _this.bullets = [];
        return _this;
        // this.sound = RES.getRes('bullet_mp3')
    }
    BulletContainer.prototype.addBullet = function (bullet) {
        this.bullets.push(bullet);
        this.addChild(bullet);
        // this.sound.play()
    };
    BulletContainer.prototype.move = function (heroPlane, enemiyContainer, time) {
        for (var i = this.bullets.length - 1; i >= 0; i--) {
            var bullet = this.bullets[i];
            bullet.move(time);
            //子弹是主角飞机发射的，检查是否碰撞到敌机
            if (bullet.owner === heroPlane) {
                var enemy = enemiyContainer.hitCheck(heroPlane, bullet);
                if (enemy) {
                    // heroPlane.dispatchScoreEvent(enemy.score)
                    this.destroy(i);
                    continue;
                }
            }
            else {
                if (bullet.hitCheck(heroPlane)) {
                    heroPlane.hurt(bullet);
                    this.destroy(i);
                    continue;
                }
            }
            //子弹超出了屏幕，就销毁
            if (!bullet.validate()) {
                this.destroy(i);
            }
        }
        // console.log(this.bullets.length,this.numChildren)
    };
    BulletContainer.prototype.destroy = function (index) {
        this.removeChildAt(index);
        this.bullets.splice(index, 1);
    };
    return BulletContainer;
}(egret.Sprite));
__reflect(BulletContainer.prototype, "BulletContainer");
//# sourceMappingURL=BulletContainer.js.map