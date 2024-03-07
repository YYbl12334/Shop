<template>
 <view>
    <!-- 用户信息区块 -->
    <view class="u-flex user-box u-p-30">
      <!-- 头像 -->
      <view class="u-m-r-10">
        <u-avatar src="/static/user.jpg" size="100"></u-avatar>
      </view>
      <!-- 用户名 -->
      <view class="u-flex-1">
        <view class="u-font-18 u-p-b-20">小星星</view>
      </view>
      <!-- 更多操作 -->
      <view class="u-m-1-10 u-p-10">
        <u-icon name="arrow-right" color="#969799" size="28"></u-icon>
      </view>
    </view>
    <!-- 功能选项卡 -->
    <view class="u-m-t-20">
      <u-cell-group>
        <!-- 我的发布 -->
        <u-cell-item icon="star" title="我的发布"></u-cell-item>
        <!-- 我的求购 -->
        <u-cell-item icon="photo" title="我的求购"></u-cell-item>
        <!-- 我的收藏 -->
        <u-cell-item icon="heart" title="我的收藏"></u-cell-item>
        <!-- 购买订单 -->
        <u-cell-item icon="red-packet" title="购买订单"></u-cell-item>
        <!-- 出售订单 -->
        <u-cell-item icon="order" title="出售订单"></u-cell-item>
        <!-- 修改密码 -->
        <u-cell-item icon="edit-pen" title="修改密码"></u-cell-item>
      </u-cell-group>
      
      <!-- 退出账号 -->
      <u-cell-group>
        <u-cell-item icon="setting" title="退出账号"></u-cell-item>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
  page {
    background-color: #ededed;
  }
  
  .camera {
    width: 54px;
    height: 44px;
    
    &:active {
      background-color: #ededed;
    }
  }

  .user-box {
    background-color: #fff;
  }
</style>
