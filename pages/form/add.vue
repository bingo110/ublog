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
                    <input placeholder="请输入标题" name="input"></input>
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
                        <button class="cu-btn bg-red margin-tb-sm lg round">提交</button>
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
                this.time=e.detail.value;
            },
            DateChange(e){
                console.log(e);
                this.date=e.detail.value;
            },
            formSubmit: function(e) {
                console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
                var formdata = e.detail.value
                uni.showModal({
                    content: '表单数据内容：' + JSON.stringify(formdata),
                    showCancel: false
                });
            },
            formReset: function(e) {
                console.log('清空数据')
            },
            async login() {
                if (!this.form.openid) {
                    if (!this.form.username || !this.form.password) {
                        this.$toast('请填写正确信息')
                        return
                    }
                } else {
                    this.form.username = ''
                    this.form.password = ''
                }

                let res = await uniCloud.callFunction({
                    name: 'user',
                    data: Object.assign({}, this.form, {type: 'get'})
                })
                if (res.result.code === 0) {
                    this.$toast('登陆成功')
                    this.$relaunch('/home/home')
                } else {
                    this.$toast(res.result.msg)
                }
            },
            loginWithWechat() {
                let _this = this
                uni.login({
                    success(res) {
                        uniCloud.callFunction({
                            name: 'loginWithWechat',
                            data:{
                                js_code: res.code
                            }
                        }).then((res) => {
                            _this.form.openid = res.result.data.openid
                            _this.login()
                        })
                    }
                })
            },
            register() {
                this.$router('/register/register')
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
