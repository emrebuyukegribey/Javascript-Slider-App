var  models = [
    {
        name: 'Eski 1',
        image: 'images/1.jpg',
        link: 'http://google.com'
    },
    {
        name: 'Eski 2',
        image: 'images/2.jpg',
        link: 'http://google.com'
    },
    {
        name: 'Eski 3',
        image: 'images/3.jpg',
        link: 'http://google.com'
    },
    {
        name: 'Eski 4',
        image: 'images/4.jpg',
        link: 'http://google.com'
    },
    {
        name: 'Eski 5',
        image: 'images/5.jpg',
        link: 'http://google.com'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration: '2000',
    random: false
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function() {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function() {
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        init(settings);
    })
})

function init(settings) {
    var prev;
    interval = setInterval(function() {
        if(settings.random) {
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev=index;
        }else {
            if(slaytCount == index+1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}

function showSlide(i) {
    index = i;
    if(i<0) {
        index = slaytCount-1;
    }
    if(i>=slaytCount) {
        index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link)
}

