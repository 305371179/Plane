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
var BaseParticle = (function (_super) {
    __extends(BaseParticle, _super);
    function BaseParticle(textureName, configName) {
        if (textureName === void 0) { textureName = "boom_white_png"; }
        if (configName === void 0) { configName = "boom_white_json"; }
        var _this = this;
        //获取纹理
        var texture = RES.getRes(textureName);
        //获取配置
        var config = RES.getRes(configName);
        _this = _super.call(this, texture, config) || this;
        return _this;
    }
    return BaseParticle;
}(particle.GravityParticleSystem));
__reflect(BaseParticle.prototype, "BaseParticle");
//# sourceMappingURL=BaseParticle.js.map