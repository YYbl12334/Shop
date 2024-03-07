<template>
	<view class="u-wrap u-p-1-20 u-p-r-20" style="margin-left: 10px;">
		<!-- 表单区域 -->
		<u-form :model="addModel" ref="form1">
			<!-- 类型选择 -->
			<u-form-item label="类型:">
				<u-radio-group v-model="addModel.type">
					<u-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.name"
						:disabled="item.disabled">{{ item.name }}</u-radio>
				</u-radio-group>
			</u-form-item>

			<!-- 名称输入框 -->
			<u-form-item label="名称:">
				<u-input placeholder="请输入名称" v-model="addModel.title" />
			</u-form-item>

			<!-- 简介输入框 -->
			<u-form-item label="简介:">
				<u-input placeholder="请输入简介" v-model="addModel.introduce" />
			</u-form-item>

			<!-- 价格输入框 -->
			<u-form-item label="价格:">
				<u-input placeholder="请输入价格" v-model="addModel.price" />
			</u-form-item>

			<!-- 联系人输入框 -->
			<u-form-item label-width="auto" label="联系人:">
				<u-input placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>

			<!-- 联系电话输入框 -->
			<u-form-item label-width="auto" label="联系电话:">
				<u-input placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>

			<!-- 图片上传 -->
			<u-form-item label="图片:">
				<u-upload :action="action" :file-list="fileList"></u-upload>
			</u-form-item>

			<!-- 发布按钮 -->
			<u-button :custom-style="customStyle">发布</u-button>
		</u-form>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
	} from 'vue';
	const addModel = reactive([{
		type: '',
		title: '',
		introduce: '',
		price: '',
		userName: '',
		phone: '',
		image: '',

	}])
	const list = [{
		name: '闲置',
		disabled: false
	}, {
		name: '求购',
		disabled: false
	}, ]
	const value = ref('')
	const action = ref('')
	const fileList = ref([])
	const customStyle = reactive({
		background: '#00cc33',
		color: '#FFF',
		marginTop: '15px',
		width: '100%'
	})
	
	function radioChange(e) {
		console.log(e)
	}
</script>

<style>

</style>
