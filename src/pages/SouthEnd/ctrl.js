yodasws.page('pageSouthEnd').setRoute({
	title: 'South End',
	canonicalRoute: '/SouthEnd/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/SouthEnd/index.html';
		}
		console.log('Sam, path?', path.join('.'));
		return {
			canonicalRoute: '/SouthEnd/' + path.join('/') + '/',
			template: 'pages/SouthEnd/' + path.join('.') + '.html',
		};
	},
	route: '/SouthEnd(/.*)*',
}).on('load', () => {
	console.log('Page loaded!');
});
