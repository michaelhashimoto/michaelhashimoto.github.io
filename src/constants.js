export const CONFIG = {
	commandPathDelimiter: '/',
	commandSearchDelimiter: ' ',
	defaultSearchTemplate: 'https://google.com/search?q={}',
	openLinksInNewTab: true,
	suggestionLimit: 4,
};

export const COMMANDS = new Map([
	[
		'1',
		{
			name: 'Current Work',
			url: 'https://docs.google.com/document/d/12RJZvSZpXRI7i9rQsnwOjsMHHV7ctRzlBzhLQqpObPk/edit',
		},
	],
	[
		'2',
		{
			name: '2023 Work',
			url: 'https://drive.google.com/drive/u/0/folders/1OThamlRQPiX1i6LY-yco-4sT0LWtpD4i',
		},
	],
	[
		'b',
		{
			name: 'Dribbble',
			url: 'https://dribbble.com/shots/popular',
		},
	],
	[
		'c',
		{
			name: 'Calendar',
			url: 'https://calendar.google.com',
		},
	],
	[
		'd',
		{
			name: 'Drive',
			url: 'https://drive.google.com',
		},
	],
	[
		'f',
		{
			name: 'Figma',
			url: 'https://www.figma.com/files/recent',
		},
	],
	[
		'g',
		{
			name: 'GitHub',
			url: 'https://github.com',
		},
	],
	[
		'gp',
		{
			name: 'GitHub Pulls',
			url: 'https://github.com/pulls',
			searchTemplate: '?q=is:pr+is:open+user:{}'
			suggestions: [
				'brianchandotcom',
				'kenjiheigel',
				'michaelhashimoto',
				'pyoo47'
			]
		},
	],
	[
		'i',
		{
			name: 'Discord',
			url: 'https://discord.com/channels/@me',
		},
	],
	[
		'k',
		{
			name: 'Keep',
			url: 'https://keep.google.com',
		},
	],
	[
		'm',
		{
			name: 'Mail',
			url: 'https://mail.proton.me/u/0/inbox',
		},
	],
	[
		'j',
		{
			name: 'JIRA',
			searchTemplate: '/browse/{}',
			suggestions: [
				'LRCI-12345',
				'LPS-12345',
				'LRQA-12345'
			],
			url: 'https://liferay.atlassian.net/jira',
		},
	],
	[
		'r',
		{
			name: 'Reddit',
			searchTemplate: '/search?q={}',
			suggestions: [
				'r/r/startpages',
				'r/r/webdev',
				'r/r/onebag',
				'r/r/fujix',
			],
			url: 'https://www.reddit.com',
		},
	],
	[
		't',
		{
			name: 'DeepL',
			searchTemplate: '/en/translator#en/es/{}',
			suggestions: ['t/en/translator#es/en/'],
			url: 'https://www.deepl.com/en/translator',
		},
	],
	[
		'u',
		{
			name: 'Supabase',
			url: 'https://app.supabase.com/projects',
		},
	],
	[
		'v',
		{
			name: 'Vercel',
			suggestions: ['sdk.vercel.ai'],
			url: 'https://vercel.com/dashboard',
		},
	],
	[
		'w',
		{
			name: 'Twitter',
			url: 'https://twitter.com/home',
		},
	],
	[
		'y',
		{
			name: 'YouTube',
			searchTemplate: '/results?search_query={}',
			url: 'https://youtube.com/feed/subscriptions',
		},
	],
	[
		'0',
		{
			name: 'local',
			searchTemplate: ':{}',
			suggestions: [
				'0 8080',
				'0 8161',
				'0 8081',
				'0 8082'
			],
			url: 'http://localhost',
		},
	],
	]);