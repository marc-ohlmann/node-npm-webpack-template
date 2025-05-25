import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
	{
		files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
				...globals.node,
            }
        },
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		rules: {
			"no-unused-vars": "error",
			"no-undef": "error",
		},
	},
]);