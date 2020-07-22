<template>
  <div class="logo-box">
    <div class="flex flex-middle container">
      <div class="logo">
        <h2>融合食品网</h2>
      </div>
      <div class="search-box">
        <Input search enter-button="搜索" placeholder="搜索..." />
      </div>
    </div>
  </div>
</template>

<script>
import { Input } from "view-design";
export default {
  components: {
    Input
  }
};
</script>

<style lang="less" scoped>
.logo-box {
  margin: 40px 0;
  .logo {
    width: 30%;
    padding: 0 10px;
  }
  .search-box{
      width: 50%;
  }
}
</style>