<template>
	<view class="wrapper">
		<view class="status_bar" />
		<u-navbar title="入库情况">
			<view class="right" slot="right"@click="moreClick" >
				<text>筛选</text>
				<u-icon name="arrow-down-fill" size="10"></u-icon>
			</view>
		</u-navbar>
		
		<view class="content">
			<view class="search-wrap">
				<view class="search-left">
					<image src="../../static/img/search.png" mode=""></image>
				</view>
				<view class="search-center">
					<u-input v-model="searchInfo"  />
				</view>
				<view class="search-right" @click="scanClick">
					<image src="../../static/img/scan.png" mode=""></image>
				</view>
			</view>
			
			<u-tabs :list="titles" :is-scroll="false" :current="current" @change="change"></u-tabs>
			
			<view class="list" v-if="status">
				<view class="item" v-for="(item, index) in list" :key="index">
					<view class="item-left">
						<image src="../../static/img/company.svg" mode=""></image>
					</view>
					<view class="item-center">
						<text style="font-size: 32.86rpx; color: #101010;">{{item.name}}</text>
						<text>{{item.time}}</text>
					</view>
					<view class="item-right">
						<view v-if="current===0" class="">
							<u-icon v-if="item.checked" name="checkbox-mark" color="#4DDA6C" size="35"></u-icon>
							<u-icon v-else name="error" color="#E64545" size="35"></u-icon>
						</view>
						<view v-else class="">
							<text>{{item.num}}</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="list" v-if="!status">
				<view class="item" v-for="(item, index) in list1" :key="index">
					<view class="item-left">
						<image v-if="index%2!=0" src="../../static/img/stethoscope.svg" mode=""></image>
						<image v-else src="../../static/img/heartbeat.svg" mode=""></image>
					</view>
					<view class="item-center">
						<text style="font-size: 32.86rpx; color: #101010;">{{item.name}}</text>
						<text v-if="current==0">{{item.desc}}</text>
					</view>
					<view class="item-right">
						<text :style="{color:(item.qualified? '#4DDA6C': '#E64545')}">{{item.num}}</text>
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
				status: true,
				searchInfo: '',
				titles: [{
					name: '全部'
				}, {
					name: '已入库'
				}, {
					name: '合格',
					count: 50
				}, {
					name: '不合格'
				}],
				current: 0,
				list1: [
					{
						name: '一次性医用包',
						num: 100,
						desc: '全部合格',
						qualified: true
					},
					{
						name: '一次性医用导管',
						num: 99,
						desc: '合格98 不合格1',
						qualified: false
					},
					{
						name: '伤口敷料、护创材料',
						num: 100,
						desc: '全部合格',
						qualified: true
					},
					{
						name: '医用胶带、胶贴',
						num: 99,
						desc: '合格98 不合格1',
						qualified: false
					},
					{
						name: '医用纱布、医用绷带、骨科夹板',
						num: 100,
						desc: '全部合格',
						qualified: true
					},
					{
						name: '医用消毒片、医用海绵',
						num: 100,
						desc: '合格98 不合格1',
						qualified: false
					},
					{
						name: '注射及输液器械',
						num: 100,
						desc: '全部合格',
						qualified: true
					},
					{
						name: '刺穿针、活检针',
						num: 99,
						desc: '全部合格',
						qualified: false
					},
					{
						name: '一次性医用包',
						num: 100,
						desc: '全部合格',
						qualified: true
					},
					{
						name: '一次性医用包',
						num: 100,
						desc: '全部合格',
						qualified: true
					},
					{
						name: '一次性医用包',
						num: 100,
						desc: '全部合格',
						qualified: true
					},
					{
						name: '一次性医用包',
						num: 100,
						desc: '全部合格',
						qualified: true
					}
				],
				list: [
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 100
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: false,
						num: 100
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 99
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 100
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 99
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 100
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 100
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 100
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 100
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 99
					},
					{
						name: '常州乐奥医疗科技有限公司',
						time: '今天05:00',
						checked: true,
						num: 100
					}
				]
			};
		},
		methods: {
			moreClick() {
				this.status = !this.status
			},
			scanClick() {
				
			},
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss">
	.wrapper {
		background-color: #fff;
	}
.right {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 30rpx;
}

.content {
	box-sizing: border-box;
	padding: 0 23.47rpx;
	.search-wrap {
		max-width: 680.63rpx;
		margin: 26.72rpx auto;
		height: 70.09rpx;
		border-radius: 16.72rpx;
		display: flex;
		align-items: center;
		padding: 0 27.38rpx;
		box-shadow: 0 0 18rpx -7.47rpx rgba($color: #000000, $alpha: 0.2);
		background-color: #fff;
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
	
	.list {
		padding: 0 20rpx;
		.item {
			height: 109.38rpx;
			display: flex;
			align-items: center;
			border-bottom: 0.46rpx solid #eee;
			.item-left {
				image {
					height: 50.23rpx;
					width: 50.23rpx;
				}
				margin-right: 20rpx;
			}
			.item-center {
				flex: 1;
				display: flex;
				flex-direction: column;
				color: #767676;
				font-size: 16.9rpx;
			}
			.item-right {
				text {
					font-size: 32.86rpx;
				}
			}
			
		}
	}
}

</style>
