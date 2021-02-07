<template>
	<view class="wrapper">
		<view class="status_bar" />
		    
		<view class="nav">
			<view class="nav-left">
				<text>CecMan医疗有限公司</text>
				<u-icon name="arrow-down-fill" size="14"></u-icon>
			</view>
			<image src="../../static/img/set.png" mode=""></image>
		</view>
		
		<view class="content">
			<t-search :background="bgc" v-model="searchInfo" @scan="scanClick" />
			
			<view class="today">
				<text>今日到达</text>
				<view class="blank">
					<text>1</text>
				</view>
				<view class="blank">
					<text>1</text>
				</view>
				<view class="blank">
					<text>4</text>
				</view>
				<text>件</text>
			</view>
			
			<view class="data">
				<view class="data-item">
					<text class="text1">000</text>
					<text>已入库</text>
				</view>
				<view class="data-item center">
					<text class="text1">000</text>
					<text>合格</text>
				</view>
				<view class="data-item">
					<text class="text1">000</text>
					<text>不合格</text>
				</view>
			</view>
			
			<view class="modules">
				<view class="module-left" @click="listClick">
					<view class="module-title">
						<text>随货同行单</text>
					</view>
					<view class="module-desc">
						<text>点击此处可查看随
货同行单扫描结果</text>
					</view>
					<view class="module-img">
						<image src="../../static/img/list.png" mode=""></image>
					</view>
				</view>
				<view class="module-right">
					<view class="module-top" @click="inspectionClick">
						<view class="text-wrap">
							<view class="module-title">
								<image src="../../static/img/inspection.png" mode=""></image>
								<text>产品检测</text>
								
							</view>
							<view class="module-desc">
								<text>点击此处查看产品检测结果</text>
								
							</view>
						</view>
					</view>
					<view class="module-top" @click="reportClick">
						<view class="text-wrap">
							<view class="module-title">
								<image src="../../static/img/report.png" mode=""></image>
								<text>统计报告</text>
								
							</view>
							<view class="module-desc">
								<text>点击此处查看产品报告结果</text>
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
			
		<view class="">
			<!-- <u-button @click="btnClick" /> -->
		</view>
		
	</view>
</template>

<script>
	import TSearch from '../../components/t-search/t-search.vue'
	export default {
		components: {
			TSearch
		},
		data() {
			return {
				bgc: '#fff',
				searchInfo: ''
			};
		},
		methods: {
			btnClick() {
				console.log(this.searchInfo)
			},
			listClick() {
				uni.navigateTo({
					url: '../list/list'
				})
			},
			inspectionClick() {
				uni.navigateTo({
					url: '../inspection/inspection'
				})
			},
			reportClick() {
				uni.navigateTo({
					url: '../report/report'
				})
			},
			scanClick() {
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
.nav {
	// background-color: #007AFF;
	padding: 0 46.72rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.nav-left {
		display: flex;
		align-items: center;
		text {
			margin-right: 4.67rpx;
			color: #707070;
			font-size: 33.64rpx;
		}
	}
	image {
		height: 38.31rpx;
		width: 38.31rpx;
		
	}
}

.content {
	padding: 14.01rpx 46.72rpx;
}
.today {
	margin: 34.01rpx 0;
	display: flex;
	align-items: center;
	// text-align: right;
	justify-content: flex-end;
	> text {
		color: #707070;
		font-size: 42.05rpx;
	}
	.blank {
		width: 35.98rpx;
		margin:0 5.6rpx;
		height: 40.72rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		text {
			font-weight: bold;
		}
	}
}

.data {
	display: flex;
	height: 162.14rpx;
	align-items: center;
	background-color: #fff;
	box-shadow: 0px 0px 23.36rpx -7.47rpx rgba(0, 0, 0, 0.2);
	border-radius: 14.01rpx;
	margin-bottom: 59.34rpx;
	.data-item {
		flex: 1;
		height: 101.4rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text {
			font-size: 25.7rpx;
			color: #707070;
		}
		.text1 {
			font-size: 56.07rpx;
			color: #707070;
		}
	}
	.center {
		border-left: 0.46rpx solid #707070;
		border-right: 0.46rpx solid #707070;
	}
}

.modules {
	height: 425.7rpx;
	display: flex;
	justify-content: space-between;
	max-width: 100vw;
	.module-left {
		width: 48%;
		border-radius: 14.01rpx;
		background-color: #fff;
		box-shadow: 0 0 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
		box-sizing: border-box;
		padding-top: 70.09rpx;
		padding-left: 65.42rpx;
		padding-right: 30.72rpx;
		.module-title {
			font-size: 33.64rpx;
			color: #101010;
			text-align: center;
			// margin-left: 9.34rpx;
			margin-bottom: 16.35rpx;
		}
		.module-desc {
			color: #919191;
			font-size: 22.42rpx;
			text-align: right;
			margin-bottom: 40.18rpx;
		}
		.module-img {
			text-align: right;
			image {
				height: 139.71rpx;
				width: 139.71rpx;
			}
		}
	}
	
	.module-right {
		width: 48%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.module-top {
			height: 200.46rpx;
			background-color: #fff;
			border-radius: 14.01rpx;
			box-shadow: 0 0 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
			box-sizing: border-box;
			padding-top: 37.38rpx;
			.text-wrap {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				height: 121.49rpx;
				.module-title {
					display: flex;
					align-items: center;
					text {
						color: #101010;
						font-size: 33.64rpx;
					}
					image {
						height: 51.4rpx;
						width: 51.4rpx;
						margin-right: 14.01rpx;
					}
				}
				.module-desc {
					color: #919191;
					font-size: 18.69rpx;
				}
			}
		}
		.module-bottom {
			height: 200.46rpx;
			border-radius: 14.01rpx;
			background-color: #fff;
			box-shadow: 0 0 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
		}
	}
}
</style>
