<template>
	<view>
		<view class="item-wrap">
			<view class="item-left">
				<view class="dot" :class="info.checked? 'active' : ''" @click="dotClick">
					<view class="dot-content" />
				</view>
			</view>
			<view class="item-center" @click="$emit('itemClick', info.id)">
				<text class="center-top">{{info.name}}</text>
				<text class="center-bottom">{{info.time}}</text>
			</view>
			<view class="item-right" v-if="!moreActive">
				<image  src="../../static/img/more.png" mode="" @click="moreActive=true"></image>
				
			</view>
			<view class="item-right1" v-else>
				<view class="select-items" >
					<view class="item item1" @click="selectClick(1)">
						<text>置顶</text>
					</view>
					<view class="item item2" @click="selectClick(2)">
						<text>反馈问题</text>
					</view>
					<view class="item item3" @click="selectClick(3)">
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['info'],
		data() { 
			return {
				active: false,
				moreActive: false
			};
		},
		methods: {
			dotClick() {
				this.active = !this.active
				this.$emit('check', this.info.id)
			},
			selectClick(i) {
				this.$emit('select', i)
			}
		}
	}
</script>

<style lang="scss">
.item-wrap {
	height: 109.34rpx;
	// box-sizing: border-box;
	// padding: 0 21.96rpx;
	display: flex;
	align-items: center;
	border-bottom: 0.46rpx solid #eee;
	.item-left {
		width: 125.23rpx;
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
	.item-center {
		flex: 1;
		display: flex;
		flex-direction: column;
		.center-top {
			color: #101010;
			font-size: 32.71rpx;
		}
		.center-bottom {
			color: #767676;
			font-size: 16.82rpx;
		}
	}
	.item-right {
		width: 78.03rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		image {
			height: 37.38rpx;
			width: 37.38rpx;
		}
		
	}
	.item-right1 {
		height: 100%;
		width: 200.18rpx;
		.select-items {
			height: 100%;
			// width: 400.18rpx;
			width: 100%;
			display: flex;
			align-items: center;
			.item {
				height: 100%;
				flex: 1;
				width: 70.72rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				text {
					color: #fff;
					font-size: 14.01rpx;
				}
			}
			.item1 {
				background-color: #48dbfb;
			}
			.item2 {
				background-color: #3498db;
			}
			.item3 {
				background-color: #ff6b6b;
			}
		}
	}
}
</style>
