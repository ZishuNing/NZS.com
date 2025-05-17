const CONFIG = {
	defaultTheme: 'R61G150B51',
	seasonalTheme: false, // will change the default theme based on the date

	// effects
	effectsDisabledByDefault: false,
	effectsDisabledByDefaultMobile: true,
	displayEffectsSwitch: true,

	// additional effects
	crtEffect: true,
	noiseEffect: true,
	grungeOverlay: true,

	// tabs
	defaultHash: '#about',
	animationOnTabChange: true, // disabled when effects are disabled
	writeAnimationOnTabChange: false, // animationOnTabChange must be true | may cause performance issues

	// blog
	blogUrl: 'https://data.richardapps.net/blog.xml', // example: '/src/example/blog.xml'
	useExample: false,
	writeAnimationOnPostOpen: true,
	showEstimatedReadTime: true,
};
