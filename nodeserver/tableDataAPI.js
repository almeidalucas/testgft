const router = require('express').Router();
const _ = require('lodash');
const data = [
	{
		date: '01/01/2016',
		deliveryCountry: 'Germany',
		manufacturer: 'The Hipster Jeans Company',
		gender: 'F',
		size: '16',
		colour: 'Dark Blue',
		style: 'Relaxed',
		count: '3',
	},
	{
		date: '01/01/2016',
		deliveryCountry: 'United Kingdom',
		manufacturer: 'Denzil Jeans',
		gender: 'M',
		size: '32/32',
		colour: 'Light Blue',
		style: 'Skinny',
		count: '7',
	},
	{
		date: '02/01/2016',
		deliveryCountry: 'France',
		manufacturer: 'The Hipster Jeans Company',
		gender: 'M',
		size: '28/30',
		colour: 'Red',
		style: 'Skinny',
		count: '6',
	},
	{
		date: '02/01/2016',
		deliveryCountry: 'Austria',
		manufacturer: 'Wrangled Jeans',
		gender: 'F',
		size: '12',
		colour: 'Yellow',
		style: 'Boot Cut',
		count: '1',
	},
	{
		date: '03/03/2016',
		deliveryCountry: 'Austria',
		manufacturer: 'The Hipster Jeans Company',
		gender: 'M',
		size: '32/32',
		colour: 'White',
		style: 'Relaxed',
		count: '23',
	},
	{
		date: '01/05/2016',
		deliveryCountry: 'France',
		manufacturer: 'Wrangled Jeans',
		gender: 'F',
		size: '16',
		colour: 'Black',
		style: 'Skinny',
		count: '1',
	},
];

router.get('/', (req, res) => {
	res.send(data);
});

router.get('/byFields', (req, res) => {
	const params = req.query;
	let result = [];

	_.forEach(data, (el, i) => {
		if ((el.date === params.date || params.date === '') &&
			(el.deliveryCountry === params.deliveryCountry || params.deliveryCountry === '') &&
			(el.manufacturer === params.manufacturer || params.manufacturer === '') &&
			(el.gender === params.gender || params.gender === '') &&
			(el.size === params.size || params.size === '') &&
			(el.colour === params.colour || params.colour === '') &&
			(el.style === params.style || params.style === '') &&
			(el.count === params.count || params.count === '')) {
				
			result = [...result, el];
		}
	});

	res.send(result);
});

module.exports = router;