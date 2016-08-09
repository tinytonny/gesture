'use strict'

var myGesture = {

    //水平和垂直位移
    displacement: {
        x: null,
        y: null
    },

    //坐标：包含初始时坐标和结束时坐标
    pos: {
        startX: null,
        startY: null,
        endX: null,
        endY: null
    },

    //初始化函数
    init: function () {
        var self = this;
        document.addEventListener("touchstart", self.fnStart ,true);
        document.addEventListener("touchend", self.fnEnd ,true);
    },

    //获取手势运动方向 1：向左和向上运动 2：向右和向下运动
    fnGetDirection: function () {
        var self = myGesture;
        var dx = self.pos.startX - self.pos.endX;
        var dy = self.pos.startY - self.pos.endY;
        self.displacement.x = dx > 0 ? 1 : 2;
        self.displacement.y = dy > 0 ? 1 : 2;
        return self.displacement;
    },

    //touchstart事件所触发的Handler
    fnStart: function (e) {
        var self = myGesture;
        self.pos.startX = e.touches[0].pageX || 0;
        self.pos.startY = e.touches[0].pageY || 0;
    },

    //touchend事件所触发的Handler
    fnEnd: function (e) {
        var self = myGesture;
        self.pos.endX = e.changedTouches[0].pageX || 0;
        self.pos.endY = e.changedTouches[0].pageY || 0;
        console.log(self.pos);
        var direct = self.fnGetDirection();
        switch (direct.x) {
            case 1:
                console.log("向左");
                break;
            case 2:
                console.log("向右");
                break;
            default:
                console.log("x轴没变化");
                break;
        }
        switch (direct.y) {
            case 1:
                console.log("向上");
                break;
            case 2:
                console.log("向下");
                break;
            default:
                console.log("y轴没变化");
                break;
        }
    }
};

myGesture.init();
