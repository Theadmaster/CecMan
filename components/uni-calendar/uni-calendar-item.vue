<template>
	<view class="uni-calendar-item__weeks-box" :class="{
		'uni-calendar-item--disable':weeks.disable,
		
		'uni-calendar-item--checked':(calendar.fullDate === weeks.fullDate && !weeks.isDay) ,
	
		'uni-calendar-item--before-checked':weeks.beforeMultiple,
		'uni-calendar-item--multiple': weeks.multiple,
		'uni-calendar-item--after-checked':weeks.afterMultiple,
		}"
	 @click="choiceDate(weeks)">
		<view class="uni-calendar-item__weeks-box-item" :class="{
			'uni-calendar-item--checked2':(calendar.fullDate === weeks.fullDate && !weeks.isDay),
			 'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay
			 }"
			>
			<text v-if="selected&&weeks.extraInfo" class="uni-calendar-item__weeks-box-circle"></text>
			<text v-if = "!weeks.extraInfo" class="uni-calendar-item__weeks-box-text" :class="{
					'uni-calendar-item--s3':!weeks.extraInfo&&!weeks.disable,
				'uni-calendar-item--isDay-text': weeks.isDay,
				'uni-calendar-item--isDay-circle': weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				
				}">{{weeks.date < 10 ? '0' + weeks.date : weeks.date}}</text>
				<text v-else class="uni-calendar-item__weeks-box-text" :class="{
						'uni-calendar-item--s3':!weeks.extraInfo,
					'uni-calendar-item--isDay-text': weeks.isDay,
					'uni-calendar-item--isDay-circle': weeks.isDay,
					'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
					'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
					'uni-calendar-item--before-checked':weeks.beforeMultiple,
					'uni-calendar-item--multiple': weeks.multiple,
					'uni-calendar-item--after-checked':weeks.afterMultiple,
					'uni-calendar-item--disable':weeks.disable,
					'uni-calendar-item--s1':weeks.extraInfo.info!='休息'&&weeks.extraInfo.info!='未排班',
					'uni-calendar-item--s2':weeks.extraInfo.info==='休息',
					}">{{weeks.date< 10 ? '0' + weeks.date : weeks.date}}</text>
				
			<text v-if="!lunar&&!weeks.extraInfo && weeks.isDay" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				}"></text>
			<text v-if="lunar&&!weeks.extraInfo" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.isDay?'今天': (weeks.lunar.IDayCn === '初一'?weeks.lunar.IMonthCn:weeks.lunar.IDayCn)}}</text>
			<text v-if="weeks.extraInfo&&weeks.extraInfo.info" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--extra':weeks.extraInfo.info&&!weeks.disable,
				
			
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.extraInfo.info}}</text>
				
			<text v-else class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--extra':!weeks.disable,
	
				
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">未排班</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			state:{
				type: String,
				default () {
					return 's0'
				}
			},
			weeks: {
				type: Object,
				default () {
					return {}
				}
			},
			calendar: {
				type: Object,
				default: () => {
					return {}
				}
			},
			selected: {
				type: Array,
				default: () => {
					return []
				}
			},
			lunar: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			choiceDate(weeks) {
				this.$emit('change', weeks)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-calendar-item__weeks-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.uni-calendar-item__weeks-box-text {
		font-size: 34rpx;
		color: $uni-text-color;
	}

	.uni-calendar-item__weeks-lunar-text {
		font-size: 24rpx;
		color: #333;
	}

	.uni-calendar-item__weeks-box-item {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 88rpx;
		height: 88rpx;
	}

	.uni-calendar-item__weeks-box-circle {
		// position: absolute;
		// top: 5px;
		// right: 5px;
		// width: 8px;
		// height: 8px;
		// border-radius: 8px;
		// background-color: $uni-color-error;

	}

	.uni-calendar-item--disable {
		background-color: #fff;
		color: #dadadc !important;
	}

	.uni-calendar-item--isDay-text {
		color: #fff;
		
	}

	.uni-calendar-item--isDay-circle {
		background-color: #3A69F6;
		border-radius: 50%;
		color: #fff!important;
		padding: 4rpx 6rpx;
	}
	
	.uni-calendar-item--isDay {
		// background-color: #3A69F6;
		// border-radius: 50%;
		color: #fff !important;
		box-sizing: border-box;
		background-color: #5E86FE;
		border-radius: 50%;
	}
	.uni-calendar-item--extra {
		color: #000 ;
		font-size: 22rpx;
	}
	.uni-calendar-item--s1{
		color: #3A69F6;
		font-size: 34rpx;
	}
	.uni-calendar-item--s2{
		color: #17C195;
			font-size: 34rpx;
	}
	.uni-calendar-item--s3{
		color: #F8791F;
		font-size: 34rpx;
	}
	.uni-calendar-item--checked {
		// background-color: #7AABC4;
		// color: #fff;
		// opacity: 0.6;
		color: #fff !important;
	}
	.uni-calendar-item--checked2{
		box-sizing: border-box;
		background-color: #5E86FE;
		border-radius: 50%;
		color: #fff !important;
		
		// border: 1px solid #419EEF;
	}
	.uni-calendar-item--multiple {
		background-color: #7AABC4;
		color: #fff;
		
	}
	.uni-calendar-item--before-checked {
		background-color: #ff5a5f;
		color: #fff;
	}
	.uni-calendar-item--after-checked {
		background-color: #ff5a5f;
		color: #fff;
	}
</style>
