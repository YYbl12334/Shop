import {
	createSSRApp
} from "vue";

import uView from './uni_modules/vk-uview-ui';
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.use(uView)
	return {
		app,
	};
}
