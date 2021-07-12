import fetch from 'node-fetch';

fetch('https://api.meetup.com/2/events?&sign=true&group_id=10250862&page=20')
    .then(result => {
        return result.json();
    }).then(json => {
        console.log(json.meta.title);
    }).catch(err => {
        console.error(err);
    });