<template>
  <div>
    <top></top>
    <search></search>
    <banner></banner>
    <scroll></scroll>
    <hot></hot>
    <sidebar></sidebar>
    <lists v-for="n in 4" :key="n"></lists>
    <foot></foot>
  </div>
</template>

<script>
import top from "./modules/top";
import search from "./modules/search";
import banner from "./modules/banner";
import hot from "./modules/hot";
import lists from "./modules/lists";
import foot from "./modules/foot";
import scroll from "./modules/scroll";
import sidebar from "@/components/sidebar";
export default {
  components: {
    top,
    sidebar,
    search,
    banner,
    hot,
    lists,
    foot,
    scroll
  }
};
</script>
