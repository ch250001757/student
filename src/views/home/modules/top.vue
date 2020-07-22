<template>
  <div class="header-box">
    <div class="container">
      <div class="top-box flex flex-middle flex-between">
        <div>
          <span style="margin-right:10px">欢迎来到融合食品网</span>
          <i-button type="text">登陆</i-button>
        </div>
        <div class="flex">
          <i-button type="text">询价</i-button>
          <i-button type="text">购物车</i-button>
          <i-button type="text">我的订单</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "view-design";
export default {
  components: {
    IButton: Button
  }
};
</script>

<style lang="less" scoped>
.header-box {
  background-color: #eee;
  .top-box {
    height: 40px;
    line-height: 40px;
  }
}
</style>