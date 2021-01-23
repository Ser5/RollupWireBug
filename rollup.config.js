import commonjs   from '@rollup/plugin-commonjs';
import resolve    from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/js/main.tsx',
	external: [
		'react',
		'react-dom',
	],
	output: {
		file:   'dist/bundle.js',
		format: 'iife',
		globals: {
			react: 'React',
		},
	},
	plugins: [
		resolve({
			moduleDirectories: ['node_modules/', 'src/js/'],
			extensions:        ['.js', '.ts', '.jsx', '.tsx'],
		}),
		commonjs(),
		typescript({
			include: [
				'./**/*',
				//'src/js/**/*',
				//"node_modules/**/*",
			],
			exclude: [
				"node_modules/",
				"dist/",
				"src/buggy.tsx",
			],
		}),
	]
};
