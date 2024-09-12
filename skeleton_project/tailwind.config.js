import franken from 'franken-ui/shadcn-ui/preset-quick';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [franken({ theme: "neutral" })],
	content: [
		'./templates/**/*.html',
		'./static/**/*.js',
		'./core/templates/**/*.html'
	],
	safelist: [
		{
			pattern: /^uk-/
		},
		'ProseMirror',
		'ProseMirror-focused',
		'tiptap'
	],
	theme: {
		extend: {}
	},
	plugins: []
};
