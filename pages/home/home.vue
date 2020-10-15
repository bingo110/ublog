<template>
    <view>
        <view class="box_bg">
            <view class="box_bg_img">
                <!-- 背景图-->
                <image :src="bg_img" :mode="bg_img_fill" class="box_bg_img_view"></image>
            </view>

            <uni-swipe-action class="box_list">
                <uni-swipe-action-item class="box_list_items " v-for="(item, index) in swipeList"
                                       :right-options="item.options" :key="item.id"
                                       @change="swipeChange($event, index)" @click="swipeClick($event, index)">
                    <div class="content-text">
                        <div class="box_list_items_title">
                            <span class="box_list_items_title_span"><text  class="fa fa-heart "></text> </span>
                            {{ item.title }}
                        </div>
                        <div class="box_list_items_content">
                            <span class="box_list_items_content_left">目标日子</span>
                            <span class="box_list_items_content_right">{{ item.content }}</span>
                        </div>
                        <div class="box_list_items_right">
                            <span class="box_list_items_right_day">{{ item.daysOffset }}</span>天后
                            <span class="box_list_items_right_span"><text  class="fa  fa-caret-right"></text> </span>
                        </div>

                    </div>
                </uni-swipe-action-item>
            </uni-swipe-action>
            <view class="box_footer_buttons_box">
                <div class="box_footer_buttons_change_bg" @click="changeBg()">
                    <text  class="fa fa-gratipay fa-spin"></text>
                </div>
                <div class="box_footer_buttons_change_bg" @click="changeBg()">
                    <text  class="fa fa-plus-circle "></text>
                </div>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                bg_img:"",
                bg_img_index:0,
                bg_img_arr: [
                    "/static/images/bg/bg1.jpg",
                    "/static/images/bg/bg2.jpg",
                    "/static/images/bg/bg3.jpg",
                    "/static/images/bg/bg4.jpg",
                    "/static/images/bg/bg5.jpg",
                    "/static/images/bg/bg6.jpg",
                ],
                bg_img_fill: "aspectFill",//背景填充模式
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
            this.bg_img=this.bg_img_arr[this.bg_img_index];
        },
        methods: {
            swipeChange(e, index) {
                console.log('返回：', e);

                console.log('当前索引：', index);
            },
            swipeClick(e, index) {

            },
            changeBg(){
                if(this.bg_img_index<this.bg_img_arr.length){
                    this.bg_img_index++;
                }else{
                    this.bg_img_index=0;
                }
                this.bg_img=this.bg_img_arr[this.bg_img_index];
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

    /* ==============new===================== */
    .box_bg {
        background-color: #000;
        position: fixed;
        width: 100%;
        height: 100%;
         /*按钮样式*/
         .box_footer_buttons_box{
             position: absolute;
             bottom: 5rem;
             right: 3rem;
             .box_footer_buttons_change_bg{
                 color: #ffffff;
                 font-size: 3rem;
             }
         }
        /*列表样式*/
        .box_list {
            position: absolute;
            width: 80%;
            top: 12rem;
            left: 10%;

            .box_list_items {
                /*display: block;*/
            }

            .content-text {
                padding: 7px;
                .box_list_items_right{
                    position: absolute;
                    right: 1rem;
                    top: 1.3rem;
                    color: #adadad;
                    .box_list_items_right_span{
                        margin-left: 5px;
                    }
                    .box_list_items_right_day{
                        margin-right: 3px;
                    }
                }
                .box_list_items_title{
                    font-size: 1.1rem;
                    font-weight:bold;
                    .box_list_items_title_span{
                        margin-right: 5px;
                    }
                }
                .box_list_items_content_left {
                    font-size: 1rem;
                    color: #adadad;
                }
                .box_list_items_content_right {
                    font-size: 0.9rem;
                    color: #adadad;
                    margin-left: 5px;
                }
            }

            .uni-swipe {
                background: $listBg;
                border-radius: 10px;
                margin-bottom: 2px;
                color: #ffffff;
                /*padding-left: 10px;*/
            }
        }

        .box_bg_img {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0%;
            height: 100%;

            .box_bg_img_view {
                width: 100%;
                height: 100%
            }
        }
    }
</style>
