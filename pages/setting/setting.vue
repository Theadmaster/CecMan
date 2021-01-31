<template>
	<view class="wrapper">
		<view class="status_bar" />
		
		<u-navbar  title="设置" />
		
		<view class="content">
			<view class="wrap">
				<view class="item" :class="index===0? 'first': ''" v-for="(item, index) in list" :key="index" @click="itemClick(index)">
					<text>{{item.name}}</text>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="item1">
				<text>切换账号</text>
			</view>
			<view class="item2">
				<text>退出登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						id: 0,
						name: '账号与安全'
					},
					{
						id: 1,
						name: '隐私'
					},
					{
						id: 2,
						name: '通用'
					},
					{
						id: 3,
						name: '帮助与反馈'
					},
					{
						id: 4,
						name: '关于应用'
					},
				]
			};
		}
	}
</script>

<style lang="scss">
	.content {
		margin: 37.38rpx 23.36rpx;
		border-radius: 46.72rpx;
		background-color: #fff;
		
		.first {
			border-radius: 46.72rpx 46.72rpx 0 0;
		}
		.wrap {
			box-sizing: border-box;
			padding: 0 46.72rpx;
			.item {
				box-shadow: 0 1rpx 13.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
				height: 93.45rpx;
				
				display: flex;
				align-items: center;
				justify-content: space-between;
				text {
					font-size: 33.64rpx;
					color: #8B8B8B;
				}
			}
		}
		
		.item1 {
			box-sizing: content-box;
			height: 93.45rpx;
			border-top: 18.22rpx solid #F7F7F7;
			border-bottom: 18.22rpx solid #F7F7F7;
			display: flex;
			align-items: center;
			justify-content: center;
			text {
				font-size: 33.64rpx;
				color: #8B8B8B;
			}
		}
		.item2 {
			box-shadow: 0 1rpx 13.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
			border-radius: 0px 0px 46.72rpx 46.72rpx;
			height: 93.45rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			text {
				font-size: 33.64rpx;
				color: #8B8B8B;
			}
		}
		
	}
</style>
