<template>
  <main class="svg-bg">
    <div class="header" @click="toHome"></div>

    <div class="left-top">
      <ZpageOne></ZpageOne>
    </div>
    <div class="left-bottom">
      <ZpageTwo></ZpageTwo>
    </div>

    <div class="right-top">
      <ZpageThree></ZpageThree>
    </div>
    <div class="right-center">
      <ZpageSix></ZpageSix>
    </div>
    <!-- <div class="right-bottom"></div> -->

    <div class="center">
      <ZpageFive></ZpageFive>
    </div>
    <div class="bottom">
      <ZpageFour></ZpageFour>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import ZpageOne from "../components/zpage-one.vue";
import ZpageTwo from "../components/zpage-two.vue";
import ZpageThree from "../components/zpage-three.vue";
import ZpageFour from "../components/zpage-four.vue";
import ZpageFive from "../components/zpage-five.vue";
import ZpageSix from "../components/zpage-six.vue";

//回到首页
const router = useRouter();
const toHome = () => {
  router.push("/");
};
</script>

<style scoped>
.svg-bg {
  /* 定位 */
  position: absolute;
  width: 100%;
  height: 100%;
  /* 背景 */
  background-color: #070a3c;
  background-image: url(@/assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  height: 56px;

  /* 背景 */
  background-image: url(@/assets/images/pageTwo/bg_header.svg);
  background-repeat: no-repeat;
}

.left-top {
  /* 定位 */
  position: absolute;
  top: 116px;
  left: 16px;
  width: 536px;
  height: 443px;
  /* 背景 */
  background-color: #000;
  background-image: url(@/assets/images/pageTwo/bg_left-top.svg);
  background-repeat: no-repeat;
}

.left-bottom {
  /* 定位 */
  position: absolute;
  bottom: 49px;
  left: 16px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(@/assets/images/pageTwo/bg_left_bottom.svg);
  background-repeat: no-repeat;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;
  background-image: url(../assets/images/pageTwo/bg_right_top.svg);
  background-repeat: no-repeat;
}
.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 600px;

  background-image: url(../assets/images/pageTwo/bg_right_center.svg);
  background-repeat: no-repeat;
}

.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;

  /* border: 5px solid pink; */
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;
  background-image: url(../assets/images/pageTwo/bg_bottom.svg);
  background-repeat: no-repeat;
}
</style>
