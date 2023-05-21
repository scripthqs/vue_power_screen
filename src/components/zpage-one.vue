<template>
  <canvas ref="canvasRef" width="300" height="300"> 你的浏览器不兼容Canvas,请升级您的浏览器! </canvas>
</template>

<script setup>
import { ref, onMounted } from "vue";
import sunPng from "@/assets/images/pageTwo/canvas_sun.png";
import earthPng from "@/assets/images/pageTwo/canvas_earth.png";
import moonPng from "@/assets/images/pageTwo/canvas_moon.png";
const canvasRef = ref(null);

onMounted(() => {
  const canvasEl = canvasRef.value;
  if (!canvasEl.getContext) {
    return;
  }
  let ctx = canvasEl.getContext("2d"); // 2d | webgl
  let sun = new Image();
  sun.src = sunPng;
  let earth = new Image();
  earth.src = earthPng;
  let moon = new Image();
  moon.src = moonPng;

  requestAnimationFrame(draw);
  function draw() {
    console.log("draw");
    ctx.clearRect(0, 0, 300, 300);
    ctx.save();
    // 1.绘制背景
    drawBg();
    // 2.地球
    drawEarth();
    ctx.restore();
    requestAnimationFrame(draw);
  }
  function drawBg() {
    ctx.save();
    ctx.drawImage(sun, 0, 0); // 背景图
    ctx.translate(150, 150); // 移动坐标
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    ctx.beginPath(); // 绘制轨道
    ctx.arc(0, 0, 105, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawEarth() {
    let time = new Date();
    let second = time.getSeconds();
    let milliseconds = time.getMilliseconds();
    ctx.save(); // earth start
    ctx.translate(150, 150); // 中心点坐标系
    // 地球的旋转
    // Math.PI * 2  一整个圆的弧度
    // Math.PI * 2 / 60   分成 60 份
    // Math.PI * 2 / 60   1s
    // Math.PI * 2 / 60 / 1000    1mm

    // 1s 1mm
    // Math.PI * 2 / 60 * second + Math.PI * 2 / 60 / 1000 * milliseconds
    ctx.rotate(((Math.PI * 2) / 60) * second + ((Math.PI * 2) / 60 / 1000) * milliseconds);
    ctx.translate(105, 0); // 圆上的坐标系
    ctx.drawImage(earth, -12, -12);
    // 3.绘制月球
    drawMoon(second, milliseconds);
    // 4.绘制地球的蒙版
    drawEarthMask();

    ctx.restore(); // earth end
  }

  function drawMoon(second, milliseconds) {
    ctx.save(); // moon start
    // 月球的旋转
    // Math.PI * 2   一圈   360
    // Math.PI * 2 / 10  1s(10s一圈)
    // Math.PI * 2 / 10 * 2  2s(10s一圈)

    // Math.PI * 2 / 10 / 1000  1mm 的弧度

    // 2s + 10mm = 弧度
    //  Math.PI * 2 / 10  * second + Math.PI * 2 / 10 / 1000 * milliseconds

    ctx.rotate(((Math.PI * 2) / 10) * second + ((Math.PI * 2) / 10 / 1000) * milliseconds);
    ctx.translate(0, 28);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore(); // moon end
  }

  function drawEarthMask() {
    // 这里的坐标系是哪个? 圆上的坐标系
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(0, -12, 40, 24);
    ctx.restore();
  }
});
</script>

<style scoped>
canvas {
  background-color: rgba(255, 0, 0, 0.1);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
