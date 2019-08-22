<template>
	<view class="content">
		
		<button class="popup-btn" @tap="popup_bottom()">请选择</button>
		<view>{{address}}</view>
		<linkAddress
			ref="linkAddress"
			:active="active"
			:height="height"
			@confirmCallback="confirmCallback()"
		>
		</linkAddress>
	</view>
</template>

<script>
	import linkAddress from '../../components/xuan-linkAddress/xuan-linkAddress.vue'
	export default {
		components:{
			linkAddress
		},
		data() {
			return {
				active: false,
				height: '500px',
				popupId: 0,
				address:''
			}
		},
		onLoad() {

		},
		methods: {
			//点击弹出弹窗
			popup_bottom: function() {
				this.height = '550rpx';
				//显示
				this.show_popup();
				
			},
			//显示弹窗
			show_popup: function() {
				this.$refs.linkAddress.show();
			},
			//回掉
			confirmCallback: function() {
				let ads=this.$store.state.user_address;
				this.address=ads.province+ads.city+ads.district;
			}
		}
	}
</script>

<style>
	.popup-btn{
		margin-top: 10px;
	}
</style>
