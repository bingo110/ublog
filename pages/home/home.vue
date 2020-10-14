<template>
	<view>
	  <uni-swipe-action>
	  	<uni-swipe-action-item v-for="(item, index) in swipeList" :right-options="item.options" :key="item.id" @change="swipeChange($event, index)" @click="swipeClick($event, index)">
	  		<view class="content-box">
	  			<text class="content-text">{{ item.content }}</text>
	  		</view>
	  	</uni-swipe-action-item>
	  </uni-swipe-action>
	</view>
</template>

<script>   
	export default {
		components:{
		
		},
		data() {
			return {
			swipeList:[{
					options: [{
						text: '添加',
						style: {
							backgroundColor: 'rgb(255,58,49)'
						}
					}],
					id: 0,
					content: 'item1'
				},
				{
					id: 1,
					options: [{
							text: '置顶'
						},
						{
							text: '删除',
							style: {
								backgroundColor: 'rgb(255,58,49)'
							}
						}
					],
					content: 'item211<span style="color:red">test</span>'
				},
				{
					id: 2,
					options: [{
							text: '置顶'
						},
						{
							text: '标记为已读',
							style: {
								backgroundColor: 'rgb(254,156,1)'
							}
						},
						{
							text: '删除',
							style: {
								backgroundColor: 'rgb(255,58,49)'
							}
						}
					],
					content: 'item3'
				}
			]
			}
		},
		onLoad() {
			
		},
		methods: {
			swipeChange(e, index) {
				console.log('返回：', e);
				
				console.log('当前索引：', index);
			},
			swipeClick(e, index) {
				
			}
		}
	}
</script>


<style>
	@charset "UTF-8";

	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url("~@/static/uni.ttf") format("truetype");
	}

	/* #endif */
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.content-box {
		flex: 1;
		height: 44px;
		line-height: 44px;
		padding: 0 15px;
		position: relative;
		background-color: #fff;
		border-bottom-color: #f5f5f5;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}

	.content-text {
		font-size: 15px;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding: 10px 0;
		background-color: #fff;
	}

	.button {
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		padding: 4px 8px;
		border-radius: 4px;
	}

	.button-text {
		font-size: 15px;
	}

	.slot-button {
		/* #ifndef APP-NVUE */
		display: flex;
		height: 100%;
		/* #endif */
		flex: 1;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
		background-color: #ff5a5f;
	}

	.slot-button-text {
		color: #ffffff;
		font-size: 14px;
	}
</style>
