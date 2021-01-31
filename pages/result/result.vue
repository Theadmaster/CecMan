<template>
	<view class="wrapper">
		<view class="status_bar" />
		
		<u-navbar title="扫描结果">
			<view class="right" slot="right"@click="moreClick" >
				<image src="../../static/img/menu.png" mode=""></image>
			</view>
		</u-navbar>
		
		<view class="info">
			<view class="info-item">
				<text style="font-weight: bold;">供应商：</text>
				<text>常州乐奥医疗科技有限公司</text>
			</view>
			<view class="info-item">
				<text style="font-weight: bold;">日  期：</text>
				<text>2020年-10-20</text>
			</view>
		</view>
		
		<view class="content">
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="title">
					<text>{{item.name}}</text>
					<image @click="scanClick(index)" src="../../static/img/scan.png" mode=""></image>
				</view>
				<view class="item-content">
					<view class="nape" >
						<view class="nape-left">
							<text>批号：</text>
						</view>
						<view class="nape-right">
							<u-input :clearable="false" v-model="item.batchNum"  placeholder="点击输入" border height="40" class="input" />
						</view>
					</view>
					<view class="nape" >
						<view class="nape-left">
							<text>产品型号：</text>
						</view>
						<view class="nape-right">
							<u-input :clearable="false" v-model="item.model"  placeholder="点击输入" border height="40" class="input" />
						</view>
					</view>
					<view class="nape" >
						<view class="nape-left">
							<text>注册证号：</text>
						</view>
						<view class="nape-right">
							<u-input :clearable="false" v-model="item.registrationNo"  placeholder="点击输入" height="40" border class="input" />
						</view>
					</view>
					<view class="nape" >
						<view class="nape-left">
							<text>数量：</text>
						</view>
						<view class="nape-right">
							<u-input :clearable="false" v-model="item.count"  placeholder="点击输入" border height="40" class="input" />
						</view>
					</view>
					<view class="nape" >
						<view class="nape-left">
							<text>生产日期：</text>
						</view>
						<view class="nape-right">
							<u-input :clearable="false" v-model="item.manufactureDate"  placeholder="点击输入" height="40" border class="input" />
						</view>
					</view>
					<view class="nape" >
						<view class="nape-left">
							<text>失效日期：</text>
						</view>
						<view class="nape-right">
							<u-input :clearable="false" v-model="item.expirationDate"  placeholder="点击输入" height="40" border   class="input"  />
						</view>
					</view>
					
				</view>
			</view>
		</view>
		
		<view class="btn">
			<view class="wrap">
				<view class="item item1" @click="reTake">
					<text>重拍</text>
				</view>
			</view>
			
			<view class="wrap">
				<view class=" item item2" @click="saveClick">
					<text>保存</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// inputStyle: {
				// 	'text-align': 'center'
				// },
				list: [
					{
						id: 0,
						name: '结扎装置',
						batchNum: '',
						model: '',
						registrationNo: '',
						count: '',
						manufactureDate: '',
						expirationDate: ''
					},
					{
						id: 1,
						name: '结扎装置',
						batchNum: '',
						model: '',
						registrationNo: '',
						count: '',
						manufactureDate: '',
						expirationDate: ''
					},
					{
						id: 2,
						name: '结扎装置',
						batchNum: '',
						model: '',
						registrationNo: '',
						count: '',
						manufactureDate: '',
						expirationDate: ''
					},
					{
						id: 3,
						name: '结扎装置',
						batchNum: '',
						model: '',
						registrationNo: '',
						count: '',
						manufactureDate: '',
						expirationDate: ''
					},
					{
						id: 4,
						name: '结扎装置',
						batchNum: '',
						model: '',
						registrationNo: '',
						count: '',
						manufactureDate: '',
						expirationDate: ''
					},
					{
						id: 5,
						name: '结扎装置',
						batchNum: '',
						model: '',
						registrationNo: '',
						count: '',
						manufactureDate: '',
						expirationDate: ''
					}
				]
			};
		},
		methods: {
			moreClick() {
				uni.navigateTo({
					url: '../list/list'
				})
			},
			//文字扫描自动填写
			scanClick(i) {
				console.log(i)
			},
			reTake() {
				// console.log()
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			},
			saveClick() {
				console.log('保存')
			}
		}
	}
</script>

<style lang="scss">
.right {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 30rpx;
	image {
		height: 42.99rpx;
		width: 42.99rpx;
	}
	
}

.info {
	height: 140.18rpx;
	padding: 0 54.2rpx;
	.info-item {
		height: 65rpx;
		display: flex;
		align-items: center;
		font-size: 33.64rpx;
		color: #101010;
	}
}

.content { 
	margin-bottom: 100rpx;
	background-color: #fff;
	box-sizing: content-box;
	padding: 10rpx 0;
	.item {
		border-bottom: 0.46rpx solid #ccc;
		margin-bottom: 10rpx;
		box-sizing: border-box;
		padding: 10rpx 51.4rpx;
		min-height: 416.35rpx;
		.title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			text {
				font-size: 28.03rpx;
				color: #101010;
				font-weight: bold;
			}
			image {
				width: 34.57rpx;
				height: 34.57rpx;
				margin: 10rpx 0;
			}
		}
		.item-content {
			
			.nape {
				padding: 10rpx 0;
				margin: 10rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 0.46rpx solid #eee;
				text {
					font-size: 22.42rpx;
					color: #101010;
				}
				.nape-right {
					.input {
						width: 186.91rpx;
						text-align: center;
						// height: 37.38rpx;
						/deep/ .uni-input-input {
							text-align: center !important;
						}
						.uni-input-input, .uni-input-placeholder {
							font-size: 22.42rpx;
							text-align: center;
						}
					}
					
				}
			}
		}
	}
}


.btn {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 20;
	height: 116.82rpx;
	width: 100vw;
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	box-shadow: 0 -3rpx 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
	.wrap {
		box-sizing: border-box;
		padding: 0 40rpx;
		.item {
			flex: 1;
			display: flex;
			align-items: center;
			border-radius: 93.45rpx;
			width: 305.6rpx;
			height: 76.63rpx;
			justify-content: center;
			text {
				color: #fff;
				letter-spacing: 5rpx;
			}
		}
		.item1 {
			background-color: #8F8F8F;
		}
		.item2 {
			background-color: #68CAFF;
		}
	}
}
</style>
