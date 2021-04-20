<template>
	<view class="wrapper">
		<view class="status_bar" />
		
		<u-navbar height="60" title="检测详情">
			<view class="right" slot="right"@click="moreClick" >
				<image src="../../static/img/menu.png" mode=""></image>
			</view>
		</u-navbar>
		
		<view class="content">
			<view class="info">
				<view class="info-item">
					<text>产品名称：复方氨酚烷胺胶囊</text>
				</view>
				<view class="info-item">
					<text>产品批号：20190909</text>
				</view>
				<view class="info-item">
					<text>供应商：河北新元素医疗器械科技有限公司</text>
				</view>
			</view>
			
			<view class="imgs">
				<view class="img-item" v-for="(item, index) in list" :key="index">
					<image :src="item" mode=""></image>
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
				<view class=" item item2" @click="show=true">
					<text>问题产品登记</text>
				</view>
			</view>
		</view>
		
		<u-popup
		v-model="show" 
		mode="bottom" 
		border-radius="40" 
		mask>
			<view class="pop">
				<view class="pop-item" @click.stop="dotClick1(index)" v-for="(item, index) in actions" :key="index">
					<text>{{item.name}}</text>
					<view class="item-right1" >
						<view class="dot" :class="item.checked? 'active' : ''" >
							<view class="dot-content" />
						</view>
					</view>
				</view>
				<view class="line">
					
				</view>
				<view class="pop-item1"  @click="show=false">
					<text>取消</text>
				</view>
				<view class="line">
					
				</view>
				<view class="pop-item1" @click="show=false">
					<text style="color: #007AFF;">确定</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				actions: [
					{
						id: 0,
						name: '潮湿',
						checked: false
					},
					{
						id: 1,
						name: '破损',
						checked: false
					},
					{
						id: 2,
						name: '信息不全',
						checked: false
					},
				],
				list: [
					// '../../static/img/weisu.jpg',
					// '../../static/img/hongmei.jpg',
					'../../static/img/kuaike.jpg',
					// '../../static/img/tiepi.jpg',
					// '../../static/img/kuaike1.jpeg',
					'../../static/img/kuaike2.jpeg',
					'../../static/img/kuaike3.jpeg',
				]
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
			},
			dotClick1(i) {
				this.actions.map(item => {
					item.checked = false
				})
				this.actions[i].checked = !this.actions.checked
				
			},
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
	// width: 700.93rpx;
	width: 95vw;
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
		padding: 0 40rpx;
		height: 163.55rpx;
		color: #101010;
		margin-bottom: 20rpx;
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
				height: 1000.73rpx;
				width: 1800.14rpx;
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

.pop {
	.line {
		height: 20rpx;
		background-color: #F7F7F7;
	}
	.pop-item1 {
		height: 93.45rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		text {
			font-size: 33.64rpx;
			color: #8B8B8B;
		}
	}
	.pop-item {
		height: 93.45rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 40rpx;
		text {
			font-size: 33.64rpx;
			color: #8B8B8B;
		}
		.item-right1 {
			width: 40rpx;
			// height: 100%;
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
	}
}

</style>
