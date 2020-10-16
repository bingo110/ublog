<template>
	<view>
		<view class="box_bg">
			<cu-custom :bgColor="'bg-'+themeColor.name">
				<block slot="content">事件标题</block>
			</cu-custom>
			<view class="box_bg_img">
				<!-- 背景图-->
				<image :src="homeIndex.bg_img" :mode="homeIndex.bg_img_fill" class="box_bg_img_view"></image>
			</view>
			<view class="box_footer_buttons_box">
				<div class="box_footer_buttons_change_bg" @click="changeBg()">
					<text class="fa fa-gratipay fa-spin"></text>
				</div>
				<div class="box_footer_buttons_change_bg" @click="addForm()">
					<text class="fa fa-plus-circle "></text>
				</div>
			</view>
			<view class="box_details">
				<view class="box_details_title">
					考试倒计时
				</view>
				<view class="box_details_time">
					{{countdown}}
				</view>
				<view class="box_details_footer">
					{{finshDate}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				countdown: '',
				day: '',
				time: '',
				minute: '',
				second: '',
				timer: null,//重复执行
				finshDate: "2020年11月01日 13:00"
			}
		},
		onLoad(option) {
			var option1=JSON.stringify(option);
			console.log("load"+option1)
			this.showtime();
			this.timer = setInterval(()=>{
				this.showtime()
			},1000)
		},
		/*清除定时器*/
		onUnload(){
			console.log("Unload")
			clearInterval(this.timer);
			this.timer=null;
		},
		methods: {
			showtime () {
				var nowtime = new Date(),  //获取当前时间
						endtime = new Date("2021/8/8");  //定义结束时间

				var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
						leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
						lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
						leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
						lefts = Math.floor(lefttime/1000%60);  //计算秒数
                 if(lefth<10){
					 lefth="0"+lefth;
				 }
				if(leftm<10){
					leftm="0"+leftm;
				}
				if(lefts<10){
					lefts="0"+lefts;
				}
				this.countdown =  leftd + "天" + lefth + "时" + leftm + "分" + lefts+"秒";  //返回倒计时的字符串

				this.day =  leftd;//返回天
				this.time = lefth;//返回时
				this.minute = leftm;//返回分
				this.second = lefts;//返回秒

				console.log(this.time)
			},
			changeBg() {
				this.$store.commit('setBgImg');
			},
			addForm() {
				this.$routerJump(`/form/add`)
			}
		}
	}
</script>


<style lang="scss" scoped>
	@import '~@/colorui/variables';

</style>
