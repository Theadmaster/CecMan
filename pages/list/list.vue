<template>
	<view class="wrapper">
		
		<view class="status_bar" />
		
		<u-navbar title="随货同行单">
			<view class="right" slot="right" @click="photoClick">
				<image src="../../static/img/camera.png" mode=""></image>
			</view>
		</u-navbar>
		
		<view class="search-wrap">
			<t-search background="#fff" @scan="scanClick" />
		</view>
		
		
		
		<view class="list">
			<view class="item" v-for="(ele, i) in list" :key="i" >
				<view class="select" :class="ele.isFold? 'select-active' : ''" >
					<view class="select-left" v-if="!ele.isFold">
						<view class="dot" :class="ele.checked? 'active' : ''" @click="selectDotClick(i)">
							<view class="dot-content" />
						</view>
					</view>
					<view class="select-content" @click="eleClick(i)">
						<view class="title">
							<text>{{ele.name}}</text>
							<u-icon name="arrow-down-fill" size="14"></u-icon>
						</view>
						<view class="info">
							<text style="margin-right: 10rpx;">已检测{{ele.inspectedNum}}</text>
							<text>未检测{{ele.inspectNum}}</text>
						</view>
					</view>
				</view>
				<view class="list-item" v-for="(item, index) in ele.list" :key="index" v-if="ele.isFold" >
					<t-item :info="item" @check="checkClick($event,i)" @select="sheetClick" @itemClick="itemClick"></t-item>
				</view>
			</view>
		</view>
		
		<view class="btn">
			<view class="btn-left">
				<view class="dot" :class="active? 'active' : ''" @click="dotClick">
					<view class="dot-content" />
				</view>
				<text>全选</text>
			</view>
			<view class="btn-right" @click="inspectClick">
				<text>检 测</text>
			</view>
		</view>
	</view>
</template>

<script>
	import TSearch from '../../components/t-search/t-search.vue'
	import TItem from '../../components/t-item/t-item.vue'
	export default {
		components: {
			TSearch,
			TItem
		},
		data() {
			return {
				active: false,
				list: [
					{
						id:0,
						name: '今天',
						inspectNum: '000',
						inspectedNum: '000',
						isFold: false,
						checked: false,
						list: [
							{
								id: 0,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							}, 
							{
								id: 1,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							},
							{
								id: 2,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							},
							{
								id: 3,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							}
						]
					},
					{
						id: 1,
						name: '昨天',
						inspectNum: '000',
						inspectedNum: '000',
						isFold: false,
						checked: false,
						list: [
							{
								id: 0,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							}, 
							{
								id: 1,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							},
							{
								id: 2,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							},
							{
								id: 3,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							}
						]
					},
					{
						id:2,
						name: '前天',
						inspectNum: '000',
						inspectedNum: '000',
						isFold: false,
						checked: false,
						list: [
							{
								id: 0,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							}, 
							{
								id: 1,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							},
							{
								id: 2,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							},
							{
								id: 3,
								name: '常州乐奥医疗科技有限公司',
								time: '05:00',
								checked: false
							}
						]
					}
				]
			};
		},
		methods: {
			// 文字扫描
			scanClick(){
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    },
					fail: err => {
						console.log(err)
					}
				});
			},
			// 同行单扫描
			photoClick() {
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    },
					fail: err => {
						console.log(err)
					}
				});
			},
			// 查看单项供应商的扫描结果
			itemClick(i) {
				console.log(i)
				uni.navigateTo({
					url: '../result/result'
				})
			},
			// 检测按钮
			inspectClick(){
				console.log('检测')
			},
			//单项供应商操作
			sheetClick(i) {
				console.log(i)
				//1置顶 2反馈问题 3删除
			},
			selectDotClick(i) {
				this.list[i].checked = !this.list[i].checked
				if(this.list[i].checked) {
					this.list[i].list.forEach((ele, i, arr) => {
						arr[i].checked = true
					})
				} else {
					this.list[i].list.forEach((ele, i, arr) => {
						arr[i].checked = false
					})
				}
				let flag = this.list.filter(item => !item.checked)
				if(flag.length==0) {
					this.active = true
				} else {
					this.active = false
				}
			},
			dotClick() {
				this.active = !this.active
				let list = this.list
				if(this.active) {
					list.forEach((item, index) => {
						list[index].checked = true
						list[index].list.forEach((ele, i, arr) => {
							arr[i].checked = true
						})
					})
				} else {
					list.forEach((item,index) => {
						list[index].checked = false
						list[index].list.forEach((ele, i, arr) => {
							arr[i].checked = false
						})
					})
				}
				
			},
			checkClick(e, i) {
				console.log(e, i)
				this.list[i].list[e].checked = !this.list[i].list[e].checked
				let list = this.list[i].list
				let flag = list.filter(item => !item.checked)
				console.log(flag)
				if(flag.length===0) {
					this.list[i].checked = true
				} else {
					this.list[i].checked = false
				}
				this.active = this.list.filter(item => !item.checked).length==0? true : false
			},
			eleClick(i) {
				this.list[i].isFold = !this.list[i].isFold
			}
		}
	}
</script>

<style lang="scss">
	.wrapper {
		background-color: #fff;
	}
	.right {
		margin-right: 30rpx;
		width: 43.45rpx;
		display: flex;
		align-items: center;
		image {
			height: 42.99rpx;
			width: 42.99rpx;
		}
	}
	.search-wrap {
		height: 107.47rpx;
		background-color: #fff;
	}
	.select-active {
		background-color: #F7F7F7 !important;
	}
	.select {
		// height: 92.05rpx;
		background-color: #fff;
		border-bottom: 0.46rpx solid #eee;
		display: flex;
		align-items: center;
		padding: 15rpx 23rpx;
		.select-left {
			width: 86.82rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.dot {
				height: 32.24rpx;
				width: 32.24rpx;
				border: 0.46rpx solid #ccc;
				border-radius: 50%;
			}
			.active {
				// background-color: #0076FF;
				border: 0.46rpx solid #0076FF;
				padding: 5rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.dot-content {
					height: 100%;
					width: 100%;
					background-color: #0076FF;
					border-radius: 50%;
				}
			}
		}
		.select-content {
			// margin:15rpx 53.73rpx;
			flex: 1;
			margin-left: 20rpx;
			.title {
				color: #101010;
				font-size: 30.37rpx;
				margin-bottom: 5rpx;
			}
			.info {
				color: #767676;
				font-size: 22.42rpx;
			}
		}
	}
	
	.list {
		margin-bottom: 100.72rpx;
	}
	
	.btn {
		box-shadow: 0 -1.4rpx 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
		position: fixed;
		z-index: 10;
		height: 97.66rpx;
		background-color: #fff;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		.btn-left {
			display: flex;
			align-items: center;
			margin-left: 46.72rpx;
			flex: 1;
			text {
				margin-left: 10rpx;
				color: #A3A3A3;
				font-size: 28.03rpx;
			}
			.dot {
				height: 32.24rpx;
				width: 32.24rpx;
				border: 0.46rpx solid #ccc;
				border-radius: 50%;
			}
			.active {
				// background-color: #0076FF;
				border: 0.46rpx solid #0076FF;
				padding: 5rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.dot-content {
					height: 100%;
					width: 100%;
					background-color: #0076FF;
					border-radius: 50%;
				}
			}
		}
		.btn-right {
			height: 100%;
			width: 280.37rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #0076FF;
			color: #fff;
		}
	}
</style>
