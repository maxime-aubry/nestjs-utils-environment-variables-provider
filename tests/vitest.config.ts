import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		include: ["**/*.spec.ts"],
	},
	resolve: {
		alias: {
			'@otakusan76/nestjs-environment-variables-provider': path.resolve(__dirname, '../packages/nestjs-environment-variables-provider/src'),
		}
	},
});
