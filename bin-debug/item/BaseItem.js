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
var BaseItem = (function (_super) {
    __extends(BaseItem, _super);
    function BaseItem(name) {
        return _super.call(this, name) || this;
        // this.init()
    }
    BaseItem.prototype.init = function () {
        this.flySpeed = 0.2;
        this.setScale(0.2);
        this.factor = Math.atan(Math.random() * Math.PI / 4) * (Math.random() < 0.5 ? 1 : -1);
    };
    /*影响*/
    BaseItem.prototype.react = function (heroPlane) {
    };
    BaseItem.prototype.move = function (time) {
        var delY = this.flySpeed * time;
        this.y += delY;
        // console.log(this.factor,4444)
        this.x += delY * this.factor;
        var _a = this.getXY(), x = _a.x, y = _a.y;
        if (this.x < x || this.x > Global.stage.stageWidth - x) {
            this.factor *= -1;
        }
    };
    return BaseItem;
}(BasePlane));
__reflect(BaseItem.prototype, "BaseItem");
//# sourceMappingURL=BaseItem.js.map