// https://cat-fact.herokuapp.com/facts/random

import fetch from 'node-fetch';

fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(result => {
        return result.json();
    }).then(json => {
        console.log(json.text);
    });