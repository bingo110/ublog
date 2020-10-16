import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules'

Vue.use(Vuex);

// 国际化相关代码
let lang
try {
	// 1. 是否有本地缓存语言
	let userLang = uni.getStorageSync("userLang");
	// 2. 没有用户设置，取系统语言
	if(!userLang){
		const sys = uni.getSystemInfoSync();
		userLang = sys.language;
	}
	console.log('系统语言：', userLang);
	// 根据语言读取文件
	if(userLang.substring(0,2) == 'zh'){
		lang = require('../language/zh.js');
	}else{
		lang = require('../language/en.js');
	}
} catch (e) {
    // error
}
const store = new Vuex.Store({
	modules,
	state: {
		lang: lang,
		themeColor: {
			title: '黑色半透明',
			name: 'black-opacity',
			color: '#e54d42'
		},
		errorMsg: '系统故障请稍后重试',
		//app背景图
		homeIndex: {
			bg_img: "",
			bg_img_index: 0,
			bg_img_arr: [
				"/static/images/bg/bg1.jpg",
				"/static/images/bg/bg2.jpg",
				"/static/images/bg/bg3.jpg",
				"/static/images/bg/bg4.jpg",
				"/static/images/bg/bg5.jpg",
				"/static/images/bg/bg6.jpg",
			],
			bg_img_fill: "aspectFill",//背景填充模式
		}
	},
	mutations: {
		//切换语言
		changeLang: function(state){
			uni.showActionSheet({
				itemList:['简体中文', 'English'],
				success (e) {
					if(e.tapIndex == 0){
						lang = require('../language/zh.js')
					}else{
						lang = require('../language/en.js')
					}
					uni.setStorageSync("userLang", lang.langType)
					state.lang = lang;
					// 改tabbar
					uni.setTabBarItem({
						index:0,
						text: lang.home_stories
					})
					uni.setTabBarItem({
						index:3,
						text: lang.my
					})
				}
			})
		},
		//设置主题
		setThemeColor(state, val) {
			state.themeColor = val
		},
		//切换背景
		setBgImg(state) {
			if (state.homeIndex.bg_img_index < (state.homeIndex.bg_img_arr.length-1)) {
				state.homeIndex.bg_img_index++;
			} else {
				state.homeIndex.bg_img_index = 0;
			}
			state.homeIndex.bg_img = state.homeIndex.bg_img_arr[state.homeIndex.bg_img_index];
		}
	}
})
export default store;