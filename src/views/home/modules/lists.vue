<template>
  <div class="lists-box">
    <div class="container flex full-height">
      <div class="left-box flex-shrink-0 flow-hidden full-height">
        <img v-img-adaptive src="@/assets/img/12.jpg" alt />
      </div>
      <div class="right-box flex-grow-1">
        <ul class="clearfix">
          <li v-for="n in 8" :key="n">
            <div class="img-box text-center flow-hidden">
              <img v-img-adaptive src="@/assets/img/sg.jpg" alt />
            </div>
            <div class="text-center desc-box">
              <h4>这是商品标题</h4>
              <p>这是简短介绍</p>
              <b>128.88</b>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.lists-box {
  height: 500px;
  margin-top: 30px;
  .left-box {
    width: 300px;
  }
  .right-box {
    padding-left: 20px;
    ul {
      li {
        width: 25%;
        height: 250px;
        float: left;
        .img-box {
          width: 80%;
          margin: 0 auto;
          height: 170px;
          transition: all 0.3s;
          &:hover {
            transform: translateY(-3%);
          }
        }
        .desc-box {
          b {
            color: red;
          }
          p {
            font-size: 12px;
            color: rgb(151, 151, 151);
          }
          h4 {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
