<template>
  <div>
    <div class="container">
      <div>
        <div class="title flex flex-middle flex-center">产品分类</div>
      </div>
    </div>
    <div class="banner-box relative">
      <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/img/1.jpg"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/img/2.jpg"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/img/3.jpg"></div>
        </CarouselItem>
    </Carousel>
      <div class="container absolute-center full-height">
            <div class="menu-box full-height">
               <main-menu></main-menu>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { CarouselItem } from "view-design";
import mainMenu from './menu'
import 'view-design/dist/styles/iview.css'

export default {
  data () {
      return {
        value2: 0
      }
    },
    methods: {
     
    },
    
  components:{
    mainMenu,
    CarouselItem
  },
};
</script>
<style lang="less" scoped>
.title {
  height: 40px;
  width: 200px;
  background-color: #6cc133;
  color: #ffffff;
}
.banner-box{
    border-top: 2px solid #6cc133;
    height: 422px;
    .menu-box{
        width: 200px;
        background-color: #fff;
    }
}
  .bg {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0px auto;
    background-size: 100% 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    transform: rotateY(0deg) rotateX(0deg);
    & div{
      position: relative;
      height: 100%;
      width: 100%;
    }
  }
  .img1 {
    display: block;
    width: 100%;
    height: 100%;
    bottom: 5px;
    left: 0;
    background-size: 95% 100%;
    border-radius: 10px;
  }

  .img2 {
    display: block;
    width: 100%;
    height: 100%;
    bottom: 5px;
    left: 0;
    background-size: 95% 100%;
    border-radius: 10px;
  }

  .img3 {
    display: block;
    
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 10px;
  }
.menu-box{
  position:absolute;
}
</style>