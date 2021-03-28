<template>
	<view class="wrapper">
		<view class="status_bar" />
		
		<u-navbar height="60" :border-bottom="false" :is-back="false" title="" :background="{background: '#F7F7F7'}">
			<view class="right" slot="right"@click="moreClick" >
				<image src="../../static/img/setting.png" mode=""></image>
			</view>
		</u-navbar>
		
		<view class="head" >
			<image @click="headClick" src="../../static/img/head.png" mode=""></image>
		</view>
		
		<view class="info">
			<view class="num">
				<text>1000923414</text>
			</view>
			<view class="time">
				<text>在线工时：</text>
				<text style="color: #007AFF;">126</text>
				<text>小时</text>
			</view>
		</view>
		
		<view class="items">
			<view class="item">
				<view class="item-top">
					<text class="spe">100</text>
					<text>张</text>
				</view>
				<view class="item-bottom">
					<text>累计扫描</text>
				</view>
			</view>
			<view class="item">
				<view class="item-top">
					<text class="spe">10</text>
					<text>张</text>
				</view>
				<view class="item-bottom">
					<text>今日扫描</text>
				</view>
			</view>
			<view class="item">
				<view class="item-top">
					<text class="spe">1</text>
					<text>张/分</text>
				</view>
				<view class="item-bottom">
					<text>扫描速度</text>
				</view>
			</view>
		</view>
		
		<view class="content">
			<view class="update">
				<view class="update-left">
					<text>更新应用</text>
					<view class="dot">
						<text>1.0</text>
					</view>
				</view>
				<view class="update-right">
					<view class="dot2">
						
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="line">
				
			</view>
			<view class="services">
				<view class="title">
					<text>其他服务</text>
				</view>
				<view class="service-items">
					<view class="item" @click="itemClick(1)">
						<image src="../../static/img/return.png" mode=""></image>
						<text>意见反馈</text>
					</view>
					<view class="item" @click="itemClick(2)">
						<image src="../../static/img/about.png" mode=""></image>
						<text>关于我们</text>
					</view>
					<view class="item" @click="itemClick(3)">
						<image src="../../static/img/overcome.png" mode=""></image>
						<text>联系客服</text>
					</view>
					<view class="item" @click="itemClick(4)">
						<image src="../../static/img/handle.png" mode=""></image>
						<text>报修处理</text>
					</view>
					<view class="item" @click="itemClick(5)">
						<image src="../../static/img/paiban.png" mode=""></image>
						<text>我的排班</text>
					</view>
					<view class="item">
						
					</view>
					<view class="item">
						
					</view>
					<view class="item">
						
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			headClick(){
				uni.navigateTo({
					url: '../edit/edit'
				})
			},
			moreClick(){
				uni.navigateTo({
					url: '../setting/setting'
				})
			},
			itemClick(i) {
				switch(i) {
					case 1: 
					console.log('意见反馈')
					break;
					case 2:
					console.log('关于我们')
					break;
					case 3:
					console.log('联系客服')
					break;
					case 4:
					console.log('报修处理')
					break;
					case 5:
					uni.navigateTo({
						url: '../schedule/schedule'
					})
				}
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

.head {
	display: flex;
	justify-content: center;
	image {
		height: 140.18rpx;
		width: 140.18rpx;
	}
	
	margin: 20rpx auto;
}

.info {
	text-align: center;
	margin-bottom: 37.1rpx;
	.num {
		text {
			color: #707070;
			font-size: 56.07rpx;
		}
	}
	.time {
		text {
			color: #707070;
			font-size: 28.97rpx;
		}
	}
}

.items {
	display: flex;
	align-items: center;
	padding: 0 40rpx;
	justify-content: space-around;
	margin-bottom: 46.72rpx;
	.item {
		text-align: center;
		.item-top {
			font-size: 23.36rpx;
			// color: $uni-text-color-grey;
			.spe {
				color: #1293D5;
				font-size: 60.74rpx;
			}
		}
		.item-bottom {
			text {
				color: #878787;
				font-size: 22.42rpx;
			}
		}
	}
}

.content {
	background-color: #fff;
	border-radius: 46.72rpx 46.72rpx 0 0;
	min-height: 700.93rpx;
	box-shadow: 0 -3rpx 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
	// overflow: hidden;
	.update {
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 51.4rpx;
		
		.update-left {
			width: 286.91rpx;
			display: flex;
			align-items: center;
			> text {
				margin-right: 15.42rpx;
				font-size: 33.64rpx;
				color: #707070;
			}
			.dot {
				font-size: 22.42rpx;
				padding: 2.67rpx 15.34rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #1196DB;
				border-radius: 19.34rpx;
				color: #fff;
			}
		}
		.update-right {
			display: flex;
			align-items: center;
			width: 46.72rpx;
			justify-content: flex-end;
			.dot2 {
				height: 8.41rpx;
				width: 8.41rpx;
				background-color: #E70F0F;
				border-radius: 50%;
			}
		}
	}
	
	.line {
		// width: 664.2rpx;
		width: 87%;
		margin: 0 auto;
		border-bottom: 0.46rpx solid #eee;
	}
	
	.services {
		.title {
			display: flex;
			align-items: center;
			height: 100rpx;
			padding: 0 51.4rpx;
			font-size: 33.64rpx;
			color: #707070;
		}
		.service-items {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			padding: 10rpx 24.11rpx;
			justify-content: space-around;
			flex-wrap: wrap;
			
			.item {
				height: 132.8rpx;
				width: 150rpx;
				margin-bottom: 25rpx;
				justify-content: space-between;
				display: flex;
				flex-direction: column;
				align-items: center;
				image {
					height: 84.11rpx;
					width: 84.11rpx;
				}
				text {
					font-size: 20.56rpx;
					color: #515151;
				}
			}
		}
		
	}
}
</style>
