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
var BloodItem = (function (_super) {
    __extends(BloodItem, _super);
    function BloodItem() {
        var _this = _super.call(this, 'blood_png') || this;
        //增加血量
        _this.blood = 10;
        return _this;
    }
    BloodItem.prototype.react = function (heroPlane) {
        heroPlane.addBlood(this.blood);
    };
    return BloodItem;
}(BaseItem));
__reflect(BloodItem.prototype, "BloodItem");
//# sourceMappingURL=BloodItem.js.map