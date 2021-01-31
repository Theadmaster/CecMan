<template>
	<view class="wrapper">
		<view class="status_bar" />
		
		<u-navbar  title="我的资料" />
		
		<view class="content">
			<view class="wrap">
				<view class="item"  v-for="(item, index) in list" :key="index" @click="itemClick(index)">
					<text>{{item.name}}</text>
					<view class="item-right">
						<image v-if="index===0" :src="item.value" mode=""></image>
						<text v-else>{{item.value}}</text>
						<u-icon class="arrow" name="arrow-right"></u-icon>
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
				list: [
					{
						id: 0,
						name: '头像',
						value: '../../static/img/head.png'
					},
					{
						id: 1,
						name: '姓名',
						value: '张三'
					},
					{
						id: 2,
						name: '性别',
						value: '男'
					},
					{
						id: 3,
						name: '工号',
						value: '1000923414'
					},
					{
						id: 4,
						name: '公司名称',
						value: ''
					},
					{
						id: 5,
						name: '单位名称',
						value: ''
					},
					{
						id: 6,
						name: '职位名称',
						value: ''
					},
				]
			};
		},
		methods: {
			itemClick(i) {
				console.log(i)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		margin: 37.38rpx 23.36rpx;
		border-radius: 46.72rpx;
		background-color: #fff;
		overflow: hidden;
		box-shadow: 0 0 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
		.first {
			border-radius: 46.72rpx 46.72rpx 0 0;
		}
		.wrap {
			box-sizing: border-box;
			padding: 0 46.72rpx;
			.item {
				// box-shadow: 0 2rpx 13.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
				border-bottom: 0.46rpx solid #eee;
				min-height: 93.45rpx;
				
				display: flex;
				align-items: center;
				justify-content: space-between;
				text {
					font-size: 33.64rpx;
					color: #8B8B8B;
				}
				image {
					height: 101.4rpx;
					width: 101.4rpx;
					margin: 10rpx 0;
				}
				.item-right {
					display: flex;
					align-items: center;
					.arrow {
						margin-left: 20rpx;
					}
				}
			}
		}
		
		
		
	}
</style>
