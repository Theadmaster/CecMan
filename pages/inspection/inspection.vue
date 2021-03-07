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
				<text>{{progress}}</text>
				<text class="dot">%</text>
			</view>
			<view class="desc">
				<text>正在检测/批号：000000</text>
			</view>
		</view>
		
		<view class="data">
			<view class="data-item">
				<text class="text1">{{inStorage1}}</text>
				<text>已入库</text>
			</view>
			<view class="data-item center">
				<text class="text1">{{qualified}}</text>
				<text>合格</text>
			</view>
			<view class="data-item">
				<text class="text1">{{unqualified}}</text>
				<text>不合格</text>
			</view>
		</view>
		
		<view class="list">
			<view class="item-wrap">
				<view class="item" v-for="(item, index) in list" :key="index" @click="itemClick(index)">
					<view class="item-left" >
						<view class="name" >
							<text :class="item.status>1&&item.over? 'err': ''">{{item.name}}</text>
							<view class="tag" v-if="item.status>1 && item.over">
								<text>{{item.status==2? '潮湿': (item.status == 3? '破损' : (item.status == 4? '信息不全' : ''))}}</text>
							</view>
						</view>
						<text :class="item.status>1&&item.over? 'err': ''">产品批号：{{item.num}}</text>
					</view>
					<view class="item-right" v-if="status!=3" >
						<image v-if="item.status==1" src="../../static/img/fa-check.svg" mode=""></image>
						<image v-if="item.status==0" src="../../static/img/fa-history.svg" mode=""></image>
						<image v-if="item.status>1" src="../../static/img/fa-times.svg" mode=""></image>
					</view>
					
					<view class="item-right1" v-else>
						<view class="dot" :class="item.checked? 'active' : ''" @click.stop="dotClick(index)">
							<view class="dot-content" />
						</view>
					</view>
				</view>
			</view>
			
			<view class="title">
				<text>{{count}}/{{list.length}}</text>
			</view>
			
			<view class="btn" v-if="status===1" @click="btnClick(1)">
				<text>停止</text>
			</view>
			<view class="btn btn1" v-if="status===0" @click="btnClick(0)">
				<text>开始</text>
			</view>
			
			<view class="btn btn2" v-if="status===2" @click="btnClick(2)">
				<text>查看检测结果</text>
			</view>
			
			<view class="btn3" v-if="status===3">
				<view class="btn-left">
					<view class="dot" :class="active? 'active' : ''" @click="allCheck">
						<view class="dot-content" />
					</view>
					<text>全选</text>
				</view>
				
				<view class="btn-right">
					<view class="item right1" @click="operate(1)">
						<text>一键入库</text>
					</view>
					<view class="item right2" @click="operate(2)">
						<text>问题产品登记</text>
					</view>
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
	import mqtt from 'mqtt'
	var client
	  const options = {
		connectTimeout: 40000,
		clientId: 'cecman-mqtt',
		username: 'cecman',
		password: '123456',
		clean: true
	  }
	
	export default {
		data() {
			return {
				show: false,
				topic: 'tyt', //要订阅的主题
				isConnected: false,
				publication: {
					topic: '/inspection',
					qos: 0,
					payload: '{ "msg": "Hello, I am browser." }',
				},
				// 0 未开始检查
				// 1 正在检查
				// 2 检查完毕
				// 3 登记状态
				status: 0,
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
				active: false,
				interval: null,
				count: 0,
				inStorage1: '000',
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
						status: '0',
						over: false,
						checked: false
					}, {
						id: 1,
						name: '结扎装置',
						num: '10023043',
						status: '0',
						over: false,
						checked: false
					}, {
						id: 2,
						name: '结扎装置',
						num: '10023043',
						status: '0',
						over: false,
						checked: false
					}, {
						id: 3,
						name: '结扎装置',
						num: '10023043',
						status: '0',
						over: false,
						checked: false
					}, {
						id: 4,
						name: '结扎装置',
						num: '10023043',
						status: '0',
						over: false,
						checked: false
					}, {
						id: 5,
						name: '结扎装置',
						num: '10023043',
						status: '0',
						over: false,
						checked: false
					}, {
						id: 6,
						name: '结扎装置',
						num: '10023043',
						status: '0',
						over: false,
						checked: false
					}, {
						id: 7,
						name: '结扎装置',
						num: '10023043',
						status: '0',
						over: false,
						checked: false
					}, {
						id: 8,
						name: '结扎装置',
						num: '10023043',
						status: '0',
						over: false,
						checked: false
					}, {
						id: 9,
						name: '结扎装置',
						num: '10023043',
						status: '0',
						over: false,
						checked: false
					}
				]
			};
		},
		computed: {
			inStorage() {
				let count = 0 
				this.list.map(item => {
					if(item.checked) {
						count++
					}
				})
				return '00' + count
			},
			progress() {
				let count = 0
				this.list.map(item => {
					if(item.over) {
						count++
					}
				})
				return count/this.list.length*100
			},
			qualified() {
				let count = 0
				this.list.map(item => {
					if(item.status==1) {
						count++
					}
				})
				return '00' + count
			},
			unqualified() {
				let count = 0
				this.list.map(item => {
					if(item.status>1) {
						count++
					}
				})
				return '00' + count
			}
		},
		onShow() {
			// this.connect()
			client = mqtt.connect('ws://j3cf667e.cn.emqx.cloud:8083/mqtt', options)
			this.mqttMsg()
		},
		
		onHide() {
			this.destroyConnection()
		},
		methods: {
			moreClick() {
				console.log('more')
				uni.navigateTo({
					url: '../list/list'
				})
			},
			allCheck() {
				this.active = !this.active
				if(this.active) {
					this.list.forEach((item, index, arr) => {
						arr[index].checked = true
					})
				} else {
					this.list.forEach((item, index, arr) => {
						arr[index].checked = false
					})
				}
			},
			dotClick(i) {
				console.log(i)
				this.list[i].checked = !this.list[i].checked
				this.active = this.list.filter(item => !item.checked).length==0? true : false
			},
			dotClick1(i) {
				this.actions.map(item => {
					item.checked = false
				})
				this.actions[i].checked = !this.actions.checked
				
			},
			operate(i) {
				if(i===1) {
					console.log('一键入库')
					this.inStorage1 = this.inStorage
					
				}else {
					console.log('问题产品登记')
					this.show = true
				}
			},
			itemClick(i) {
				uni.navigateTo({
					url: `../detail/detail?id=${i}`
				})
			},
			btnClick(i) {
				switch(i) {
					case 0:
					//未开始检查状态
					this.status = 1
					if(this.isConnected) {
						console.log('success')
						// client.publish('active', '1')
						this.doPublish()
					} else {
						console.log('fail')
					}
					//模拟检测
					this.interval = setInterval(() => {
						if(this.interval) {
							if(this.count>this.list.length-1) {
								clearInterval()
								this.interval = null
								this.status = 2
							}
							this.list[this.count].over = true
							this.list[this.count].status = (Math.floor(Math.random()*3)+1).toString()
							this.count++
						}
					}, 1000)
					
					break;
					case 1:
					//正在检查状态
					this.status = 0
					clearInterval()
					this.interval = null
					break;
					case 2: 
					//检查完毕状态
					this.status = 3
					break;
				}
			},
			mqttMsg() {
				client.on('connect', (e) => {
				  console.log("连接成功！！！")
				  client.subscribe('/inspection', { qos: 0 }, (error) => {
					if (!error) {
					  console.log('订阅成功')
					  this.isConnected = true
					} else {
					  console.log('订阅失败')
					  this. isConnected = false
					}
				  })
				}).on('message', (topic, message) => {
				  console.log('收到来自', topic, '的消息', message.toString())
				  this.msg = message.toString()
				}).on('end', () => {
					console.log('断开连接')
				}).on('reconnect', function(error) {
					console.log('正在重连...', that.topic)
				})
			},
			//发布消息
			doPublish() {
			  const { topic, qos, payload } = this.publication
			  client.publish(topic, payload, qos, error => {
			    if (error) {
			      console.log('Publish error', error)
			    }
			  })
			},
			//断开ws
			destroyConnection() {
			  if (client.connected) {
			    try {
			      client.end()
			      client = {
			        connected: false,
			      }
			      console.log('Successfully disconnected!')
			    } catch (error) {
			      console.log('Disconnect failed', error.toString())
			    }
			  }
			},
			
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
	
	width: 100vw;
	box-shadow: 0 0 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
	// border: 0.46rpx solid #000;
	position: relative;
	top: -126.72rpx;
	box-sizing: border-box;
	padding: 42.05rpx 46.26rpx;
	.item-wrap {
		height: 623.36rpx;
		overflow: scroll;
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
	
	.btn3 {
		background-color: #FFFFFF;
		height: 97.66rpx;
		position: fixed;
		z-index: 20;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 0 -3rpx 23.36rpx -7.47rpx rgba($color: #000000, $alpha: .2);
		display: flex;
		align-items: center;
		.btn-left {
			height: 100%;
			width: 100rpx;
			// background-color: #007AFF;
			display: flex;
			align-items: center;
			margin-left: 46.72rpx;
			flex: 1;
			text {
				margin-left: 10rpx;
				color: #A3A3A3;
				font-size: 28.03rpx;
			}
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
		.btn-right {
			width: 429.9rpx;
			height: 100%;
			display: flex;
			// background-color: #2C405A;
			.item {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				text {
					color: #fff;
					font-size: 30.37rpx;
				}
			}
			.right1{
				background-color: #0076FF;
			}
			.right2 {
				background-color: #FF7100;
			}
		}
	}
}

.err {
	color: red !important;
	text {
		color: red;
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
