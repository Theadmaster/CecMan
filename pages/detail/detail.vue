<template>
	<view class="wrapper">
		<view class="status_bar" />
		
		<u-navbar title="随货同行单">
			<view class="right" slot="right"@click="moreClick" >
				<image src="../../static/img/menu.png" mode=""></image>
			</view>
		</u-navbar>
		
		<view class="content">
			<view class="info">
				<view class="info-item">
					<text>产品名称：结扎装置</text>
				</view>
				<view class="info-item">
					<text>产品批号：1231564</text>
				</view>
				<view class="info-item">
					<text>供应商：常州乐奥医疗科技有限公司</text>
				</view>
			</view>
			
			<view class="imgs">
				<view class="img-item" v-for="(item, index) in 5" :key="index">
					<image src="../../static/img/medicine.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="btn">
			<view class="wrap">
				<view class="item item1">
					<text>一键入库</text>
				</view>
			</view>
			
			<view class="wrap">
				<view class=" item item2">
					<text>问题产品登记</text>
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
		onLoad(options) {
			console.log(options)
		},
		methods: {
			moreClick() {
				uni.navigateTo({
					url: '../list/list'
				})
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

.content {
	width: 700.93rpx;
	// margin: 20rpx;
	background-color: #fff;
	border-radius: 32.71rpx;
	min-height: 934.57rpx;
	margin: 37.38rpx auto;
	box-shadow: 0px 0px 43.45rpx -12.61rpx rgba(0, 0, 0, 0.23);
	padding: 30rpx;
	box-sizing: border-box;
	margin-bottom: 150rpx;
	.info {
		padding: 0 10rpx;
		height: 163.55rpx;
		color: #101010;
		font-size: 33.64rpx;
		.info-item {
			margin: 4.67rpx;
		}
	}
	.imgs {
		display: flex;
		flex-direction: column;
		align-items: center;
		.img-item {
			// margin: 20rpx auto;
			margin-bottom: 23.36rpx;
			image {
				height: 403.73rpx;
				width: 635.14rpx;
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
				letter-spacing: 3rpx;
			}
		}
		.item1 {
			background-color: #2092FA;
		}
		.item2 {
			background-color: #F1975A;
		}
	}
}
</style>
