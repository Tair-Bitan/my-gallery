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
            imgUrl: 'img/portfolio/bookshop.png',
            publishedAt: getDate(),
            labels: ['Data', 'MVC']
        },
        {
            id: 3,
            name: 'Pac-Man',
            title: 'Im Pac-Man',
            desc: 'lorem',
            url: 'https://www.google.com/',
            imgUrl: 'img/portfolio/pacman.png',
            publishedAt: getDate(),
            labels: ['Games', 'Design']
        },
        {
            id: 4,
            name: 'Ball Game',
            title: 'Collect Those Balls!',
            desc: 'lorem',
            url: 'https://www.google.com/',
            imgUrl: 'img/portfolio/ball-game.png',
            publishedAt: getDate(),
            labels: ['Games', 'User Input']
        },
        {
            id: 5,
            name: 'Touch Nums',
            title: 'How Fast Are You?',
            desc: 'lorem',
            url: 'https://www.google.com/',
            imgUrl: 'img/portfolio/touchNums.png',
            publishedAt: getDate(),
            labels: ['Games', 'Time']
        },
        {
            id: 6,
            name: 'Guess Me',
            title: 'I Know What You Think About',
            desc: 'lorem',
            url: 'https://www.google.com/',
            imgUrl: 'img/portfolio/guessMe.png',
            publishedAt: getDate(),
            labels: ['DOM', 'tree branches', 'Design']
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

