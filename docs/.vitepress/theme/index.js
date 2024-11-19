// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'
import TranslateComponent from './components/TranslateComponent.vue'
import VideoComponent from './components/VideoComponent.vue'
import VueSchoolVideoComponent from './components/VueSchoolVideoComponent.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // 注册自定义全局组件
        app.component('TranslateComponent', TranslateComponent);
        app.component('VideoComponent', VideoComponent);
        app.component('VueSchoolVideoComponent', VueSchoolVideoComponent);
    }
}