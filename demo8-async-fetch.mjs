import fetch from 'node-fetch';

const result = await fetch('https://api.meetup.com/2/events?&sign=true&group_id=10250862&page=20');
const json = await result.json();
console.log(json.meta.title);
