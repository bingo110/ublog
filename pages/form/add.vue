<template>
	<view>
		<view class="box_bg">
			<cu-custom :bgColor="'bg-'+themeColor.name">
				<block slot="content">添加倒计时</block>
			</cu-custom>
			<view class="box_bg_img">
				<!-- 背景图-->
				<image :src="homeIndex.bg_img" :mode="homeIndex.bg_img_fill" class="box_bg_img_view"></image>
			</view>
			<view class="box_form">
                <view class="cu-form-group margin-top">
                    <view class="title">请输入标题</view>
                    <input placeholder="请输入标题" v-model="form.title" />
                </view>
                <view class="cu-form-group">
                    <view class="title">选择日期</view>
                    <picker mode="date" :value="form.date"  @change="DateChange">
                        <view class="picker">
                            {{form.date}}
                        </view>
                    </picker>
                </view>
                <view class="cu-form-group">
                    <view class="title">选择时间</view>
                    <picker mode="time" :value="form.time"  @change="TimeChange">
                        <view class="picker">
                            {{form.time}}
                        </view>
                    </picker>
                </view>
                <view class="cu-form-group">
                    <view class="box_bg_form_btn">
                        <button class="cu-btn bg-red margin-tb-sm lg round" @click="addForm">提交</button>
                    </view>

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
				form: {
					title: '',
                    time:this.$moment().format("HH:mm"),
                    date:this.$moment().format("YYYY-MM-DD")
                }
			}
		},
		onLoad(option) {

		},
		/*清除定时器*/
		onUnload() {

		},
		methods: {
            TimeChange(e){
                console.log(e)
                this.form.time=e.detail.value;
            },
            DateChange(e){
                console.log(e);
                this.form.date=e.detail.value;
                console.log( this.form.date);
            },
            async addForm() {
                if (!this.form.title) {
                    this.$toast('请填写正确信息')
                    return;
                }
                let res = await uniCloud.callFunction({
                    name: 'remind',
                    data: Object.assign({}, this.form, {type: 'add'})
                })
                // console.log(res)
                if (res.result.code === 0) {
                    this.$toast('添加成功')
                    setTimeout(() =>{
                        this.$routerJump('/home/home')
                    }, 1500)
                } else {
                    this.$toast(res.result.msg)
                }
            },
            register() {
                this.$routerJump('/register/register')
            }
		}
	}
</script>

<style lang="scss">
	.uni-form-item .title {
		padding: 20rpx 0;
	}
    page{
        background: #999;
    }
    .login {
        .login-title {
            padding: 212rpx 0 50rpx 0;
        }

        .form-wrapper {
            width: 580rpx;
            height: 808rpx;

            .bg-white {
                height: 660rpx;

                .login-form-username {
                    width: 400rpx;
                    height: 88rpx;
                    border-radius: 44rpx;
                    overflow: hidden;
                }

                .login-form-password {
                    @extend .login-form-username;
                }

                .login-btn {
                    width: 400rpx;
                    height: 88rpx;
                    border-radius: 44rpx;
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
	@import '~@/colorui/variables';

</style>
