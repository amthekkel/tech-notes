# Vite



## Vite config to use alias @ for src folder

To import components as

``` import Component from '@/components/Component.vue' ```

instead of 

``` import Component from '../../../../components/Component.vue' ```

change vite.config.js to the following


``` import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "/src")
		}
	}
}); ```
