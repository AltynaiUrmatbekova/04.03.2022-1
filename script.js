let company = [
    {
        picture: "./photo1.jpg",
        name: "Altynai",
        age: "Age: 33",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab commodi modi unde veritatis ut numquam. Cum ab adipisci placeat cupiditate fuga! Facere adipisci est animi, nemo incidunt dolore quidem!"
    },
    {
        picture: "./photo2.jpeg",
        name: "Bakyt",
        age: "Age: 38",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab commodi modi unde veritatis ut numquam. Cum ab adipisci placeat cupiditate fuga! Facere adipisci est animi, nemo incidunt dolore quidem!"
    },
    {
        picture: "./photo3.jpg",
        name: "Bayna",
        age: "Age: 28",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab commodi modi unde veritatis ut numquam. Cum ab adipisci placeat cupiditate fuga! Facere adipisci est animi, nemo incidunt dolore quidem!"
    },
    {
        picture: "./photo4.jpg",
        name: "Nurlan",
        age: "Age: 35",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab commodi modi unde veritatis ut numquam. Cum ab adipisci placeat cupiditate fuga! Facere adipisci est animi, nemo incidunt dolore quidem!"
    },
];

const container = document.querySelector('#container');
container.style.display = 'flex';
company.forEach((item) => {
    const worker = document.createElement('div');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const age = document.createElement('span');
    const p = document.createElement('p');

    img.src = item.picture;
    h1.textContent = item.name;
    age.textContent = item.age;
    p.textContent = item.resume;

    worker.style.padding = '15px';
    worker.style.margin = '15px';
    worker.style.border = '2px solid black';
    worker.style.borderRadius = '20px';
    img.style.width = '260px';
    img.style.height = '300px';
    img.style.borderRadius = '50%';
    h1.style.textAlign = 'center';
    age.style.display = 'block';
    age.style.marginBottom = '20px';
    




    worker.append(img);
    worker.append(h1);
    worker.append(age);
    worker.append(p);
    container.append(worker);

});
