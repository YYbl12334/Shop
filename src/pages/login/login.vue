<template>
  <view class="u-p-t-40 u-p-r-60 u-p-b-30 u-p-1-60 logincontainer">
    <!-- 头像 -->
    <u-avatar size="140" src="/static/Login/logo.png" mode="circle"></u-avatar>

    <!-- 登录表单 -->
    <u-form class="forms" :model="loginModel" ref="form1">
      <u-form-item left-icon="account-fill" left-icon-style="font-size:24px;color:#FF7670;">
        <u-input placeholder="请输入账户" v-model="loginModel.username"/>
      </u-form-item>

      <u-form-item left-icon="lock" left-icon-style="font-size:24px;color:#FF7670;">
        <u-input placeholder="请输入密码" v-model="loginModel.password"/>
      </u-form-item>

      <view class="passtext">忘记密码</view>

      <!-- 登录按钮 -->
      <u-button :custom-style="customStyle1" @click="Login">登录</u-button>

      <!-- 注册按钮 -->
      <u-button type="success" :custom-style="customStyle2" @click="goEcharts">注册</u-button>
    </u-form>
  </view>
</template>

<script setup>
import {reactive,} from 'vue';
// import { useRouter } from 'vue-router';

// 表单数据模型
const loginModel = reactive({
  username: '',
  password: ''
});

// 登录按钮样式
const customStyle1 = reactive({
  marginTop: '40px',
  background: '#FF7670',
  color: '#FFF',
  width: '100%',
});

// 注册按钮样式
const customStyle2 = reactive({
  marginTop: '35px',
  color: '#FFF',
  width: '100%'
});

// const router = useRouter();

function goEcharts() {
  // router.push({
  // 	path: '../../pages/register/register.vue'
  // })
  uni.navigateTo({
    url: '/pages/register/register'
  })
}

function Login(e) {
  console.log(e)
}
</script>

<style lang="scss">
.logincontainer {
  margin-left: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  // 表单样式
  .forms {
    width: 100%;
    margin-top: 30px;
  }

  // 忘记密码文字样式
  .passtext {
    display: flex;
    justify-content: flex-end;
    color: #FF7670;
    margin-top: 15px;
  }
}
</style>
