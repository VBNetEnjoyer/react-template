import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildOptions, BuildPaths } from "./config/build/types/config";



export default (env: BuildEnv) => {
	const entryPath = path.resolve(__dirname, "src", "index.tsx");
	const buildPath = path.resolve(__dirname, "build");
	const htmlPath = path.resolve(__dirname, "public", "index.html");
	const srcPath = path.resolve(__dirname, "src");
	
	const paths: BuildPaths = {
		entry: entryPath,
		build: buildPath,
		html: htmlPath,
		src: srcPath
	};
	
	const mode = env.mode || "development";
	const isDev = mode === "development";
	const port = env.port || 3000;

	const options: BuildOptions = {
		paths,
		mode,
		isDev,
		port,
	};
	
	const config = buildWebpackConfig(options);

	return config;
};
