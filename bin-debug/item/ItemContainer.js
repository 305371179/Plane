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
var ItemContainer = (function (_super) {
    __extends(ItemContainer, _super);
    function ItemContainer() {
        var _this = _super.call(this) || this;
        _this.threshold = 500;
        _this.createTime = 0;
        _this.items = [];
        return _this;
    }
    //累计间隔时间,控制物品生成频率
    ItemContainer.prototype.addthreathod = function (passOnEnterFrame) {
        this.createTime += passOnEnterFrame;
        if (this.createTime > this.threshold) {
            this.createTime = 0;
            this.threshold = Math.random() * 1000 + 500;
            return true;
        }
        return false;
    };
    ItemContainer.prototype.appear = function (item) {
        var _a = item.getXY(), x = _a.x, y = _a.y;
        item.appear(x + Math.random() * (Global.stage.stageWidth - x), -y);
    };
    ItemContainer.prototype.createItem = function (passOnEnterFrame) {
        if (!this.addthreathod(passOnEnterFrame)) {
            return;
        }
        // console.log(44444)
        var item = new BloodItem();
        this.appear(item);
        this.addItem(item);
    };
    ItemContainer.prototype.move = function (heroPlane, time) {
        for (var i = this.items.length - 1; i >= 0; i--) {
            var item = this.items[i];
            item.move(time);
            if (item.hitCheck(heroPlane, 50)) {
                item.react(heroPlane);
                this.destroy(i);
                continue;
            }
            //子弹超出了屏幕，就销毁
            if (!item.validate()) {
                this.destroy(i);
            }
        }
    };
    ItemContainer.prototype.addItem = function (item) {
        this.items.push(item);
        this.addChild(item);
    };
    ItemContainer.prototype.destroy = function (index) {
        this.removeChildAt(index);
        this.items.splice(index, 1);
    };
    return ItemContainer;
}(egret.Sprite));
__reflect(ItemContainer.prototype, "ItemContainer");
//# sourceMappingURL=ItemContainer.js.map