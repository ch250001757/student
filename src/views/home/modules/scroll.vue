<template>
  <div class="scroll-box">
    <div class="flex container">
      <div class="left-box">
        <div class="img-box text-center flow-hidden">
          <img v-img-adaptive src="@/assets/img/sg.jpg" alt />
        </div>
        <div class="img-box text-center flow-hidden">
          <img v-img-adaptive src="@/assets/img/sg.jpg" alt />
        </div>
      </div>
      <div class="right-box flex-shrink-0">
        <div class="col-title flex flex-between" key="n">
          <div class="title-box">
            <span>产品名称</span>
          </div>
          <div class="title-box">
            <span>零售价</span>
          </div>
          <div class="title-box">
            <span>集采价</span>
          </div>
          <div class="title-box">
            <span>市场价</span>
          </div>
        </div>
        <div class="list-box flow-hidden">
          <ul :style="ulStyle">
            <li
              class="flex flex-between"
              v-for="item in listData"
              :key="item.title + Math.random()"
            >
              <div class="info">{{ item.title }}</div>
              <div class="info">{{ item.price }}</div>
              <div class="info">{{ item.wPrice }}</div>
              <div class="info">{{ item.mPrice }}</div>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {} from "view-design";
export default {
  components: {},
  data() {
    return {
      translateY: 0,
      currentIndex: 0,
      transition: "none",
      listData: [
        {
          title: "产品名称产品名称",
          price: "99.88",
          wPrice: "99.88",
          mPrice: "99.88"
        },
        {
          title: "产品名称产品名称",
          price: "99.88",
          wPrice: "99.88",
          mPrice: "99.88"
        },
        {
          title: "产品名称产品名称",
          price: "99.88",
          wPrice: "99.88",
          mPrice: "99.88"
        },
        {
          title: "产品名称产品名称",
          price: "99.88",
          wPrice: "99.88",
          mPrice: "99.88"
        },
        {
          title: "产品名称产品名称",
          price: "99.88",
          wPrice: "99.88",
          mPrice: "99.88"
        },
        {
          title: "产品名称产品名称",
          price: "99.88",
          wPrice: "99.88",
          mPrice: "99.88"
        }
      ]
    };
  },
  computed: {
    ulStyle() {
      return {
        transition: this.transition,
        transform: `translateY(${this.translateY}px)`
      };
    }
  },
  created() {
    this.loop();
  },
  methods: {
    loop() {
      let len = this.listData.length;
      let step = 90;
      const self = this;
      setInterval(() => {
        if (++self.currentIndex >= len) {
          self.transition = "none";
          self.currentIndex = 0;
        } else {
          self.transition = "all 0.3s";
        }
        self.translateY = -self.currentIndex * step;
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
.scroll-box {
  margin-top: 30px;
}
.left-box {
  width: 20%;
  .img-box {
    border: 1px solid #eeeeee;
    width: 90px;
    height: 90px;
    margin-top: 30px;
    img {
      width: 50px;
      height: 50px;
    }
  }
}
.right-box {
  width: 80%;
  .list-box {
    height: 200px;
    ul {
      transition: all 0.3s;
      li {
        height: 90px;
        overflow: hidden;
        line-height: 90px;
        .info {
          width: 25%;
          font-size: 16px;
        }
      }
    }
  }
  .col-title {
    font-size: 17px;
    line-height: 30px;
    font-weight: bold;
    .title-box {
      width: 25%;
    }
  }
}
</style>
