// Write your code here!


    const mainElement = document.getElementById('main');
    mainElement.remove();
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.textContent = 'Sydney is the champion';
    document.body.appendChild(newHeader);
