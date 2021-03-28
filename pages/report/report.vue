<template>
	<view class="wrapper">
		<view class="status_bar" />
		
		<u-navbar height="60" title="">
			<view class="titles"  v-for="(item, i) in titles" :key="i" @click="currentIndex = i">
				<text :class="currentIndex===i? 'title-active' : ''">{{item}}</text>
			</view>
		</u-navbar>
		
		<view class="count">
			<view class="wrap">
				<u-count-to font-size="140" :start-val="0" :end-val="count"></u-count-to>
				<text style="font-size: 33.8rpx;">件</text>
			</view>
		</view>
		
		<view class="content">
			<view class="content-item" v-if="currentIndex===0">
				<view class="title">
					<text>医用耗材入库情况</text>
				</view>
				<view class="wrap">
					<view class="item" v-for="(item, index) in situationList" :key="index" @click="itemClick">
						<view class="item-left">
							<view :style="{'background-color':item.color}" class="dot">
								
							</view>
						</view>
						<view class="item-right">
							<view class="right-top">
								<text>{{item.name}}</text>
							</view>
							<view class="right-bottom">
								<text style="font-size: 33.8rpx;margin-right: 10rpx;">{{item.data}}
								</text>
								<text>件</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="content-item" v-if="currentIndex!=0">
				<view class="title">
					<text>医用耗材入库情况</text>
				</view>
				<view class="wrap">
					<view class="item1" v-for="(item, index) in list" :key="index">
						<view class="item-left">
							<view :style="{'background-color':item.color}" class="dot">
								
							</view>
						</view>
						<view class="item-right">
							<view class="right-top">
								<text>{{item.name}}</text>
							</view>
							<view class="right-bottom">
								<text style="font-size: 33.8rpx;margin-right: 10rpx;">{{item.data}}</text>
								<text>件</text>
							</view>
						</view>
					</view>
					<view class="item1" style="border: none;">
						
					</view>
				</view>
			</view>
			
			<view v-if="currentIndex===0">
				<view class="content-item">
					<view class="qiun-charts" >
						<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
					</view>
					
				</view>
				
				<view class="content-item">
					<view class="qiun-charts" >
						<canvas canvas-id="canvasPie1" id="canvasPie1" class="charts" @touchstart="touchPie1"></canvas>
					</view>
				</view>
				
				<view class="content-item">
					<view class="qiun-charts" >
						<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
					</view>
				</view>
			</view>
			
			<view class="" v-if="currentIndex!=0">
				<view class="title" >
					<text>医用耗材分析报告</text>
				</view>
				<view class="content-item">
					<view class="qiun-charts1" >
						<canvas canvas-id="canvasRing" id="canvasRing" class="charts1" @touchstart="touchRing"></canvas>
					</view>
				</view>
				
				<view class="title" >
					<text>供应商合格率分析报告</text>
				</view>
				<view class="content-item">
					<view class="qiun-charts" >
						<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
					</view>
				</view>
			</view>
			
			
			
		</view>
		
	</view>
</template>

<script>
	import obj from '../../static/js/types.js'
	import company from '../../static/js/company.js'
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js'
	var _self;
	var canvaPie = null;
	var canvaPie1 = null;
	var canvaLineA=null;
	var canvaRing=null;
	var canvaColumn=null;
	export default {
		data() {
			return {
				titles: ['日报', '周报', '月报'],
				currentIndex: 0,
				situationList: [
					{
						id: 0,
						name: '已入库',
						data: '300',
						color: '#FFD966'
					}, 
					{
						id: 1,
						name: '未入库',
						data: '300',
						color: '#70AD47'
					},
					{
						id: 2,
						name: '合格',
						data: '300',
						color: '#ED7D31'
					},
					{
						id: 3,
						name: '不合格',
						data: '300',
						color: '#5B9BD5'
					}
				],
				//ucharts
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				serverData:'',
				
			};
		},
		computed: {
			list() {
				return obj.list
			},
			count() {
				return this.currentIndex===0? 100: (this.currentIndex===1? 900 : 4520)
			}
		},
		watch: {
			currentIndex(val) {
				
				if(val===0) {
					console.log(val)
					this.getServerData();
				} else if (val === 1) {
					this.getServerData1()
				}
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(680);
			this.cHeight=uni.upx2px(600);
			this.getServerData();
		},
		methods: {
			getServerData1() {
				console.log(this.list)
				let arr = JSON.parse(JSON.stringify(this.list))
				arr.map(item => {
					item.data = 7
					item.string = 7
				})
				// console.log(arr)
				let Ring={series:arr};
				
				_self.showRing("canvasRing",Ring);
				_self.showColumn("canvasColumn",company);
			},
			getServerData(){
				let chartData = {
				  "series": [{
					"name": "已入库",
					"data": 85.5,
					color: '#ffd966'
				  }, {
					"name": "未入库",
					"data": 14.5,
					color: '#70ad47'
				  }]
				}
				let chartData1 = {
				  "series": [{
					"name": "合格",
					"data": 96.5,
					"color": '#5b9bd5'
				  }, {
					"name": "不合格",
					"data": 3.5,
					"color": '#ed7d31'
				  }]
				}
				let LineA = {
					categories: ['已入库', '未入库', '合格', '不合格'],
					series: [{
						name: '前日',
						data: [4, 2, 3, 4],
						color: '#365b7c'
					}, {
						name: '昨日',
						data: [1, 3, 2 ,1],
						color: '#966480'
					}, {
						name: '今日',
						data: [1, 4, 2, 2],
						color: '#dd6172'
					}]
				}
				// let pie = {series: this.situationList}
				_self.showPie("canvasPie",chartData);
				_self.showPie1("canvasPie1",chartData1);
				_self.showLineA("canvasLineA",LineA);
			},
			showPie(canvasId,chartData){
				canvaPie=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'pie',
					fontSize:11,
					legend:{show:true},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
						  lableWidth:15
						}
					},
				});
			},
			showPie1(canvasId,chartData){
				canvaPie1=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'pie',
					fontSize:11,
					legend:{show:true},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
						  lableWidth:15
						}
					},
				});
			},
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					legend:{show:true},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#eee',
						gridType:'dash',
						dashLength:8
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#eee',
						dashLength:8,
						splitNumber:5,
						min:0,
						max:6,
						format:(val)=>{return val.toFixed(0)}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						}
					}
				});
				
			},
			showRing(canvasId,chartData){
				canvaRing=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'ring',
					fontSize:11,
					legend:{
						position: 'right',
						margin: 20,
						padding: 10,
						itemGap: 20
					},
					extra: {
						arcbar: {
							gap: 20,
							radius: 400
						},
						backgroundColor: '#ff0000',
						pie: {
						  offsetAngle: -35,
						  ringWidth: 40*_self.pixelRatio,
						  labelWidth:10,
						  border: true
						},
						
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: uni.upx2px(740)*_self.pixelRatio,
					height: uni.upx2px(500)*_self.pixelRatio,
					disablePieStroke: false,
					dataLabel: false,
				});
			},
			showColumn(canvasId,chartData){
				canvaColumn=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					legend:{show:true},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid:true,
						rotateLabel: true,
						gridColor:'#fff'
					},
					yAxis: {
						//disabled:true
						disableGrid:true,
						min:82,
						max:100,
					},
					dataLabel: false,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					legend: {
						show: false
					},
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
						}
					  }
				});
				
			},
			touchColumn(e){
				canvaColumn.showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + ':' + item.data.value 
						}else{
							return category + ' ' + item.name + ':' + item.data 
						}
					}
				});
			},
			touchRing(e){
				canvaRing.showToolTip(e, {
					format: function (item) {
						return item.name + ':' + item.data 
					}
				});
			},
			touchLineA(e) {
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			touchPie(e){
				canvaPie.showToolTip(e, {
					format: function (item) {
						return item.name + ':' + item.data 
					}
				});
			},
			touchPie1(e){
				canvaPie1.showToolTip(e, {
					format: function (item) {
						return item.name + ':' + item.data 
					}
				});
			},
			itemClick() {
				uni.navigateTo({
					url: '../stock/stock'
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.qiun-charts{width: 750upx; height:600upx;background-color: #FFFFFF;}
	.charts{width: 750upx; height:600upx;background-color: #FFFFFF;}
	.qiun-charts1{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts1{width: 750upx; height:500upx;background-color: #fff;}
	
	
.titles {
	display: flex;
	align-items: center;
	flex: 1;
	justify-content: space-around;
	padding-right: 40rpx;
	text {
		font-size: 33.8rpx;
		color: #101010;
	}
	.title-active {
		color: #0085FF;
	}
}

.count {
	height: 234.74rpx;
	display: flex;
	align-items: center;
	// background-color: #fff;
	justify-content: center;
	.wrap {
		
		text {
			color: #101010;
			font-size: 140.84rpx;
		}
	}
}
.title {
			margin-bottom: 22.53rpx;
			color: #101010;
			font-size: 37.55rpx;
		}
.content {
	background-color: #fff;
	padding: 22rpx 45.53rpx;
	.content-item {
		.title {
			margin-bottom: 22.53rpx;
			color: #101010;
			font-size: 37.55rpx;
		}
		.wrap {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			
			.item {
				height: 160.09rpx;
				width: 300.46rpx;
				border: 0.46rpx solid rgba(187, 187, 187, 100);
				border-radius: 9.38rpx;
				margin-bottom: 29.57rpx;
				padding: 23.47rpx;
				display: flex;
				.item-left {
					flex: 1;
					padding-top: 5rpx;
					.dot {
						height: 23.47rpx;
						width: 23.47rpx;
						border-radius: 50%;
					}
				}
				.item-right {
					font-size: 22.53rpx;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: flex-end;
				}
			}
			.item1 {
				height: 127.04rpx;
				width: 208.45rpx;
				border: 0.46rpx solid rgba(187, 187, 187, 100);
				border-radius: 9.38rpx;
				margin-bottom: 17.57rpx;
				padding: 5rpx;
				display: flex;
				.item-left {
					width: 30rpx;
					padding-top: 5rpx;
					.dot {
						height: 23.47rpx;
						width: 23.47rpx;
						border-radius: 50%;
					}
				}
				.item-right {
					font-size: 16.9rpx;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: flex-end;
				}
			}
		}
	}
}
</style>
