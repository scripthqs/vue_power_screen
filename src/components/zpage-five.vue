<template>
  <div class="map" ref="divRef" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch } from "vue";
import useEchart from "@/hooks/useEchart";
import chinaJson from "@/assets/geojson/china.json";
echarts.registerMap("china", chinaJson);

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  echartDatas: {
    type: Array,
    default: function () {
      return [
        { name: "北京", value: 199 },
        { name: "天津", value: 42 },
        { name: "河北", value: 102 },
        { name: "山西", value: 81 },
        { name: "内蒙古", value: 47 },
        { name: "辽宁", value: 67 },
        { name: "吉林", value: 82 },
        { name: "黑龙江", value: 123 },
        { name: "上海", value: 24 },
        { name: "江苏", value: 92 },
        { name: "浙江", value: 114 },
        { name: "安徽", value: 109 },
        { name: "福建", value: 116 },
        { name: "江西", value: 91 },
        { name: "山东", value: 119 },
        { name: "河南", value: 137 },
        { name: "湖北", value: 116 },
        { name: "湖南", value: 114 },
        { name: "重庆", value: 91 },
        { name: "四川", value: 125 },
        { name: "贵州", value: 62 },
        { name: "云南", value: 83 },
        { name: "西藏", value: 9 },
        { name: "陕西", value: 80 },
        { name: "甘肃", value: 56 },
        { name: "青海", value: 10 },
        { name: "宁夏", value: 18 },
        { name: "新疆", value: 180 },
        { name: "广东", value: 123 },
        { name: "广西", value: 59 },
        { name: "海南", value: 14 },
      ];
    },
  },
});
// 监听 echartDatas 的变化
watch(
  () => props.echartDatas,
  (newV, oldV) => {
    setupEchart(newV);
  }
);

// 拿到div的dom对象
let divRef = ref(null);
let hyChart = null;
onMounted(() => {
  setupEchart(props.echartDatas); // 第一次走这里
});

function setupEchart(echartDatas) {
  if (!hyChart) {
    hyChart = useEchart(divRef.value);
  }
  let option = getOption(echartDatas); // 准备数据
  hyChart.setOption(option);
}

function getOption(data = []) {
  let option = {
    tooltip: {},
    grid: {},

    // 1.视觉数据映射
    visualMap: [
      {
        // type: "continuous", // 连续型视觉映射组件 (默认)
        // type: "piecewise", // 分段型视觉映射组件
        left: "20%",
        seriesIndex: [0], // 指定取哪个系列的数据
        // 定义 在选中范围中 的视觉元素, 对象类型。
        inRange: {
          color: ["#04387b", "#467bc0"], // 映射组件和地图的颜色(一般和地图色相近)
        },
      },
    ],

    series: [
      {
        name: "中国地图",
        type: "map",
        map: "china",
        data,
        // data: [
        //   { name: "广东", value: 123 },
        //   { name: "广西", value: 59 },
        //   { name: "海南", value: 14 },
        //   // ....
        //   // ...
        // ],
        itemStyle: {
          areaColor: "#023677",
          borderColor: "#1180c7",
        },
        emphasis: {
          itemStyle: { areaColor: "#4499d0" },
          label: { color: "white" },
        },
        select: {
          label: { color: "white" },
          itemStyle: { areaColor: "#4499d0" },
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 16,
              color: "#fff",
            },
          },
          emphasis: {
            show: true,
          },
        },
      },
    ],
  };

  return option;
}
</script>

<style scoped>
.map {
  /* background-color: #fff; */
}
</style>
