// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
let juko ="julio.corbaz@gmail.com"

appDiv.innerHTML = `
<h1>TypeScript Starter</h1>
<h3>Hola ${juko}<h3>
`;

