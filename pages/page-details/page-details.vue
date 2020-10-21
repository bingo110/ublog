<template>
	<view>
		<view class="box_bg">
			<cu-custom :bgColor="'bg-'+themeColor.name">
				<block slot="content">{{title}}</block>
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
					{{title}}
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
				timer: null,//重复执行
				finshDateFormat:'',//格式化后的目标日期 date+time
				finshDate:'',//目标日期 date+time
				title:'',
			}
		},
		onLoad(option) {
			this.$moment.locale("zh-cn");//设置为中文 参考文档：moment http://momentjs.cn/
			console.log("load:",option)
			this.getDetails(option);
		},
		/*清除定时器*/
		onUnload(){
			console.log("Unload")
			clearInterval(this.timer);
			this.timer=null;
		},
		methods: {
			async getDetails(args){
				let that=this;
				console.log("args:", args.id)
				try {
					const res = await this.$uniCloud('remind', {
						type: 'get',
						_id: args.id,
					})
					console.log("云函数get返回:", res)
					if (res.result.code===0) {
						that.title=res.result.data[0].title;
						this.finshDate=res.result.data[0].date+" "+res.result.data[0].time;
						this.finshDateFormat=this.$moment(this.finshDate).format('LL LT');
						var nowtime = new Date();  //获取当前时间
						var endtime = new Date(this.finshDate);  //定义结束时间
						var lefttime = endtime.getTime() - nowtime.getTime();
						if(lefttime<0){
							this.countdown="已过期";
						}else{
							this.showtime();
							this.timer = setInterval(()=>{
								this.showtime()
							},1000)
						}

					}
				} catch (e) {
					this.$toast(this.errorMsg)
				}
			},
			showtime () {
				var nowtime = new Date(),  //获取当前时间
						endtime = new Date(this.finshDate);  //定义结束时间

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
