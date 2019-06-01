export const typeCheckingSections = [
    { path: '/prop-types', name: 'Type Checking With Prop Types' },
    { path: '/typescript', name: 'Typescript' },
];

export const sections = [
    { path: '/sections/general', name: 'General' },
    { path: '/sections/jsx', name: 'JSX' },
    { path: '/sections/type-checking', name: 'TypeChecking',children: typeCheckingSections },
];

export const nav = [
	{ path: '/', name: 'Home' },
	{
		path: '/sections/zero',
		name: 'Sections',
        children: sections
	},
    { path: 'https://github.com/shelob9/react-tldr', name: 'Github'},
    { path: 'https://joshpress.net', name: 'Josh'}

];
