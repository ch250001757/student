<template>
  <div class="hot-box">
    <div class="container">
      <Tabs value="name1">
        <TabPane label="热销产品" name="name1">
          <ul class="card-box flex">
            <li v-for="n in 4" :key="n">
              <Card class="flow-hidden" style="height:300px">
                <img class="full-width" src="@/assets/img/sg.jpg" alt />
              </Card>
              <div class="card-info">
                <p>这是一个商品标题</p>
                <span class="price">$99.99</span>
                <Icon type="ios-thumbs-up-outline" />234
              </div>
            </li>
          </ul>
        </TabPane>
        <TabPane label="购买过" name="name2">标签二的内容</TabPane>
        <TabPane label="收藏商品" name="name4">标签三的内容</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { Tabs, TabPane, Card, Icon, Dropdown } from "view-design";
export default {
  components: {
    Icon,
    Tabs,
    TabPane,
    Card,
    Dropdown
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.hot-box {
  margin-top: 30px;
  .card-box {
    li {
      width: 25%;
      padding: 5px;
      .card-info {
        margin-top: 10px;
        .price {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
