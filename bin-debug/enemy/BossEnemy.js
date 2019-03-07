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
var BossEnemy = (function (_super) {
    __extends(BossEnemy, _super);
    function BossEnemy(name) {
        if (name === void 0) { name = 'boss_0_png'; }
        var _this = _super.call(this, name) || this;
        //撞击主角所造成的爆炸伤害
        _this.expoldeAtk = 20;
        _this.factor = 0;
        _this.direction = 1;
        _this.hp = 2000;
        _this.score = 1000;
        _this.factor = Math.atan(Math.random() * Math.PI / 4) * (Math.random() < 0.5 ? 1 : -1);
        _this.bulletSpeed = 0.4;
        _this.bulletType = BossBullet;
        _this.hitCheckRadius = 100;
        _this.changeSpeed();
        _this.setScale(0.6);
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
        ];
        return _this;
    }
    BossEnemy.prototype.changeSpeed = function () {
        this.flySpeed = 0.05 + Math.random() * 0.05;
    };
    BossEnemy.prototype.move = function (time) {
        this.flySpeed = 0.05 + Math.random() * 0.1;
        var delY = this.flySpeed * time;
        this.y += delY * this.direction;
        this.x += delY * this.factor;
        // if(this.x < 50 || this.x > Global.stage.stageWidth-50){
        // 	this.factor = Math.atan(Math.random()*Math.PI/4) * (this.factor<0?1:-1)
        // }
        // const x = this.anchorOffsetX*this.scaleX
        // const y = this.anchorOffsetY*this.scaleY
        var _a = this.getXY(), x = _a.x, y = _a.y;
        var factor = Math.atan(Math.random() * Math.PI / 4);
        if (this.x > Global.stage.stageWidth - x) {
            this.factor = -factor;
            this.changeSpeed();
        }
        else if (this.x < x) {
            this.factor = factor;
            this.changeSpeed();
        }
        if (this.y > Global.stage.stageHeight * 1 / 3) {
            this.direction = -1;
            this.factor = factor * (this.factor < 0 ? -1 : 1);
            this.changeSpeed();
        }
        else if (this.y < y) {
            this.direction = 1;
            this.factor = factor * (this.factor < 0 ? -1 : 1);
            this.changeSpeed();
        }
        // if(this.y>100){
        // 	this.y = 100
        // 	this.x =100
        // }
    };
    /*子弹发射*/
    BossEnemy.prototype.shoot = function (bulletContainer, time) {
        var _this = this;
        this.bulletPositions.forEach(function (item) {
            var positions = item['positions'];
            var type = item['type'];
            var shootInterval = item['shootInterval'];
            item['time'] = item['time'] ? item['time'] + time : time;
            if (item['time'] >= shootInterval) {
                item['time'] = 0;
                positions.forEach(function (position) {
                    var bullet = new type(_this);
                    bullet.show(position);
                    bulletContainer.addBullet(bullet);
                });
            }
        });
    };
    //
    BossEnemy.prototype.hitCheck = function (target, length) {
        if (length === void 0) { length = 50; }
        return false;
    };
    return BossEnemy;
}(AlphaEnemy));
__reflect(BossEnemy.prototype, "BossEnemy");
//# sourceMappingURL=BossEnemy.js.map