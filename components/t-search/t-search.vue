<template>
	<view>
		<view class="search-wrap" :style="{background: background}">
			<view class="search-left">
				<image src="../../static/img/search.png" mode=""></image>
			</view>
			<view class="search-center">
				<u-input v-model="data" @input="$emit('input', data)" />
			</view>
			<view class="search-right" @click="scanClick">
				<image src="../../static/img/scan.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['background'],
		data() {
			return {
				data: ''
			};
		},
		methods: {
			scanClick(){
				this.$emit('scan')
			}
		}
	}
</script>

<style lang="scss">
.search-wrap {
	// max-width: 680.63rpx;
	margin: 26.72rpx auto;
	height: 70.09rpx;
	border-radius: 46.72rpx;
	display: flex;
	align-items: center;
	padding: 0 27.38rpx;
	box-shadow: 0 0 18rpx -7.47rpx rgba($color: #000000, $alpha: 0.2);
	.search-left {
		width: 60.74rpx;
		display: flex;
		align-items: center;
		// justify-content: center;
		image {
			height: 43.45rpx;
			width: 43.45rpx;
		}
	}
	.search-center {
		flex: 1;
		display: flex;
		align-items: center;
	}
	.search-right {
		width: 50.74rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		image {
			height: 49.53rpx;
			width: 49.53rpx;
		}
	}
}
</style>
