<template>
    <view>
        <view class="box_bg">
            <cu-custom :bgColor="'bg-'+themeColor.name">
                <block slot="content">设置</block>
            </cu-custom>
            <view class="box_bg_img">
                <!-- 背景图-->
                <image :src="homeIndex.bg_img" :mode="homeIndex.bg_img_fill" class="box_bg_img_view"></image>
            </view>
            <view class="box_form">
                <view class="cu-list menu sm-border card-menu margin-top">
                    <view class="cu-item arrow">
                        <view class="content">
                            <text class="cuIcon-circlefill text-grey"></text>
                            <text class="text-grey">清除缓存</text>
                        </view>
                    </view>
					<view class="cu-item">
						<view class="content padding-tb-sm">
							<view>
								<text class="cuIcon-clothesfill text-blue margin-right-xs"></text> 开启推送</view>
							<view class="text-gray text-sm">
								<text class="cuIcon-infofill margin-right-xs"></text> 小目标还没有实现！</view>
						</view>
						<view class="action">
							<switch class="switch-sex checked skin"></switch>
						</view>
					</view>
					<view class="cu-item arrow">
						<view class="content">
							<text class="cuIcon-btn text-green"></text>
							<text class="text-grey">背景图片</text>
						</view>
						<view class="action">
							<button class="cu-btn round bg-green shadow">
								<text class="cuIcon-upload"></text> 上传</button>
						</view>
					</view>
                </view>

            </view>
        </view>
    </view>
</template>

<script>
    import {ColorList} from './theme.js'

    export default {
        data() {
            return {
                radio: '',
                modalName: '',
                themeList: [],
                switchA: 0
            }
        },
        methods: {
            SwitchA(e) {
                this.switchA = e.detail.value
            },
            changeLang() {
                this.$store.commit('changeLang')
            },
            changeTheme(e) {
                this.themeList = []
                for (let i = 0; i < ColorList.length; i++) {
                    let random = Math.floor(Math.random() * ColorList.length)
                    let item = ColorList[random]
                    this.themeList.indexOf(item) === -1 && this.themeList.push(item)
                    if (this.themeList.length > 5) break
                }
                this.modalName = e.currentTarget.dataset.target
            },
            RadioChange(e) {
                let name = e.detail.value
                let obj = this.themeList.filter(item => {
                    return item.name === name
                })
                this.$store.commit('setThemeColor', obj[0])
                this.modalName = ''
            },
            async onSend() {
                const res = await this.$uniCloud('sendSubscribe')
                console.log(res)
            },
            onSubscribe() {
                let _this = this
                uni.requestSubscribeMessage({
                    tmplIds: ['RpMeij0S_6NbJBPgsVySlqxNY0XBTENXuzM3lYnAvuY'],
                    success(res) {
                        console.log(res)
                        if (res.errMsg === 'requestSubscribeMessage:ok') {
                            uniCloud.callFunction({
                                name: 'subscribe',
                                data: {
                                    data: {test: '我是测试'},
                                    openId: 'oA7jc4pmxnBbdvOi7xS0_3fdU2xw',
                                    templatedId: 'RpMeij0S_6NbJBPgsVySlqxNY0XBTENXuzM3lYnAvuY'
                                }
                            }).then(_ => {
                                _this.$toast('订阅成功')
                                // uniCloud.callFunction({
                                // 	name: 'sendSubscribe'
                                // }).then(r => {
                                // 	console.log(r)
                                // }).catch( e => {
                                // 	console.log(e)
                                // })
                            }).catch(_ => {
                                _this.$toast('订阅失败')
                            })
                        }
                    },
                    fail() {
                        console.log('失败')
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~@/colorui/variables';
	.box_bg .box_form {
		padding-bottom: 1rem;
	}
</style>
<style>
    button {
        margin-top: 20 rpx;
    }
</style>
