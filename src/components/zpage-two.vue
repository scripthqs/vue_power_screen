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
    ctx.clearRect(0, 0, 300, 300);
    ctx.save();
    let time = new Date();
    let hours = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    // 1.绘制背景(白色圆)
    drawBg();
    // 2.绘制的数字
    drawNumbers();
    // 3.绘制时针
    drawHours(hours, minute, second);
    // 3.绘制分针
    drawMinute(minute, second);
    // 4.绘制秒针
    drawSecond(second);
    // 5.绘制圆心
    drawCircle();
    // 6.画圆上的时针的刻度
    drawHoursTick();
    // 7.画圆上的分针的刻度
    drawMinuteTick();
    ctx.restore();
    requestAnimationFrame(draw);
  }

  function drawBg() {
    ctx.save();
    ctx.translate(150, 150);
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(0, 0, 130, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawNumbers() {
    ctx.save();
    ctx.translate(150, 150);

    // 开始画 3 数字
    ctx.font = "30px fangsong";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    let numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    for (let i = 0; i < numbers.length; i++) {
      // i = 3 , 0
      // i = 4 , 占 1份, Math.PI * 2 / 12 * i
      let x = Math.cos(((Math.PI * 2) / 12) * i) * 100;
      let y = Math.sin(((Math.PI * 2) / 12) * i) * 100;
      ctx.fillText(numbers[i], x, y);
    }
    ctx.restore();
  }
  function drawHours(hours, minute, second) {
    ctx.save();
    ctx.translate(150, 150); // 坐标轴原点在园的中心

    // Math.PI * 2 一整个圆
    // Math.PI * 2 / 12  1h
    // Math.PI * 2 / 12 / 60  1min
    // Math.PI * 2 / 12 / 60 / 60  1secon

    // 1h + 1min + 1 second = 弧度?
    ctx.rotate(((Math.PI * 2) / 12) * hours + ((Math.PI * 2) / 12 / 60) * minute + ((Math.PI * 2) / 12 / 60 / 60) * second);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -50);
    ctx.stroke();
    ctx.restore();
  }

  function drawMinute(minute, second) {
    ctx.save();
    ctx.translate(150, 150); // 坐标轴原点在园的中心

    // Math.PI * 2 一整个圆
    // Math.PI * 2 / 60  1min
    // Math.PI * 2 / 60 / 60  1sec

    // 59min + 59 second = 弧度?
    ctx.rotate(((Math.PI * 2) / 60) * minute + ((Math.PI * 2) / 60 / 60) * second);
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -70);
    ctx.stroke();
    ctx.restore();
  }

  function drawSecond(second) {
    ctx.save();
    ctx.translate(150, 150); // 坐标轴原点在园的中心

    // Math.PI * 2 一整个圆
    // Math.PI * 2 / 60   1sec

    // 1 second = 弧度?
    ctx.rotate(((Math.PI * 2) / 60) * second);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -80);
    ctx.stroke();
    ctx.restore();
  }

  function drawCircle() {
    ctx.save();
    ctx.translate(150, 150);

    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawHoursTick() {
    ctx.save();
    ctx.translate(150, 150);

    for (let j = 0; j < 12; j++) {
      ctx.rotate((Math.PI * 2) / 12);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, -130);
      ctx.lineTo(0, -122);
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawMinuteTick() {
    ctx.save();
    ctx.translate(150, 150);
    for (let j = 0; j < 60; j++) {
      ctx.rotate((Math.PI * 2) / 60);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -130);
      ctx.lineTo(0, -125);
      ctx.stroke();
    }
    ctx.restore();
  }
});
</script>

<style scoped>
canvas {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
