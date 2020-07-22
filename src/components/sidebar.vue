<template>
  <div class="sidebar-box full-height">
    <div class="flex flex-col flex-content-center full-height">
      <Tooltip content="询价" class="block" theme="light" placement="left">
        <div class="icon-box flex flex-center flex-middle">
          <Icon size="20" type="ios-text" />
        </div>
      </Tooltip>

      <Tooltip content="我的订单" class="block" theme="light" placement="left">
        <div class="icon-box flex flex-center flex-middle">
          <Icon size="20" type="ios-cube" />
        </div>
      </Tooltip>
      <Tooltip content="购物车" class="block" theme="light" placement="left">
        <div class="icon-box flex flex-center flex-middle">
          <Icon size="20" type="md-cart" />
        </div>
      </Tooltip>
      <Tooltip content="去评价" class="block" theme="light" placement="left">
        <div class="icon-box flex flex-center flex-middle">
          <Icon size="20" type="md-text" />
        </div>
      </Tooltip>
    </div>
  </div>
</template>

<script>
import { Icon, Tooltip } from "view-design";
export default {
  components: {
    Icon,
    Tooltip
  }
};
</script>

<style lang="less" scoped>
.sidebar-box {
  width: 40px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: -1px 0 15px #dddddd;
  .icon-box {
    height: 50px;
    width: 40px;
    // border-top: 1px dashed #eee;
    // border-bottom: 1px dashed #eee;
    transition: all 0.3s;
    &:hover {
      background-color: #6cc133;
      color: #fff;
    }
  }
}
</style>
