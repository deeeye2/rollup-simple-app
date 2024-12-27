import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.createElement('div');
    appDiv.textContent = 'Hello, Rollup!';
    appDiv.className = 'app';
    document.body.appendChild(appDiv);
});
