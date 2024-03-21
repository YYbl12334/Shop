<template>
  <view class="u-p-t-40 u-p-r-60 u-p-b-30 u-p-1-60 logincontainer">
    <!-- 头像Logo -->
    <button class="avatarwrap" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
      <image class="avatar" :src="avatar"></image>
    </button>

    <!-- 注册表单 -->
    <u-form class="forms" :model="loginModel" ref="form1">
      <u-form-item left-icon="phone-fill" left-icon-style="font-size:24px;color:#FF7670;">
        <u-input placeholder="请输入电话" v-model="loginModel.phone"/>
      </u-form-item>

      <u-form-item left-icon="account-fill" left-icon-style="font-size:24px;color:#FF7670;">
        <u-input placeholder="请输入账户" v-model="loginModel.username"/>
      </u-form-item>

      <u-form-item left-icon="lock" left-icon-style="font-size:24px;color:#FF7670;">
        <u-input placeholder="请输入密码" v-model="loginModel.password"/>
      </u-form-item>

      <u-form-item left-icon="lock" left-icon-style="font-size:24px;color:#FF7670;">
        <u-input placeholder="请输入确定密码" v-model="loginModel.passwordConfirm"/>
      </u-form-item>

      <view class="passtext" @click="to">已有账号,去登录</view>

      <!-- 注册按钮 -->
      <u-button type="success" :custom-style="customStyle1">注册</u-button>
    </u-form>
  </view>
</template>


<script setup>
import {
  ref,
  reactive
} from 'vue';

// 用户选择的头像事件处理函数
const onChooseAvatar = (e) => {
  const {
    avatarUrl
  } = e.detail
  avatar.value = avatarUrl
};
const to = (e) => {
  uni.navigateTo({
    url: '/pages/login/login'
  })
}

// 默认Logo头像URL
const avatar = ref('/static/Login/user.jpg');

// 注册表单数据模型
const loginModel = reactive({
  phone: '',
  username: '',
  password: '',
  passwordConfirm: '' // 确认密码
});

// 注册按钮样式
const customStyle1 = reactive({
  marginTop: '40px',
  color: '#FFF',
  width: '100%'
});
</script>

<style lang="scss">
.logincontainer {
  margin-left: 10px;
}

.avatarwrap {
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  padding: 0px;

  .avatar {
    border-radius: 100%;
    height: 70px;
    width: 70px;
  }
}

// 已有账号，去登录的文字样式
.passtext {
  display: flex;
  justify-content: flex-end;
  color: #FF7670;
  margin-top: 15px;
}
</style>
