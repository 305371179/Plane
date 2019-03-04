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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        // 正常情况下，60fps的时间是1/60 * 1000毫秒
        _this.timeInterval = 1 / 60 * 1000;
        _this.bgSpeed = 0.5;
        //记录上一帧的时间
        _this.timeOnEnterFrame = 0;
        return _this;
    }
    GameScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.setListeners();
    };
    /*设置监听*/
    GameScene.prototype.setListeners = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    GameScene.prototype.onEnterFrame = function () {
        /*获取每一帧的时间差，用时间间隔设置位移会更加平滑*/
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        this.timeOnEnterFrame = now;
        if (pass > this.timeInterval * 2) {
            console.log(pass, '返回这一帧');
            return;
        }
        this.scrollBg(pass);
    };
    /*滚动背景*/
    GameScene.prototype.scrollBg = function (pass) {
        var delY = this.bgSpeed * pass;
        this.bg1.y += delY;
        this.bg2.y += delY;
        if (this.bg1.y > Global.stage.stageHeight) {
            this.bg1.y = 0;
            this.bg2.y = -Global.stage.stageHeight;
        }
    };
    return GameScene;
}(eui.Component));
__reflect(GameScene.prototype, "GameScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameScene.js.map