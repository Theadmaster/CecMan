<template>
	<view class="wrapper">
		<view class="status_bar" />
		
		<view class="head">
			<image src="../../static/img/head.png" mode=""></image>
		</view>
		
		<view class="title">
			<text>你好，{{name}}</text>
		</view>
		
		<view class="form">
			<view class="username">
				<view class="form-title">
					<text>工号</text>
				</view>
				<view class="form-item" :class="active===1? 'active': ''">
					<u-input @focus="active=1"  v-model="form.username" placeholder="请输入工号" />
				</view>
			</view>
			<view class="username">
				<view class="form-title">
					<text>密码</text>
				</view>
				<view class="form-item" :class="active===2? 'active': ''">
					<u-input @focus="active=2"  type="password" v-model="form.password" placeholder="请输入密码" />
				</view>
			</view>
		</view>
		
		<view class="btn" :class="btnActive? 'btn-active': ''" @click="login">
			<text>登录</text>
		</view>
		
		<view class="forget" @click="forgetClick">
			<text>忘记密码</text>
		</view>
		
		<view class="info">
			<view class="info-item" @click="registerClick">
				<text>注册账号</text>
			</view>
			<view class="line">
				
			</view>
			<view class="info-item" @click="moreClick">
				<text>更多选项</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '张三',
				active: 0,
				blur1: false,
				blur2: false,
				btnActive: false,
				form: {
					username: '',
					password: ''
				}
			};
		},
		watch: {
			form: {
				handler: function(val, oldVal) {
					if(val.username && val.password) {
						this.btnActive = true
					} else {
						this.btnActive = false
					}
				},
				deep: true
			}
		},
		methods: {
			login() {
				this.active = 0
				uni.switchTab({
					url: '../main/main'
				})
			},
			blur(i) {
				if(i==1) {
					this.blur1 = true
					this.blur2 = false
				}
				if(i==2) {
					this.blur2 = true
					this.blur1 = false
				}
				if(this.blur1 && this.blur2) {
					this.active = 0
				}
			},
			forgetClick() {
				console.log('忘记密码')
			},
			registerClick() {
				console.log('注册')
			},
			moreClick() {
				console.log('更多')
			}
		}
	}
</script>

<style lang="scss">
.wrapper {
	background-color: #fff;
	padding: 0 70.09rpx;
	padding-top: 96.26rpx;
	position: relative;
}

.head {
	margin-bottom: 38.78rpx;
	image {
		height: 114.48rpx;
		width: 114.48rpx;
	}
}

.title {
	color: #101010;
	font-size: 46.72rpx;
	margin-bottom: 33.17rpx;
}

.form {
	.username {
		margin-bottom: 38.78rpx;
		.form-title {
			font-size: 25.7rpx;
			color: #101010;
			margin-bottom: 9.34rpx;
		}
		.active {
			border-bottom: 1.46rpx solid #7D7D7D !important;
		}
		.form-item {
			border-bottom: 0.46rpx solid #818181;
		}
	}
}

.btn {
	height: 100.46rpx;
	background-color: #99C3FF;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 46.72rpx;
	border-radius: 18.69rpx;
}

.btn-active {
	background-color: #1196DB;
}

.forget {
	color: #4C4C4C;
	font-size: 25.7rpx;
	margin: 14.01rpx;
}

.info {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 14.01rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #434343;
	font-size: 33.64rpx;
	.line {
		height: 37.38rpx;
		width: 0.46rpx;
		background-color: #454545;
		margin: 0 39.71rpx;
	}
}
</style>
