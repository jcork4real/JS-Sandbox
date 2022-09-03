const name = 'Jarone';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Template Strings/Literals (es6)
html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    </ul>
`;

document.body.innerHTML = html;