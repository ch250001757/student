<template>
  <div>
    <div>
      <top></top>
      <search></search>
      <banner></banner>
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
import top from "./modules/top";
import search from "./modules/search";
import sidebar from "@/components/sidebar";
export default {
  components: {
    top,
    sidebar,
    search,
    scroll
  }
};
</script>
