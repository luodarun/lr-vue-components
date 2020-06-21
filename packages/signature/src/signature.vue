<template>
  <div :style="{ width, height }" ref="canvasHW" class="lr-signature-wrap">
    <canvas
      class="lr-signature"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      ref="canvasF"
      @mousedown="mouseDown"
      @mousemove="mouseMove"
      @mouseup="mouseUp"
    ></canvas>
  </div>
</template>

<script>
import { getPoint } from "lr-ui/src/utils/dom";
export default {
  name: "LrSignature",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      points: [],
      canvasTxt: null,
      startX: 0,
      startY: 0,
      moveY: 0,
      moveX: 0,
      endY: 0,
      endX: 0,
      w: null,
      h: null,
      isDown: false,
      color: "#000",
      linewidth: 3,
      isDraw: false, //签名标记
      canvasPositon: {
        x: 0,
        y: 0
      }
    };
  },
  created() {},
  mounted() {
    let canvas = this.$refs.canvasF;
    canvas.height = this.$refs.canvasHW.offsetHeight;
    canvas.width = this.$refs.canvasHW.offsetWidth;
    this.canvasTxt = canvas.getContext("2d");
    this.canvasTxt.strokeStyle = this.color;
    this.canvasTxt.lineWidth = this.linewidth;
    this.canvasPositon = getPoint(canvas);
  },
  components: {},
  methods: {
    //电脑设备事件
    mouseDown(ev) {
      ev = ev || event;
      ev.preventDefault();
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };
      this.startX = obj.x;
      this.startY = obj.y;
      this.canvasTxt.beginPath();
      this.points.push(obj);
      this.isDraw = true;
      this.isDown = true;
    },
    //移动设备事件
    touchStart(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        this.isDraw = true; //签名标记
        let obj = {
          x: ev.targetTouches[0].clientX,
          y: ev.targetTouches[0].clientY - this.canvasPositon.y
        }; //y的计算值中：document.body.offsetHeight*0.5代表的是除了整个画板signatureBox剩余的高，this.$refs.canvasHW.offsetHeight*0.1是画板中标题的高
        this.startX = obj.x;
        this.startY = obj.y;
        this.canvasTxt.beginPath();
        this.points.push(obj);
      }
    },
    //电脑设备事件
    mouseMove(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (this.isDown) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        };
        this.moveY = obj.y;
        this.moveX = obj.x;
        this.canvasTxt.moveTo(this.startX, this.startY);
        this.canvasTxt.lineTo(obj.x, obj.y);
        this.canvasTxt.stroke();
        this.startY = obj.y;
        this.startX = obj.x;
        this.points.push(obj);
      }
    },
    //移动设备事件
    touchMove(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        let obj = {
          x: ev.targetTouches[0].clientX,
          y: ev.targetTouches[0].clientY - this.canvasPositon.y
        };
        this.moveY = obj.y;
        this.moveX = obj.x;
        this.canvasTxt.moveTo(this.startX, this.startY);
        this.canvasTxt.lineTo(obj.x, obj.y);
        this.canvasTxt.stroke();
        this.startY = obj.y;
        this.startX = obj.x;
        this.points.push(obj);
      }
    },
    //电脑设备事件
    mouseUp(ev) {
      ev = ev || event;
      ev.preventDefault();
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };
      this.canvasTxt.closePath();
      this.points.push(obj);
      this.points.push({ x: -1, y: -1 });
      this.isDown = false;
    },
    //移动设备事件
    touchEnd(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        let obj = {
          x: ev.targetTouches[0].clientX,
          y: ev.targetTouches[0].clientY - this.canvasPositon.y
        };
        this.canvasTxt.closePath();
        this.points.push(obj);
        this.points.push({ x: -1, y: -1 });
      }
    },
    //重写
    clearSignature() {
      this.canvasTxt.clearRect(
        0,
        0,
        this.$refs.canvasF.width,
        this.$refs.canvasF.height
      );
      this.points = [];
      this.isDraw = false; //签名标记
    },
    //确认签名
    sureSignature() {
      if (this.isDraw) {
        return this.$refs.canvasF.toDataURL();
      } else {
        this.$message.warning("请绘制后再来操作！");
      }
    }
  }
};
</script>

<style type="less" scoped>
.signatureBox {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50%;
  background: darkgray;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 100;
  /*display: flex;*/
  /*flex-direction: column;*/
}
.canvasBox {
  padding: 0px 5px;
  height: 90%;
}
canvas {
  border: 1px solid gray;
}
.btnBox {
  height: 30px;
  padding: 5px;
  text-align: center;
  line-height: 30px;
}
.btnBox button {
  border: 1px solid dodgerblue;
  background: dodgerblue;
  color: #fff;
  border-radius: 4px;
  padding: 2px 30px;
  margin: 0 15px;
  font-size: 14px;
}
.closeBox {
  text-align: center;
  height: 10%;
}
.closeBox span {
  font-size: 15px;
  float: left;
}
.closeBox p {
  font-size: 22px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 30px;
  border: none;
  background: gray;
  color: white;
  float: right;
}
@media only screen and (min-width: 730px) {
  .signatureBox {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 50%;
    background: darkgray;
    box-sizing: border-box;
    overflow: visible;
  }
}
</style>
