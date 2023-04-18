System.register("chunks:///_virtual/BgController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,r,e,n,i;return{setters:[function(t){o=t.inheritsLoose,r=t.createForOfIteratorHelperLoose},function(t){e=t.cclegacy,n=t._decorator,i=t.Component}],execute:function(){var s;e._RF.push({},"4fb40SP9KpIxpi2z2Di+N/J","BgController",void 0);var c=n.ccclass;n.property,t("BgController",c("BgController")(s=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.start=function(){},n.update=function(t){for(var o,e=r(this.node.children);!(o=e()).done;){var n=o.value,i=n.getPosition(),s=i.x,c=i.y,l=i.z,u=c-50*t;n.setPosition(s,u,l),u<-850&&n.setPosition(s,u+1704,l)}},e}(i))||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/BulletController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EnemyController.ts"],(function(t){"use strict";var e,o,n,r,i,l,s,c,a,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,l=t._decorator,s=t.BoxCollider2D,c=t.Contact2DType,a=t.Component},function(t){u=t.EnemyController}],execute:function(){var p,d,h;i._RF.push({},"3d5718zFERIhaG7xmslS6/g","BulletController",void 0);var y=l.ccclass,C=l.property;t("BulletController",y("BulletController")((h=e((d=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return e=t.call.apply(t,[this].concat(i))||this,n(e,"speed",h,r(e)),e}o(e,t);var i=e.prototype;return i.start=function(){this.getComponent(s).on(c.BEGIN_CONTACT,this.onBeginContact,this)},i.update=function(t){var e=this.node.getPosition(),o=e.x,n=e.y,r=e.z;this.node.setPosition(o,n+this.speed*t,r),n>820&&this.node.destroy()},i.onBeginContact=function(t,e,o){1==e.tag&&(e.getComponent(u).die(),this.node.destroy())},e}(a)).prototype,"speed",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 800}}),p=d))||p);i._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,o,r,i,s,c;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,r=e.resources,i=e.SpriteFrame,s=e.Sprite,c=e.Component}],execute:function(){var u;n._RF.push({},"48a1b4lrUtG65mG7UuxAvZ8","EnemyController",void 0);var a=o.ccclass;o.property,e("EnemyController",a("EnemyController")(u=function(e){function n(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).isDie=!1,t}t(n,e);var o=n.prototype;return o.start=function(){},o.update=function(e){var t=this.node.getPosition(),n=t.x,o=t.y,r=t.z,i=o-300*e;i<-850?this.node.destroy():this.isDie||this.node.setPosition(n,i,r)},o.die=function(){var e=this;this.isDie=!0,r.load("enemy0_die/spriteFrame",i,(function(t,n){e.node.getComponent(s).spriteFrame=n})),setTimeout((function(){e.node.destroy()}),300)},n}(c))||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r,i,a,o,s,c,l,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Prefab,c=e.instantiate,l=e.director,u=e.Component}],execute:function(){var p,y,h,f,g;a._RF.push({},"d74acT3KjBBT5hM2QPllxPA","EnemyManager",void 0);var m=o.ccclass,d=o.property;e("EnemyManager",(p=m("EnemyManager"),y=d(s),p((g=t((f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,r(t,"enemyPre",g,i(t)),t}return n(t,e),t.prototype.start=function(){var e=this,t=this.node.getPosition(),n=t.y,r=t.z;this.schedule((function(){var t=c(e.enemyPre);t.setParent(l.getScene().getChildByName("Canvas"));var i=400*Math.random()+20;t.setPosition(i,n,r)}),.8)},t}(u)).prototype,"enemyPre",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=f))||h));a._RF.pop()}}}));

System.register("chunks:///_virtual/Home.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,r,n;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,r=t._decorator,n=t.Component}],execute:function(){var c;o._RF.push({},"9a99awBBYFJKruUkBtcNtPZ","Home",void 0);var u=r.ccclass;r.property,t("Home",u("Home")(c=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var r=o.prototype;return r.start=function(){},r.update=function(t){},o}(n))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/LoadResources.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var o,r,t,c,n,s,u;return{setters:[function(e){o=e.inheritsLoose},function(e){r=e.cclegacy,t=e._decorator,c=e.resources,n=e.SpriteFrame,s=e.director,u=e.Component}],execute:function(){var i;r._RF.push({},"eec98OtCq5I+LJY0Q+n9Wg5","LoadResources",void 0);var a=t.ccclass;t.property,e("LoadResources",a("LoadResources")(i=function(e){function r(){return e.apply(this,arguments)||this}o(r,e);var t=r.prototype;return t.start=function(){c.preloadDir("",n,(function(e,o){console.log("加载完成",e,o),s.loadScene("run")}))},t.update=function(e){},r}(u))||i);r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./BgController.ts","./BulletController.ts","./EnemyController.ts","./EnemyManager.ts","./Home.ts","./LoadResources.ts","./PlayerController.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EnemyController.ts"],(function(e){"use strict";var t,n,o,r,i,l,s,a,c,u,p,d,y,h,f,C,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,l=e._decorator,s=e.Prefab,a=e.Node,c=e.BoxCollider2D,u=e.Contact2DType,p=e.resources,d=e.SpriteFrame,y=e.Sprite,h=e.Component,f=e.instantiate,C=e.director},function(e){g=e.EnemyController}],execute:function(){var v,P,m,b,D;i._RF.push({},"dd4e0z5JelIJYkrV6QYQ1oV","PlayerController",void 0);var T=l.ccclass,_=l.property;e("PlayerController",(v=T("PlayerController"),P=_(s),v((D=t((b=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i))||this,o(t,"bulletPre",D,r(t)),t.isDie=!1,t}n(t,e);var i=t.prototype;return i.start=function(){var e=this;this.node.on(a.EventType.TOUCH_MOVE,(function(t){var n=t.getUILocation();e.node.setWorldPosition(n.x,n.y,0)}));this.schedule((function t(){e.isDie&&e.unschedule(t);var n=f(e.bulletPre);n.setParent(C.getScene().getChildByName("Canvas"));var o=e.node.getPosition(),r=o.x,i=o.y,l=o.z;n.setPosition(r,i+65,l)}),.5),this.getComponent(c).on(u.BEGIN_CONTACT,this.onBeginContact,this)},i.onBeginContact=function(e,t,n){1===t.tag&&(t.getComponent(g).die(),this.die())},i.die=function(){var e=this;this.isDie=!0,p.load("hero1_die/spriteFrame",d,(function(t,n){e.node.getComponent(y).spriteFrame=n})),setTimeout((function(){e.node.destroy()}),500)},t}(h)).prototype,"bulletPre",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=b))||m));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});