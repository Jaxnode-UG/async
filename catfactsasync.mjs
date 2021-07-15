import fetch from 'node-fetch';

const catFact = async () => {
    const result = await fetch('https://cat-fact.herokuapp.com/facts/random');
    const json = await result.json();
    return json.text;  
};

const fact = await catFact();
console.log(fact);
