import { createApp } from 'vue';
// import 'element-plus/lib/theme-chalk/index.css'


//ElementUI样式及自定义主题
import "@/styles/element-variables.scss";
import ElementPlus from "element-plus";

//自定义样式
import "@/styles/index.scss";



import App from './App.vue';



createApp(App).use(ElementPlus).mount('#app');

