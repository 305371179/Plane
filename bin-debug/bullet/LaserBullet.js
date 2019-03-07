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
var LaserBullet = (function (_super) {
    __extends(LaserBullet, _super);
    function LaserBullet(owner, name) {
        if (name === void 0) { name = 'bullet_ball_png'; }
        var _this = _super.call(this, owner, name) || this;
        _this.duration = 100;
        _this.timer = 0;
        _this.bitmap.visible = false;
        _this.owner = owner;
        _this.atk = 1;
        _this.setScale(1.5);
        _this.anchorOffsetX = 0;
        _this.anchorOffsetY = 0;
        // this.appear(0,0)
        _this.appear(_this.owner.x, _this.owner.y + _this.anchorOffsetY * _this.scaleY);
        if (LaserBullet.initFirst) {
            //提前资源
            var dragonbonesData = RES.getRes("laser_ske_json");
            var textureData = RES.getRes("laser_tex_json");
            var texture = RES.getRes("laser_tex_png");
            //组装数据
            LaserBullet.egretFactory = dragonBones.EgretFactory.factory;
            LaserBullet.egretFactory.parseDragonBonesData(dragonbonesData);
            LaserBullet.egretFactory.parseTextureAtlasData(textureData, texture);
        }
        //构建骨架显示对象
        var armatureDisplay = LaserBullet.egretFactory.buildArmatureDisplay("Sprite");
        //添加到舞台
        _this.addChild(armatureDisplay);
        armatureDisplay.animation.play("Sprite", 0);
        return _this;
    }
    LaserBullet.prototype.hitCheck = function (heroPlane, length) {
        if (length === void 0) { length = 50; }
        if (Math.abs(this.x - heroPlane.x) < length) {
            heroPlane.hurt(this);
        }
        return false;
    };
    LaserBullet.prototype.validate = function () {
        return true;
    };
    LaserBullet.prototype.move = function (time) {
        if (this.isDie)
            return;
        this.timer += time;
        if (this.timer > this.duration) {
            this.isDie = true;
        }
        this.appear(this.owner.x, this.owner.y + this.anchorOffsetY * this.scaleY);
    };
    LaserBullet.initFirst = true;
    return LaserBullet;
}(BaseBullet));
__reflect(LaserBullet.prototype, "LaserBullet");
//# sourceMappingURL=LaserBullet.js.map