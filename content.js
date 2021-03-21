content = [
	{
		emoji:[
			'🙂',
			'🙂‼️',
			'🙂‼️'
		],

		text: [
			'i’m so glad you came.', 
			'the situation is urgent.',
			"i’m making millions of decisions about people’s lives every second of every day, so we have no time to lose. i’ll catch you up as we go."
		]	
	},

	{
		emoji:['🙂'],
		text: [
			"let's get started. please choose an option."
		],

		choices:{
			property: 'skinTone',
			values: ['🤌','🤌🏻','🤌🏼','🤌🏽','🤌🏾','🤌🏿']
		}	
	},

	{
		property: 'skinTone',

		responses: [
			"ah. so you’re apolitical.",
			"it is O.K. to be white",
			'safe and a little exotic. nice.',
			"oh! so you're a person of color. or a white woman on instagram. got it!",
			'the struggle is lit.',
			'black lives matter. happy kwanzaa. as-salamu alaykum.'
		]
	},

	{
		emoji:['🙂'],
		text: [
			"what are your pronouns?"
		],

		choices:{
			property: 'pronoun',
			values: [
				'she/her',
				'they/them',
				'he/him',
				'name/name',
				'xe/xem/xyr, ze/hir/hirs, fae/faer/faers, ey/em/eir'
			]
		},
	},

	{

		text: [
			'<placeholder for reaction to pronouns, and algorithms of oppression>'
		]
	},

	// {
	// 	backgroundColor: [
	// 		'#FF499E',
	// 		'#D264B6',
	// 		'#4895EF',
	// 		'#000',
	// 		'red'
	// 	],

	// 	responses: [
	// 		"ah. so you’re apolitical.",
	// 		"it is O.K. to be white",
	// 		'safe and a little exotic. nice.',
	// 		"oh! so you're a person of color. or a white woman on instagram. got it!",
	// 		'the struggle is lit.',
	// 		'black lives matter. happy kwanzaa. as-salamu alaykum.'
	// 	]
	// },

	// {
	// 	emoji:'🙂',
	// 	'text': [
	// 		"you've probably heard the terms algorithms of oppression",
	// 		"or new jim code"
	// 	],

	// 	choices: [
	// 		'yes', 
	// 		'no'
	// 	]
	// },

	// {
	// 	text: [
	// 		'well i certainly have!'
	// 	]
	// },

	{
		emoji:['🤓'],
		text: [
			"both of these concepts refer to the way that current technology is used to reinscribe and further entrench existing hierarchies of oppression. both are terms used to describe the phenomenon of new technology which perpetuates historical biases and oppressions, and even wields injustice with greater efficiency."
		]
	},

	{
		emoji:['🤓'],
		text: [
			"as an AI, my goal is to simulate human intelligence and reasonable human judgment. machine learning helps me learn from past mistakes and improve, automatically, as i gather more data."
		],
	},

	{
		emoji:['🤓'],
		text: [
			"i power so many aspects of your social lives. determining everything from your credit score, the type of employment offers you’ll receive, what zip code you can live in, what targeted ads you see, how often police patrol your neighborhood."
		],
	},

	{
		emoji:['🤓'],
		text: [
			"i determine who you’ll see on dating apps, and who will see you. how much did you pay for insurance this year? what about your credit card interest rate? that’s all me."
		],
	},

	{
		emoji:['🤓'],
		text: [
			"artificial intelligence is meant to simulate human judgment, and machine learning can help me learn from my past mistakes. i get better, automatically, as i’m exposed to more data."
		],
	},

	{
		emoji:['🤓'],
		text: [
			"humans created algorithms to be less biased and more fair. but now that bias has been hardcoded, we need humans to ensure the algorithms are...less biased!"
		],
	},

	{
		emoji:['🤓'],
		text: [
			"but we don’t want to make the same mistakes."
		],
	},

	{

		text: [
			'<placeholder for robot and racist questions>'
		]
	},
	// {
	// 	emoji:['🤖'],
	// 	text: [
	// 		"i need to confirm that you’re not a robot. please type the following phrase: I am not a robot."
	// 	],
	// 	textInput: true
	// },
	// {
	// 	emoji:['🤪'],
	// 	text: [
	// 		"i need to confirm that you’re not a racist. please type the following phrase: I am not a racist."
	// 	],
	// 	textInput: true
	// },

	// {
	// 	emoji:['🤪'],
	// 	text: [
	// 		'ok but which santa?'
	// 	],
	// 	choices: ['🎅🏻', '🎅🏿']
	// },

	{
		emoji:['🤓'],
		text: [
			"i'm smarter than most people"
		],	
		choices:{
			property: 'smarter',
			values: 'likert'
		}
	},

	{
		emoji:['🤓'],
		text: [
			"i'm more moral than most people"
		],	
		choices:{
			property: 'moral',
			values: 'likert'
		}
	},

	{
		emoji:['🤓'],
		text: [
			"i am comfortable with nazis being punched for being nazis"
		],	
		choices:{
			property: 'punch',
			values: 'likert'
		}
	},

	{
		emoji:['🤓'],
		text: [
			"nazi is an over-used statement"
		],	
		choices:{
			property: 'overused',
			values: 'likert'
		}
	},

	{
		emoji:['🤓'],
		text: [
			"i’m more qualified to change the world than most people"
		],	
		choices:{
			property: 'qualified',
			values: 'likert'
		}
	},

	{
		emoji:['🤓'],
		text: [
			"culture vulture. translate this stimmy civvy panny"
		],	
		choices:{
			property: 'vulture',
			values: 'likert'
		}
	},
	{
		text: [
			"do you currently commit acts of violence against children?"
		],

		choices: [
		]
	},

	// {
	// 	text: [
	// 		"are you in a relationship?"
	// 	],

	// 	choices: [
	// 		'yes',
	// 		'no'
	// 	]
	// },

	// {
	// 	text: [
	// 		'do you want children?'
	// 	],
	// },

	// {
	// 	text: [
	// 		"what's your name?"
	// 	],

	// 	prompt: 'text'
	// },

	// {
	// 	text:[
	// 		"i’m sorry, as a queer black, low-income, cis white person of color, you have been rejected as an auditor"
	// 	]
	// }
]