<template lang="html">
  <div class="login">
    <div class="container">
    <el-dropdown style="position: absolute;right:0;cursor:pointer" trigger="click" @command="langCommand">
      <span class="icon-uni" style="font-size: 24px;"></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh">中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      <div class="header">
        {{$t("login.title")}}
      </div>
      <div class="content">
        <div class="item">
          <span class="icon-user"></span>
          <el-input v-model="userName" :placeholder="$t('login.userName')"></el-input>
        </div>
        <div class="item">
          <span class="icon-pass"></span>
          <el-input v-model="passWord" :placeholder="$t('login.passWord')"></el-input>
          <span class="icon" :class="[canSee?'icon-see': 'icon-nosee']" @click="canSee=!canSee"></span>
        </div>
        <div class="code-box">
          <div class="item box" style="min-width: 70%;max-width: 70%;margin-bottom:0">
            <el-input class="code-input" v-model="code" :placeholder="$t('login.code')"></el-input>
          </div>
          <div class="box" style="min-width: 25%;max-width: 25%">
            <img src="../../assets/images/1.png" alt="">
          </div>
        </div>
        <el-button class="button" type="primary" :loading="loading" @click="login">{{$t("login.login")}}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        userName: '',
        passWord: '',
        code: '',
        loading: false,
        canSee: false,
      }
    },
    methods: {
      login() {
        console.log(123)
        this.loading = true
        if(!this.userName) {
          this.$message('用户名不能为空')
          return;
        }
        else if (!this.passWord) {
          this.$message('密码不能为空')
          return;
        }
        else if(!this.code) {
          this.$message('验证码不能为空')
          return;
        }
         this.loading = false
         this.$router.push({
           name:"Main"
         })
      },
      langCommand(command) {
        this.$i18n.locale = command
        localStorage.setItem('locale',command)
      }
    }
  };
</script>
<style lang="scss">
 $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
     .login .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }
  .login {
      .el-input {
        display: inline-block;
        height: 40px;
        width: 100%;
        input {
          background: transparent;
          border: 0px;
          -webkit-appearance: none;
          border-radius: 0px;
          padding: 12px 35px;
          color: $light_gray;
          height: 40px;
          caret-color: $cursor;
          &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
            -webkit-text-fill-color: $cursor !important;
          }
        }
        &.code-input {
          input {
            padding: 12px 10px;
          }
        }
      }
  }
</style>
<style lang="scss" scoped>
 .login {
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #2d3a4b;
    }
    .container {
      width: 500px;
      max-width: 100%;
      position: fixed;
      top: 30%;
      left: 50%;
      transform: translate(-50%,-50%);
      .header {
        font-size: 26px;
        font-weight: bold;
        color: white;
        text-align: center;
      }
      .content {
        margin-top: 20px;
        .item {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          color: #454545;
          margin-bottom: 10px;
          position: relative;
          min-height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          >span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 10px;
            &.icon {
              cursor: pointer;
              right: 10px;
            }
          }
          // img {
            
          // }
        }
        .code-box {
          display: flex;
          align-items: center;
          justify-content: space-between; 
          width: 100%;
          height: 46px;
          img {
            display: inline-block;
            width: 100%;
            height: 40px;
          }
        }
        .button {
          margin-top: 20px;
          width: 100%
        }
      }
    }
  }
</style>