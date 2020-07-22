<template>
  <div class="menu-box">
    <ul>
      <li v-for="n in 5" :key="n" class="flex flex-middle flex-between">
        <span>菜单{{ n }}</span>
        <Icon size="20" type="ios-arrow-dropright" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from "view-design";
export default {
  components: {
    Icon
  }
};
</script>

<style lang="less" scoped>
.menu-box {
  ul {
    li {
      position: relative;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px dashed #d2d2d2;
      padding: 0 10px;
      color: #555;
      transition: all 0.3s;
      &::after {
        content: "";
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        // background-color: #fff;
        width: 100%;
        // z-index: -1;
      }
      &:hover {
        cursor: pointer;
        background-color: #6cc133;
        color: #fff;
      }
    }
  }
}
</style>
