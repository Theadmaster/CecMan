<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.onTabBarMidButtonTap(()=>{
				// console.log("点击了")
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
  .status_bar {
	  height: var(--status-bar-height);
	  width: 100%;
  }
  .wrapper {
	  height: 100%;
	  min-height: 100vh;
	  width: 100vw;
	  background-color: #F7F7F7;
	  overflow: hidden;
  }
  
  .nav {
	  height: 70.09rpx;
  }
</style>
