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
        _this.lockTime = 100;
        return _this;
    }
    GameScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.setListeners();
    };
    GameScene.prototype.init = function () {
        this.bulletContainer = new BulletContainer();
        this.heroPlane = new HeroPlane('hero_png');
        this.heroPlane.appear(Global.stage.stageWidth / 2, Global.stage.stageHeight * 2 / 3);
        this.addChild(this.bulletContainer);
        this.addChild(this.heroPlane);
    };
    /*设置监听*/
    GameScene.prototype.setListeners = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchStart, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        //通过事件的监听，可以让代码解耦合，不用在对象里保留对方的引用
        this.heroPlane.addEventListener('setHP', this.setHP, this);
        this.heroPlane.addEventListener('setScore', this.setScore, this);
        //初始化分数和血量
        this.heroPlane.dispatchHPEvent();
        this.heroPlane.dispatchScoreEvent();
    };
    GameScene.prototype.setHP = function (event) {
        this.hp.text = event.data;
    };
    GameScene.prototype.setScore = function (event) {
        this.score.text = event.data;
    };
    GameScene.prototype.removeListener = function () {
        this.touchEnabled = false;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchStart, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.heroPlane.removeEventListener('setHP', this.setHP, this);
        this.heroPlane.removeEventListener('setScore', this.setScore, this);
    };
    GameScene.prototype.touchStart = function (e) {
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.heroPlane.move(e.stageX, e.stageY);
    };
    /*控制手机滑动的频率，提高性能，节省电量*/
    GameScene.prototype.setLockTimeout = function () {
        if (this.lockTouchMove) {
            return true;
        }
        this.lockTouchMove = true;
        egret.clearTimeout(this.timeoutId);
        this.timeoutId = egret.setTimeout(function () {
            this.lockTouchMove = false;
        }, this, this.lockTime);
        return false;
    };
    GameScene.prototype.touchMove = function (e) {
        if (this.setLockTimeout()) {
            return;
        }
        this.heroPlane.move(e.stageX, e.stageY);
    };
    GameScene.prototype.touchEnd = function (e) {
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
    };
    GameScene.prototype.onEnterFrame = function () {
        /*获取每一帧的时间差，用时间间隔设置位移会更加平滑*/
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        this.timeOnEnterFrame = now;
        //当帧频低于30帧，就跳过，一般来说，页面从后台转入前台就会出现低于30帧的情况
        if (pass > this.timeInterval * 2) {
            return;
        }
        this.scrollBg(pass);
        this.heroPlane.shoot(this.bulletContainer, pass);
        this.bulletContainer.move();
    };
    /*滚动背景*/
    GameScene.prototype.scrollBg = function (pass) {
        var delY = this.bgSpeed * pass;
        this.bg1.y += delY;
        this.bg2.y += delY;
        if (this.bg1.y > this.bg1.height) {
            this.bg1.y = this.bg2.y;
            this.bg2.y = this.bg1.y - this.bg2.height;
        }
    };
    return GameScene;
}(eui.Component));
__reflect(GameScene.prototype, "GameScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameScene.js.map