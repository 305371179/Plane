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
/*所有对象的基类，提供一些最通用的方法*/
var BaseObject = (function (_super) {
    __extends(BaseObject, _super);
    function BaseObject(name) {
        var _this = _super.call(this) || this;
        _this.bitmap = _this.createBitmapByName(name);
        _this.addChild(_this.bitmap);
        // 设置锚点为图片中心点
        _this.setCenter();
        return _this;
    }
    BaseObject.prototype.setCenter = function () {
        this.anchorOffsetX = this.bitmap.width / 2;
        this.anchorOffsetY = this.bitmap.height / 2;
    };
    /*设置缩放*/
    BaseObject.prototype.setScale = function (scale) {
        this.scaleX = scale;
        this.scaleY = scale;
    };
    /*将资源名转化成位图*/
    BaseObject.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        if (!texture) {
            throw name + "\u56FE\u7247\u4E0D\u5B58\u5728";
        }
        result.texture = texture;
        return result;
    };
    return BaseObject;
}(egret.Sprite));
__reflect(BaseObject.prototype, "BaseObject");
//# sourceMappingURL=BaseObject.js.map