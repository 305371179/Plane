window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","MenuScene":"resource/eui_skins/MenuScene.exml","GameScene":"resource/eui_skins/GameScene.exml","GameOverScene":"resource/eui_skins/GameOverScene.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameOverScene.exml'] = window.GameOverSceneSkin = (function (_super) {
	__extends(GameOverSceneSkin, _super);
	function GameOverSceneSkin() {
		_super.call(this);
		this.skinParts = ["animation","label","score","group","historyScore","group0","button"];
		
		this.height = 768;
		this.width = 512;
		this.animation_i();
		this.elementsContent = [this._Image1_i(),this.label_i(),this.group_i(),this.group0_i(),this.button_i()];
		
		eui.Binding.$bindProperties(this, ["label"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [-60],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [60],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, ["button"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [768],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [501],[],this._Object6,"y");
	}
	var _proto = GameOverSceneSkin.prototype;

	_proto.animation_i = function () {
		var t = new egret.tween.TweenGroup();
		this.animation = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.ease = "circInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.ease = "circInOut";
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_level_3_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "游戏结束";
		t.y = 57;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.horizontalCenter = 0;
		t.width = 303;
		t.y = 219;
		t.elementsContent = [this._BitmapLabel1_i(),this.score_i()];
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 37;
		t.text = "score";
		t.width = 123;
		t.x = 35.5;
		t.y = 10.5;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.BitmapLabel();
		this.score = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 37;
		t.horizontalCenter = 73;
		t.text = "0";
		t.width = 145;
		t.y = 10.5;
		return t;
	};
	_proto.group0_i = function () {
		var t = new eui.Group();
		this.group0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.horizontalCenter = -0.5;
		t.width = 511;
		t.y = 144;
		t.elementsContent = [this._BitmapLabel2_i(),this.historyScore_i()];
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 37;
		t.text = "history score";
		t.width = 184;
		t.x = 27.5;
		t.y = 10.5;
		return t;
	};
	_proto.historyScore_i = function () {
		var t = new eui.BitmapLabel();
		this.historyScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 37;
		t.horizontalCenter = 123.5;
		t.text = "0";
		t.width = 246;
		t.y = 10.5;
		return t;
	};
	_proto.button_i = function () {
		var t = new eui.Button();
		this.button = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.label = "再玩一次";
		t.width = 204;
		t.y = 420;
		return t;
	};
	return GameOverSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameScene.exml'] = window.GameSceneSkin = (function (_super) {
	__extends(GameSceneSkin, _super);
	function GameSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg1","bg2","hp","score","group"];
		
		this.height = 768;
		this.width = 512;
		this.elementsContent = [this.bg1_i(),this.bg2_i(),this.group_i()];
	}
	var _proto = GameSceneSkin.prototype;

	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.source = "img_bg_level_2_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg2_i = function () {
		var t = new eui.Image();
		this.bg2 = t;
		t.source = "img_bg_level_2_jpg";
		t.x = 0;
		t.y = -768;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 42;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 10;
		t.elementsContent = [this._BitmapLabel1_i(),this.hp_i(),this._BitmapLabel2_i(),this.score_i()];
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 42;
		t.text = "HP";
		t.width = 49;
		t.x = 14;
		t.y = 0;
		return t;
	};
	_proto.hp_i = function () {
		var t = new eui.BitmapLabel();
		this.hp = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 42;
		t.text = "10000";
		t.width = 208;
		t.x = 64;
		t.y = 0;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 42;
		t.text = "SCORE";
		t.width = 102;
		t.x = 280;
		t.y = 0;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.BitmapLabel();
		this.score = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 42;
		t.horizontalCenter = 189;
		t.right = 1;
		t.text = "0";
		t.y = 0;
		return t;
	};
	return GameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MenuScene.exml'] = window.MenuSceneSkin = (function (_super) {
	__extends(MenuSceneSkin, _super);
	function MenuSceneSkin() {
		_super.call(this);
		this.skinParts = ["animation","label","button"];
		
		this.height = 768;
		this.width = 512;
		this.animation_i();
		this.elementsContent = [this._Image1_i(),this.label_i(),this.button_i()];
		
		eui.Binding.$bindProperties(this, ["label"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [120],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["button"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [768],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [384],[],this._Object4,"y");
	}
	var _proto = MenuSceneSkin.prototype;

	_proto.animation_i = function () {
		var t = new egret.tween.TweenGroup();
		this.animation = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.ease = "bounceOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "sineOut";
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_level_1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "欢迎进入飞机大战游戏";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 120;
		return t;
	};
	_proto.button_i = function () {
		var t = new eui.Button();
		this.button = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 50;
		t.label = "开始游戏";
		t.width = 204;
		t.x = 154;
		t.y = 384;
		return t;
	};
	return MenuSceneSkin;
})(eui.Skin);