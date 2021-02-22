<template>
	<view class="content">
		
		<view class="top">
			<uni-calendar :insert="true" :lunar="false" :disable-before="true" :start-date="'2019-08-1'" :end-date="'2020-08-31'"
			 :showMonth="false" :selected="schedule" @change="change" />
			
		</view>
		<view class="total">
			<view class="total-title">当月累计</view>
			<view class="total-info">
				<view class="item ">
					<view class="point task1"></view>
					<view class="info">正常排班  13  天</view>
				</view>
				<view class="item ">
					<view class="point task2"></view>
					<view class="info">休息班次  8  天</view>
				</view>
				<view class="item ">
					<view class="point task3"></view>
					<view class="info">未排班  10  天</view>
				</view>
			</view>
		</view>
		<view class="tasks" v-if="taskInfo!=''">
			<view class="item title">
				<image src="../../static/img/today.png" mode=""></image>
				
				
				<view class="left">{{selectDate.date}}</view>
				<view class="right">{{selectDate.weekDay}}</view>
				<view class="title-detail">第28周 4月11日-4月17日 </view>
			</view>
			<view class="item task-detail" >
				<u-time-line>
					<u-time-line-item v-for="(item,index) in taskInfo" :key="item.index">
								<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
						<template v-slot:content>
							<view class="task">
								<view class="left">
									<!-- <image width="40upx" height="40upx" src="@/static/img/task.png" v-if="index==0"></image>
									<image v-else></image> -->
									<view class="item-route">{{item.route}}</view>
								</view>
								<view class="xu-line">
									
								</view>
								<view class="right">{{item.startTime}}</view>
							</view>
						</template>
					</u-time-line-item>
				</u-time-line>
			
			</view>
		</view>
		<view v-else class="notasks">
			
		</view>
	</view>

</template>

<script>
	import uniCalendar from '../../components/uni-calendar/uni-calendar.vue'
	import mInput from '../../components/m-input.vue'
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				
				schedule: [{
						"date": '2020-08-01',
						"info": '早班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '9: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '9: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '10: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '11: 00: 00',
							}, ]
						}

					},
					{
						"date": '2020-08-15',
						"info": '早班',
						"data": {
							taskInfo: [{
								route: '路线27进行巡检',
								startTime: '6: 00: 00',
							}, {
								route: '路线29进行巡检',
								startTime: '7: 00: 00',
							}, {
								route: '路线35进行巡检',
								startTime: '8: 00: 00',
							}, {
								route: '路线36进行巡检',
								startTime: '9: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-18',
						"info": '休息',
						"data": {
							taskInfo:''
						}
					},
					{
						"date": '2020-08-19',
						"info": '休息',
						"data": {
							taskInfo:''
						}
					},
					{
						"date": '2020-08-02',
						"info": '休息',
					},
					{
						"date": '2020-08-3',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-4',
						"info": '休息',
						"data": {
							taskInfo: ''
						}
					},
					{
						"date": '2020-08-5',
						"info": '休息',
						"data": {
							taskInfo:''
						}
					},
					{
						"date": '2020-08-06',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-08',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-08',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-9',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-10',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-11',
						"info": '休息',
						"data": {
							taskInfo: ''
						}
					},
					{
						"date": '2020-08-12',
						"info": '休息',
						"data": {
							taskInfo: ''
						}
					},
					{
						"date": '2020-08-13',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-14',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00:  00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-16',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-17',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-20',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					{
						"date": '2020-08-21',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
					
					{
						"date": '2020-08-22',
						"info": '晚班',
						"data": {
							taskInfo: [{
								route: '路线21进行巡检',
								startTime: '22: 00: 00',
							}, {
								route: '路线22进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线23进行巡检',
								startTime: '24: 00: 00',
							}, {
								route: '路线24进行巡检',
								startTime: '24: 00: 00',
							}, ]
						}
					},
				],
				taskInfo: [{
					route: '路线21进行巡检',
					startTime: '13: 00: 00',
				}, {
					route: '路线22进行巡检',
					startTime: '13: 00: 00',
				}, {
					route: '路线23进行巡检',
					startTime: '13: 00: 00',
				}, {
					route: '路线24进行巡检',
					startTime: '13: 00: 00',
				}, ],
				selectDate: {
					date: '7月14日',
					weekDay: '周四'
				}
			};
		},
		methods: {
			change(e) {
				console.log(e);
				var checkDate  =e.fulldate;
				console.log(checkDate);
				var selectDate =  e.lunar.cMonth + '月' + e.lunar.cDay + '日';
				var selectDay = e.lunar.ncWeek;
				var mschedule = this.schedule;
				mschedule.forEach(item=>{
					
					if(item.date==checkDate&&item.info!='休息'){
						console.log(item.date)
						this.taskInfo = item.data.taskInfo;
					}
				})
				this.selectDate = {
					date: selectDate,
					weekDay: selectDay
				};
				
				
			}
		}
	};
</script>

<style lang="scss">
	.content {

		// padding: 2px 5px;
		
		.top{
			margin-bottom: 16rpx;
			overflow: hidden;
			// height: 900rpx;
			
		}
		.total {
			background: #fff;
			height: 168rpx;
			margin-bottom: 16rpx;
			.total-title {
				font-weight: 600;
				padding: 12px 30rpx;
				font-size: 34rpx;
			}

			.total-info {
				display: flex;
				justify-content: center;
				padding: 0 74rpx;
				.item {
					justify-content: center;
					flex: 1;
					font-size: 22rpx;
					display: flex;
					
					align-items: center;

					.point {
						width: 8px;
						height: 8px;
						border-radius: 8px;

					}

					.task1 {
						background-color: #3A69F6;
					}

					.task2 {
						background-color: #17C195;
					}

					.task3 {
						background-color: #F8791F;
					}

					.info {
						margin-left: 5px;
					}
				}

				.item:first-child {
					justify-content: flex-start;
					margin-left: 10px;
				}

				.item:last-child {
					justify-content: flex-end;
					margin-right: 10px;
				}
			}
		}

		.tasks {
		
			
			
			
			
			.item {
				padding: 5px 30rpx;
				font-size: 14px;
				overflow: hidden;
			
				image{
					width: 38rpx;
					height: 38rpx;
					
				}
				
				
			}
			.title{
				background: #fff;
				display: flex;
				align-items: center;
				font-size: 34rpx;
				height: 90rpx;
				margin-bottom: 2rpx;
				.left {
					margin-left: 10rpx;
					margin-right: 20rpx;
				}
				
				.right {
					font-weight: bold;
				}
				.title-detail{
					font-size:11px;
					font-family:Alibaba PuHuiTi;
					font-weight:400;
					margin-left: 50rpx;
					color:rgba(101,101,101,1);
					
				}
			}
			.task-detail{
				padding: 0 74rpx;
				background: #fff;
				padding-top: 34rpx;
			}
			.task {
				
				display: flex;
				align-items: center;
				font-size: 28rpx;
				font-weight: 400;
				.left {
					display: flex;
					align-items: center;
					font-weight: bold;
					
					
					image {
						width: 50upx;
						height: 50upx;
					}
					
				}
				.xu-line{
					width: 190rpx;
					margin: 0 20rpx;
					border-bottom: 1px dashed  #D1F2F8;
				}
				.right {color: #656565;}
			}

			.title {
				
				.left {
					font-size: 16px;
					font-weight: bold;
				}

			}
		}
	}
</style>
