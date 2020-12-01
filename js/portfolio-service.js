'use strict'
var gProjects;

// CREATE
function createProjects() {

    gProjects = [
        {
            id: 1,
            name: 'MineSweeper',
            title: 'Sweep Them All',
            desc: 'lorem',
            url: 'https://tair-bitan.github.io/FirstProj-Mine-Sweeper/',
            imgUrl: 'img/portfolio/minesweeper.png',
            publishedAt: getDate(),
            labels: ['Matrixes', 'User Input']
        },
        {
            id: 2,
            name: 'Book Shop',
            title: 'Book Warm',
            desc: 'lorem',
            url: 'https://tair-bitan.github.io/book-shop/',
            imgUrl: 'img/portfolio/02-thumbnail.jpg',
            publishedAt: getDate(),
            labels: ['Data', 'MVC']
        },
        {
            id: 3,
            name: 'Pac-Man',
            title: 'Im Pac-Man',
            desc: 'lorem',
            url: 'https://www.google.com/',
            imgUrl: 'img/portfolio/03-thumbnail.jpg',
            publishedAt: getDate(),
            labels: ['Games', 'Design']
        },
        {
            id: 4,
            name: 'Ball Game',
            title: 'Collect Those Balls!',
            desc: 'lorem',
            url: 'https://www.google.com/',
            imgUrl: 'img/portfolio/04-thumbnail.jpg',
            publishedAt: getDate(),
            labels: ['Games', 'User Input']
        },
        {
            id: 5,
            name: 'Touch Nums',
            title: 'How Fast Are You?',
            desc: 'lorem',
            url: 'https://www.google.com/',
            imgUrl: 'img/portfolio/05-thumbnail.jpg',
            publishedAt: getDate(),
            labels: ['Games', 'Time']
        },
        {
            id: 6,
            name: 'To Do',
            title: 'Todo: To Do',
            desc: 'lorem',
            url: 'https://www.google.com/',
            imgUrl: 'img/portfolio/06-thumbnail.jpg',
            publishedAt: getDate(),
            labels: ['Task Managing', 'Design']
        }
    ]
}

//READ
function getProjects() {
    return gProjects;
}

function getProjById(projId) {
    var proj = gProjects.find(function (proj) {
        return projId === +`${proj.id}`; //added + because projId is a num and proj.id is a string
    });
    return proj;

}
//UPDATE


//DELETE


//LIST

function getDate() {
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[date.getMonth()]; // Since getMonth() returns month from 0-11
    var year = date.getFullYear();
    var dateStr = ' ' + month + ' ' + year;
    return dateStr;
}

