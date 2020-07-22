<template>
  <div class="login">
    <div class="header">
      <div class="logo">
        <a href="#">
          <img alt="Azul Systems, Inc." src="https://www.azul.com/wp-content/themes/AzulSystems/images/Azul-Logo-2.png">
        </a>
        <a href="#">
          <i class="el-icon-info"></i>
          <span> "登录页面"改进建议 </span>
        </a>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
          <h3 class="title">账号登录</h3>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="用户名/邮箱/手机">
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码" @keyup.enter.native="handleLogin">
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码" style="width: 63%" @keyup.enter.native="handleLogin">
              <i slot="prefix" class="el-input__icon el-icon-eleme"></i>
            </el-input>
            <div class="login-code">
              <img :src="codeUrl" @click="getCode" />
            </div>
          </el-form-item>
          <!-- <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox> -->
          <el-form-item style="width:100%;">
            <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
    <!--  底部  -->
    <div class="login-footer">
      <p>首页 | 隐私保护 | 联系我们 | 免责条款 | 公司简介 | 商家入驻 | 意见反馈</p>
      <p>icp备案证书号：123456789 POWERED BY 大商创</p>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/index.vue";
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
// import { encrypt, decrypt } from '@/utils/jsencrypt'

export default {
  components: {
    SvgIcon
  },
  name: "Login",
  data() {
    return {
      codeUrl: "",
      cookiePassword: "",
      loginForm: {
        username: "admin",
        password: "123333",
        rememberMe: false,
        code: "123",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" }
        ],
        code: [{ required: true, trigger: "change", message: "验证码不能为空" }]
      },
      loading: false,
      redirect: undefined
    };
  },
  watch: {
    // $route: {
    //   handler: function(route) {
    //     this.redirect = route.query && route.query.redirect;
    //   },
    //   immediate: true
    // }
  },
  created() {
    this.getCode();
    this.getCookie();
  },
  methods: {
    // 验证码   后端做的
    getCode() {
      // getCodeImg().then(res => {
      //   this.codeUrl = "data:image/gif;base64," + res.img;
      //   this.loginForm.uuid = res.uuid;
      // });
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        // password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          console.log(this.loginForm, 'login')
          //  走接口
          //  this.$router.push({ path: 'home'});
          //   if (this.loginForm.rememberMe) {
          //     Cookies.set("username", this.loginForm.username, { expires: 30 });
          //     // Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
          //     Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          //   } else {
          //     Cookies.remove("username");
          //     Cookies.remove("password");
          //     Cookies.remove('rememberMe');
          //   }
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.$router.push({ path: 'home' || "/" });
            })
            .catch(() => {
              this.loading = false;
              // this.getCode();
            });
        }
      });
    }
  }
};
</script>

<style lang="less">
.login {
  .header {
    padding: 22px 0;
    height: 88px;
    .logo {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .wrapper {
    width: 100%;
    height: 700px;
    background: url('../../assets/image/login-background.jpg') no-repeat;
    background-size: cover;
    .container {
      position: relative;
      width: 1200px;
      height: 100%;
      .title {
        margin: 0px auto 30px auto;
        text-align: center;
        color: #707070;
      }
      .login-form {
        border-radius: 6px;
        background: #ffffff;
        width: 400px;
        padding: 25px 25px 5px 25px;
        position: absolute;
        right: 50px;
        top: 150px;
        .el-input {
          height: 38px;
          input {
            height: 38px;
          }
        }
        .input-icon {
          height: 39px;
          width: 14px;
          margin-left: 2px;
        }
      }
      .login-tip {
        font-size: 13px;
        text-align: center;
        color: #bfbfbf;
      }
      .login-code {
        width: 33%;
        height: 38px;
        float: right;
      }
    }
  }
  .login-footer {
    margin: 60px auto 0;
    p {
      text-align: center;
      &:last-child {
        margin-top: 10px;
      }
    }
  }
}
</style>
