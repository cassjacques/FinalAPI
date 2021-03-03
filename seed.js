const db = require('./models');
const fitsDataArray = [
    {
        'title': 'Only Happy When It Rains',
        'blogPost': 'It\'s raining \& I love Garbage',
        'nowPlaying': 'GloryBox - Portishead',
        'weather': 'rain',
        'vibe': 'wavy',
    },
    {
        'title': 'Pigs Is Beautiful',
        'blogPost': 'Recently watched House of 1000 Corpses',
        'nowPlaying': 'Pilgrimage - Nine Inch Nails',
        'weather': 'clear skies',
        'vibe': 'aggressive',
    },
    {
        'title': 'SPORTS',
        'blogPost': 'I don\'t play sports, but I love to be comfortable',
        'nowPlaying': 'Steal My Sunshine - Len',
        'weather': 'sunny',
        'vibe': 'Pop Princess',
    },
];

db.Fit.deleteMany({}, (err, deletedFits) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log('Fits deleted successfully');

    db.Fit.create(fitsDataArray, (err, allFits) => {
        if(err) {
            console.log(err);
            process.exit();    
        }
        console.log(`Created ${allFits.length} fits successfully`);
        process.exit();
    });
});