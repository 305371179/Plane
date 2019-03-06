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
var EnemyContainer = (function (_super) {
    __extends(EnemyContainer, _super);
    function EnemyContainer() {
        var _this = _super.call(this) || this;
        _this.threshold = 1000;
        _this.createTime = 0;
        _this.enemies = [];
        return _this;
    }
    //累计间隔时间,控制敌机生成频率
    EnemyContainer.prototype.addthreathod = function (passOnEnterFrame) {
        this.createTime += passOnEnterFrame;
        if (this.createTime > this.threshold) {
            this.createTime = 0;
            return true;
        }
        return false;
    };
    EnemyContainer.prototype.appear = function (enemy) {
        enemy.appear(Math.random() * Global.stage.stageWidth, -50);
    };
    EnemyContainer.prototype.createEnemy = function (passOnEnterFrame) {
        if (!this.addthreathod(passOnEnterFrame)) {
            return;
        }
        var enemy = new BaseEnemy('alpha_png');
        this.appear(enemy);
        this.addEnemy(enemy);
    };
    EnemyContainer.prototype.moveAndShoot = function (heroPlane, bulletContainer, time) {
        for (var i = this.enemies.length - 1; i >= 0; i--) {
            var enemy = this.enemies[i];
            enemy.move(time);
            if (enemy.isDie) {
                this.destroy(i);
                continue;
            }
            if (enemy.isExplode) {
                continue;
            }
            enemy.shoot(bulletContainer, time);
            if (enemy.hitCheck(heroPlane, 80)) {
                // this.destroy(i)
                enemy.explode();
                heroPlane.hurt(enemy);
                continue;
            }
            //子弹超出了屏幕，就销毁
            if (!enemy.validate()) {
                this.destroy(i);
            }
        }
    };
    EnemyContainer.prototype.hitCheck = function (heroPlane, target) {
        for (var i = this.enemies.length - 1; i >= 0; i--) {
            var enemy = this.enemies[i];
            //当飞机还在屏幕外面，就不做碰撞检测
            if (enemy.y < 0 || enemy.isExplode)
                continue;
            if (target.hitCheck(enemy)) {
                // this.destroy(i)
                var hp = enemy.hurt(target);
                if (hp === 0) {
                    heroPlane.dispatchScoreEvent(enemy.score);
                }
                // this.gameScene.scoreNumber = enemy.score
                // enemy.hurm(bullet)
                // enemy.explode()
                return enemy;
            }
        }
        return null;
    };
    EnemyContainer.prototype.addEnemy = function (enemy) {
        this.enemies.push(enemy);
        this.addChild(enemy);
    };
    EnemyContainer.prototype.destroy = function (index) {
        this.removeChildAt(index);
        this.enemies.splice(index, 1);
    };
    return EnemyContainer;
}(egret.Sprite));
__reflect(EnemyContainer.prototype, "EnemyContainer");
//# sourceMappingURL=EnemyContainer.js.map