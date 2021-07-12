import fetch from 'node-fetch';

async function getTitle() {
    try {
        const result = await fetch('https://api.meetup.com/2/events?&sign=true&group_id=10250862&page=20');
        const json = await result.json();
        return json.meta.title;
    } catch (err) {
        throw err;
    }
}

getTitle()
    .then(title => console.log(title))
    .catch(err => console.error(err));
