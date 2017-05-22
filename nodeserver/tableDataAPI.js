const router = require('express').Router();
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

router.get('/', (req,res) => {
    res.send(data);
});

router.get('/byFields', (req,res) => {
    const params = req.query;
    let result = [];
    
    for(var i=0; i < data.length; i++){
        if( (data[i].date === params.date || params.date === '') &&
            (data[i].deliveryCountry === params.deliveryCountry || params.deliveryCountry === '') &&
            (data[i].manufacturer === params.manufacturer || params.manufacturer === '') &&
            (data[i].gender === params.gender || params.gender === '') &&
            (data[i].size === params.size || params.size === '') &&
            (data[i].colour === params.colour || params.colour === '') &&
            (data[i].style === params.style || params.style === '') &&
            (data[i].count === params.count || params.count === '') ) {
                
            result = [...result, data[i]];
        }
    }
    
    res.send(result);
});

module.exports = router;