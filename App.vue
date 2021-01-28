<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
