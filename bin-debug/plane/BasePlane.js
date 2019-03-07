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
/*飞机的基类，提供通用的方法和属性*/
var BasePlane = (function (_super) {
    __extends(BasePlane, _super);
    function BasePlane(name) {
        var _this = _super.call(this, name) || this;
        //飞机的分数值
        _this.score = 0;
        //血量
        _this.hp = 10000;
        //攻击力
        _this.atk = 10;
        //飞行速度
        _this.flySpeed = 300;
        //是否爆炸的状态
        _this.isExplode = false;
        //是否销毁的状态
        _this.isDie = false;
        //子弹出现的位置
        _this.bulletPositions = [];
        //子弹飞行的速度
        _this.bulletSpeed = 0.05;
        //子弹发射的频率
        _this.shootInterval = 200;
        _this.threshold = 0;
        //碰撞半径
        _this.hitCheckRadius = 50;
        _this.init();
        return _this;
    }
    /*初始化*/
    BasePlane.prototype.init = function () {
    };
    //累计间隔时间,控制子弹发射的频率
    BasePlane.prototype.addShootTime = function (passOnEnterFrame) {
        this.threshold += passOnEnterFrame;
        if (this.threshold > this.shootInterval) {
            this.threshold = 0;
            return true;
        }
        return false;
    };
    /*
    碰撞检测
    通过比较飞机直接的直线距离和给定值length大小，来判断是否碰撞
    */
    BasePlane.prototype.hitCheck = function (target, length) {
        if (length === void 0) { length = 50; }
        return this._hitCheck(target, length);
    };
    BasePlane.prototype._hitCheck = function (target, length) {
        if (length === void 0) { length = 50; }
        // 如果对象已经爆炸了，就无需继续检测
        if (this.isExplode || target.isExplode)
            return false;
        var x1 = this.x;
        var y1 = this.y;
        var x2 = target.x;
        var y2 = target.y;
        if ((Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)) > Math.pow(length, 2)) {
            return false;
        }
        return true;
    };
    /*减少血量*/
    BasePlane.prototype.reduceHP = function (target) {
        this.hp -= target.atk;
        if (this.hp <= 0) {
            this.explode();
        }
    };
    /*出现的初始位置*/
    BasePlane.prototype.appear = function (x, y) {
        this.x = x;
        this.y = y;
    };
    /*发射子弹*/
    BasePlane.prototype.shoot = function (bulletContainer, passOnEnterFrame) {
    };
    // /*飞行*/
    // public fly(x:number, y:number){
    // }
    /*受到子弹攻击，遭受伤害*/
    BasePlane.prototype.hurt = function (target) {
        this.playHurtParticle(target);
    };
    BasePlane.prototype.playHurtParticle = function (target, callback) {
        var _this = this;
        if (target === void 0) { target = null; }
        if (callback === void 0) { callback = null; }
        var config = 'boom_hurt_json';
        if (!target) {
            config = 'boom_explode_json';
        }
        var particle = new BaseParticle('boom_yellow_png', config);
        if (target) {
            var x = target.x;
            var y = target.y;
            if (target instanceof BaseEnemy) {
                x = this.x + target.x >> 1;
                y = this.y + target.y >> 1;
            }
            var point = this.globalToLocal(x, y);
            particle.x = point.x;
            particle.y = point.y;
        }
        else {
            particle.x = this.anchorOffsetX;
            particle.y = this.anchorOffsetY;
        }
        particle.start(500);
        this.addChild(particle);
        egret.setTimeout(function () {
            _this.removeChild(particle);
            if (!target) {
                _this.isDie = true;
                callback && callback();
            }
        }, this, 1000);
    };
    /*受到撞击，遭受伤害*/
    BasePlane.prototype.impact = function () {
    };
    /*血量耗尽，触发爆炸*/
    BasePlane.prototype.explode = function () {
    };
    BasePlane.prototype.getXY = function () {
        return new egret.Point(this.anchorOffsetX * this.scaleX, this.anchorOffsetY * this.scaleY);
    };
    /*判断飞机是否在屏幕外面了*/
    BasePlane.prototype.validate = function () {
        var _a = this.getXY(), x = _a.x, y = _a.y;
        return !(this.x < -x || this.x > Global.stage.stageWidth + y || this.y < -y || this.y > Global.stage.stageHeight + y);
    };
    /*销毁对象*/
    BasePlane.prototype.destroy = function () {
        if (this.parent) {
            this.isDie = true;
            this.parent.removeChild(this);
        }
    };
    /*飞机移动*/
    BasePlane.prototype.move = function (time) {
        this.y += this.flySpeed * time;
    };
    return BasePlane;
}(BaseObject));
__reflect(BasePlane.prototype, "BasePlane");
//# sourceMappingURL=BasePlane.js.map