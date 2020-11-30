'use strict'

window.onload = onInit();

function onInit() {
    createProjects();
    renderProjects();
}

function renderProjects() {
    var projects = getProjects();
    var strHtmls = projects.map(function (proj) {
        return `
            <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal(${proj.id})">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal"> 
                    <div class="portfolio-hover"> 
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i> 
                        </div>
                    </div> 
                    <img class="img-fluid" src="${proj.imgUrl}"> 
                </a> 
                <div class="portfolio-caption"> 
                    <h4>${proj.name}</h4> 
                    <p class="text-muted">${proj.title}</p> 
                </div> 
            </div>
        `
    });
    $('.my-projects').html(strHtmls.join(''));
}


function renderModal(projId) {
    var proj = getProjById(projId);
    $('.modal-body').html(`
    <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="${proj.imgUrl}">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                  cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date:${proj.publishedAt}</li>
                  <li>Client: need to change</li>
                  <li>Category:${proj.labels}</li>
                </ul>
                <button class="btn btn-success" type="button" onclick="window.open('${proj.url}');">
                    <i class="fa fa-arrow-up"></i>
                    Check It Out
                </button>   <br> <br>    
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
    `
    );
}

function onFormSubmit(ev, el) {
    ev.preventDefault();
    // debugger
    var mail = $('#exampleFormControlInput1').val();
    var subject = $('#exampleFormControlInput2').val();
    var message = $('#exampleFormControlTextarea1').val();
    var mailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${message}`;

    window.open(mailURL, '_blank');
}