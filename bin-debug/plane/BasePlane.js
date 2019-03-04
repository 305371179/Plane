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
        //血量
        _this.hp = 10000;
        //攻击力
        _this.atk = 10;
        //飞行速度
        _this.flySpeed = 300;
        //爆炸粒子动画播放的时间
        _this.explodeTime = 1000;
        //受攻击粒子动画播放的时间
        _this.hurtTime = 500;
        //是否爆炸的状态
        _this.isExplode = false;
        //是否销毁的状态
        _this.isDie = false;
        return _this;
    }
    /*
    碰撞检测
    通过比较飞机直接的直线距离和给定值length大小，来判断是否碰撞
    */
    BasePlane.prototype.hitCheck = function (target, length) {
        if (length === void 0) { length = 50; }
        // 如果对象已经爆炸了，就无需继续检测
        if (target.isExplode)
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
    /*飞行*/
    BasePlane.prototype.fly = function (x, y) {
    };
    /*受到子弹攻击，遭受伤害*/
    BasePlane.prototype.hurt = function () {
    };
    /*受到撞击，遭受伤害*/
    BasePlane.prototype.impact = function () {
    };
    /*血量耗尽，触发爆炸*/
    BasePlane.prototype.explode = function () {
    };
    return BasePlane;
}(BaseObject));
__reflect(BasePlane.prototype, "BasePlane");
//# sourceMappingURL=BasePlane.js.map