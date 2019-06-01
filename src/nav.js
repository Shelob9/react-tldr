export const typeCheckingSections = [
    { path: '/prop-types', name: 'Type Checking With Prop Types' },
    { path: '/typescript', name: 'Typescript' },
];

export const componentsSection = [
    { path: '/function', name: 'Function' },
    { path: '/class', name: 'Class' },
];

export const sections = [
    { path: '/sections/general', name: 'General' },
    { path: '/sections/jsx', name: 'JSX' },
    { path: '/sections/type-checking', name: 'TypeChecking',children: typeCheckingSections },
    { path: '/sections/components', name: 'Components',children: componentsSection },
    { path: '/sections/testing', name: 'Testing' },

];

export const nav = [
	{ path: '/', name: 'Home' },
	{
		path: '/sections/zero',
		name: 'Sections',
        children: sections
	},
    { path: 'about', name: 'About',children: [
            { path: '/docs', name: 'Site Documentation'},
            { path: 'https://github.com/shelob9/react-tldr', name: 'Github'},
            { path: 'https://joshpress.net', name: 'Josh'}
        ] }


];
