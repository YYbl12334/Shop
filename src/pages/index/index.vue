<template>
	<view class="u-wrap">
		<swiper class="swipper-container" circular :indicator-dots="indicatorDots" :indicator-color='indicatorColor'
			:autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swipperList" :key="index">
				<image class="imgs" :src='item.image' mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</view>
	<view class="tab-strickt">
		<u-search bg-color="#FFF" margin="8px" style="flex-grow:1;" :show-action="true" action-text="搜索"
			:animation="true"></u-search>
	</view>



	<view class="wrap">
		<u-waterfall v-model="flowList" ref="uWaterfall1">
			<template v-slot:left="{leftList}">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-price">
						{{item.price}}元
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">
							自营
						</view>
						<view class="demo-tag-text">
							放心购
						</view>
					</view>
					<view class="demo-shop">
						{{item.shop}}
					</view>
					<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)">
					</u-icon>
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-price">
						{{item.price}}元
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">
							自营
						</view>
						<view class="demo-tag-text">
							放心购
						</view>
					</view>
					<view class="demo-shop">
						{{item.shop}}
					</view>
					<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)">
					</u-icon>
				</view>
			</template>
		</u-waterfall>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
	</view>

</template>

<script setup>
	import {
		ref
	} from 'vue';
	const indicatorDots = ref(true) //有圆点
	const indicatorColor = ref("#FFF")
	const autoplay = ref(true) //自动播放
	const interval = ref(2000) ///问隔时百
	const duration = ref(500) //播放时L 
	const swipperList = ref([{
		image: '../../static/Details/44.jpg'
	}, {
		image: '../../static/Details/44.jpg'
	}, {
		image: '../../static/Details/44.jpg'
	}, ])
	const flowList = ref([{
			price: 35,
			title: '北国风光，千里冰封，万里雪飘',
			shop: '李白杜甫白居易旗舰店',
			image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
		},
		{
			price: 35,
			title: '北国风光，千里冰封，万里雪飘',
			shop: '李白杜甫白居易旗舰店',
			image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
		}, {
			price: 35,
			title: '北国风光，千里冰封，万里雪飘',
			shop: '李白杜甫白居易旗舰店',
			image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
		}, {
			price: 35,
			title: '北国风光，千里冰封，万里雪飘',
			shop: '李白杜甫白居易旗舰店',
			image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
		}, {
			price: 35,
			title: '北国风光，千里冰封，万里雪飘',
			shop: '李白杜甫白居易旗舰店',
			image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
		}, {
			price: 35,
			title: '北国风光，千里冰封，万里雪飘',
			shop: '李白杜甫白居易旗舰店',
			image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
		},
	])
	// export default {
	// 	data() {
	// 		return {

	// 		}
	// 	},
	// 	onLoad() {},
	// 	methods: {},
	// }
</script>

<style lang="scss">
	.swipper-container {
		height: 220px;

		.item {
			height: 220px;
		}
	}

	.imgs {
		height: 220px;
		width: 100%;
	}

	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		background-color: #f2f2f2;
	}

	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>
