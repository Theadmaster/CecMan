<template>
	<view class="wrapper">
		
		<view class="status_bar" />
		
		<u-navbar title="随货同行单">
			<view class="right" slot="right"@click="moreClick" >
				<image src="../../static/img/menu.png" mode=""></image>
			</view>
		</u-navbar>
		
		<view class="data1">
			<image src="../../static/img/medicine.png" mode=""></image>
			<view class="info">
				<text>100</text>
				<text class="dot">%</text>
			</view>
			<view class="desc">
				<text>正在检测/批号：000000</text>
			</view>
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
		
		<view class="list">
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="item-left" >
					<view class="name" >
						<text :class="item.status>1? 'err': ''">{{item.name}}</text>
						<view class="tag">
							<text>{{item.status==2? '潮湿': (item.status == 3? '破损' : '信息不全')}}</text>
						</view>
					</view>
					<text :class="item.status>1? 'err': ''">产品批号：{{item.num}}</text>
				</view>
				<view class="item-right">
					<image v-if="item.status==1" src="../../static/img/fa-check.svg" mode=""></image>
					<image v-if="item.status==0" src="../../static/img/fa-history.svg" mode=""></image>
					<image v-if="item.status>1" src="../../static/img/fa-times.svg" mode=""></image>
				</view>
			</view>
			
			<view class="title">
				<text>{{num}}</text>
			</view>
			
			<view class="btn" v-if="status===1">
				<text>停止</text>
			</view>
			<view class="btn btn1" v-if="status===0">
				<text>开始</text>
			</view>
			
			<view class="btn btn2" v-if="status===2">
				<text>查看检测结果</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 2,
				num: '12/20',
				// 0 未检查（等待检查）
				// 1 检查通过 没毛病
				// 2 检查不通过 潮湿
				// 3 检查不通过 破损
				// 4 检查不通过 信息不全
				list: [
					{
						id: 0,
						name: '结扎装置',
						num: '10023043',
						status: '1'
					}, {
						id: 1,
						name: '结扎装置',
						num: '10023043',
						status: '2'
					}, {
						id: 2,
						name: '结扎装置',
						num: '10023043',
						status: '1'
					}, {
						id: 3,
						name: '结扎装置',
						num: '10023043',
						status: '3'
					}, {
						id: 4,
						name: '结扎装置',
						num: '10023043',
						status: '4'
					}, {
						id: 5,
						name: '结扎装置',
						num: '10023043',
						status: '0'
					}
				]
			};
		},
		methods: {
			moreClick() {
				console.log('more')
				uni.navigateTo({
					url: '../list/list'
				})
			}
		}
	}
</script>

<style lang="scss">
.wrapper {
	background-color: #FBFBFB;
}

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

.data1 {
	height: 427.1rpx;
	width: 100vw;
	// background: rgba($color: #fff, $alpha: .5) url('../../static/img/medicine.png') no-repeat ;
	// background-size: cover;
	display: flex;
	position: relative;
	image {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		opacity:0.2;
		height: 100%;
		width: 100%;
	}
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.info {
		position: relative;
		top: -20rpx;
		text {
			color: #101010;
			font-size: 140.18rpx;
		}
		.dot {
			position: absolute;
			right: -34.67rpx;
			top: 24.67rpx;
			font-size: 33.64rpx;
		}
	}
	.desc {
		position: relative;
		top: -20rpx;
		font-size: 22.42rpx;
		color: #767676;
	}
}

.data {
	margin: 0 46.26rpx;
	position: relative;
	top: -40rpx;
	display: flex;
	height: 162.14rpx;
	align-items: center;
	background-color: #fff;
	box-shadow: 0px 0px 23.36rpx -7.47rpx rgba(0, 0, 0, 0.2);
	z-index: 20;
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

.list {
	border-radius: 46.72rpx 46.72rpx 0px 0px;
	background-color: #fff;
	// height: 723.36rpx;
	width: 100vw;
	box-shadow: 0 0 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
	// border: 0.46rpx solid #000;
	position: relative;
	top: -126.72rpx;
	box-sizing: border-box;
	padding: 42.05rpx 46.26rpx;
	.item {
		height: 93.45rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 0.46rpx solid #eee;
		
		.item-left {
			width: 336.91rpx;
			height: 74.11rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			text {
				font-size: 16.82rpx;
				color: #767676;
			}
			
			.name {
				display: flex;
				align-items: center;
				> text {
					font-size: 32.71rpx;
					color: #101010;
					margin-right: 20rpx;
				}
				
				.tag {
					padding: 0 10rpx;
					height: 30.65rpx;
					// width: 56.07rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					text {
						color: #fff;
						font-size: 20.03rpx;
					}
					background-color: red;
					border-radius: 37.38rpx;
				}
			}
		}
		.item-right {
			image {
				height: 30.84rpx;
				width: 30.84rpx;
			}
		}
	}
	
	.title {
		margin-top: 30rpx;
		text-align: center;
		font-size: 22.42rpx;
		color: #767676;
		margin-bottom: 20rpx;
		text {
			letter-spacing: 10rpx;
		}
	}
	
	.btn {
		height: 89.71rpx;
		background-color: #EBEBEB;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #767676;
		border-radius: 42.05rpx;
		text {
			letter-spacing: 20rpx;
		}
	}
	.btn1 {
		background-color: #2ed573 ;
		color: #fff;
		
	}
	.btn2 {
		background-color: #68CAFF;
		color: #fff;
		text {
			letter-spacing: 4.33rpx;
		}
	}
}

.err {
	color: red !important;
	text {
		color: red;
	}
}

</style>
