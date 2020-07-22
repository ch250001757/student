<template>
  <div class="footer">
    <div class="container">
      <div class="siteinfo">
        <ul class="c0">
          <h3 class="c1">新手上路</h3>
          <ul>
            <li class="c2"><a class="c3">售后流程</a></li>
            <li class="c2"><a class="c3">采购流程</a></li>
          </ul>
        </ul>
        <ul class="c0">
          <h3 class="c1">服务保障</h3>
          <ul>
            <li class="c2"><a class="c3" href="#">退换货原则</a></li>
            <li class="c2"><a class="c3" href="#">售后服务保障</a></li>
          </ul>
        </ul>
        <ul class="c0">
          <h3 class="c1">联系我们</h3>
          <ul>
            <li class="c2"><a class="c3" href="#">网站故障报告</a></li>
            <li class="c2"><a class="c3" href="#">投诉与建议</a></li>
          </ul>
        </ul>
        <div class="foot-img">
            <img src="@/assets/img/qrcode.png" alt="">
        </div>      
      </div>
    </div>
  </div>
</template>
<script>
  // import YButton from '/components/YButton'
  export default {
  }
</script>
<style lang="less" scoped>
  .footer {
    border-top: 1px solid #e6e6e6;
    background: #fafafa;
    margin-top: 60px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    width: 1220px;
  }
  
  .siteinfo {
    height: 100px;
    padding: 50px 0 100px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
  }

  .c0 {
    width: 149px;
    line-height: 1;
    float: left;
  }

  .c1 {
    color: #646464;
    font-size: 16px;
    padding: 0 0 14px;
  }

  .c2 {
    color: #c3c3c3;
    font-size: 12px;
    padding: 6px 0;
  }

  .c3 {
    color: #969696;
  }

  .c4 {
    position: absolute;
    right: 0;
    overflow: hidden;
    line-height: 34px;
  }
  .foot-img{
    float: right;
    width: 100px;
    margin-top: -20px;
  }
  .foot-img>img{
    width: 100%;
  }
  .c5 {
    width: 100%;
    color: #646464;
    position: relative;
  }


  .online {
    clear: both;
    width: 241px;
    font-size: 12px;
    line-height: 18px;
    color: #c3c3c3;
    text-align: right;
  }

  .button {
    width: 130px;
    height: 34px;
    font-size: 14px;
    color: #5079d9;
    border: 1px solid #dcdcdc;
    margin-top: 8px;
  }

  .copyright {
    color: #434d55;
    font-size: 12px;
    padding: 40px 0 0;
    display: flex;
    align-items: left;
  }

  .privacy {
    float: left;
    margin: 0 0 0 12px;
  }

  .content-c0 {
    color: #5079d9;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: #3A5FCD;
    }
  }

  .content-c1 {
    float: left;
    line-height: 12px;
    padding: 1px 10px 0;
    border-left: 1px solid #ccc;
  }
  
  .content-c2 {
    float: left;
    height: 15px;
    line-height: 15px;
    color: #757575;
  }

  .cop {
    clear: both;
    padding: 10px 0 0;
    height: 15px;
  }

  .content-c3 {
    margin-right: 20px;
    color: #bdbdbd;
    font-size: 12px;
    height: 12px;
    line-height: 1;
  }
</style>
