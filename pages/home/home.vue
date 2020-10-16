<template>
    <view>
        <view class="box_bg">
            <cu-custom :bgColor="'bg-'+themeColor.name" :isBack="true" :icon="'sort'">
                <block slot="content">{{lang.home_index}}</block>
            </cu-custom>
            <view class="box_bg_img">
                <!-- 背景图-->
                <image :src="homeIndex.bg_img" :mode="homeIndex.bg_img_fill" class="box_bg_img_view"></image>
            </view>

            <uni-swipe-action class="box_list">
                <uni-swipe-action-item class="box_list_items " v-for="(item, index) in swipeList"
                                       :right-options="item.options" :key="item.id"
                                       @change="swipeChange($event, index)">
                    <div class="content-text" @click="swipeClick($event, index,item)">
                        <div class="box_list_items_title">
                            <span class="box_list_items_title_span"><text class="fa fa-heart "></text> </span>
                            {{ item.title }}
                        </div>
                        <div class="box_list_items_content">
                            <span class="box_list_items_content_left">目标日子</span>
                            <span class="box_list_items_content_right">{{ item.content }}</span>
                        </div>
                        <div class="box_list_items_right">
                            <span class="box_list_items_right_day">{{ item.daysOffset }}</span>天后
                            <span class="box_list_items_right_span"><text class="fa  fa-caret-right"></text> </span>
                        </div>

                    </div>
                </uni-swipe-action-item>
            </uni-swipe-action>
            <view class="box_footer_buttons_box">
                <div class="box_footer_buttons_change_bg" @click="changeBg()">
                    <text class="fa fa-gratipay fa-spin"></text>
                </div>
                <div class="box_footer_buttons_change_bg" @click="addForm()">
                    <text class="fa fa-plus-circle "></text>
                </div>
            </view>
            <view>

            </view>
        </view>
    </view>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                swipeList: [
                    {
                        id: 0,
                        options: [{
                            text: '删除',
                            style: {
                                backgroundColor: 'rgb(255,58,49)'
                            }
                        }],
                        title: '恋爱纪念日',
                        content: '2020-11-10',
                        daysOffset: '20'
                    },
                    {
                        id: 1,
                        options: [
                            {
                                text: '删除',
                                style: {
                                    backgroundColor: 'rgb(255,58,49)'
                                }
                            }
                        ],
                        title: '月考倒计时',
                        content: '2020-12-09',
                        daysOffset: '38'
                    },
                    {
                        id: 2,
                        options: [
                            {
                                text: '删除',
                                style: {
                                    backgroundColor: 'rgb(255,58,49)'
                                }
                            }
                        ],
                        title: '项目开始倒计时',
                        content: '2021-01-01',
                        daysOffset: '50'
                    }
                ]
            }
        },
        onLoad() {
            this.changeBg();
        },
        methods: {
            swipeChange(e, index) {
                console.log('返回：', e);

                console.log('当前索引：', index);
            },
            swipeClick(e, index,item) {
                console.log('返回：', index);
                // var item=JSON.stringify(item);
                this.$routerJump(`/page-details/page-details?id=${item.id}`)
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

    @charset "UTF-8";

    /* 头条小程序组件内不能引入字体 */
    /* #ifdef MP-TOUTIAO */
    @font-face {
        font-family: uniicons;
        font-weight: normal;
        font-style: normal;
        src: url("~@/static/uni.ttf") format("truetype");
    }

    @mixin Opacity($value) {
        $IEValue: $value*100;
        //  opacity: $value;
        background-color: agba('', $value);
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity="+$IEValue+")";
        filter: alpha(opacity=$IEValue);
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
