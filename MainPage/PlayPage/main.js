const leftCapybara = document.getElementById('leftCapybara');
const leftCapybaraBody = document.getElementById('leftCapybaraBody');
const leftCapybaraHand = document.getElementById('leftCapybaraHand');
const leftCapybaraRacket = document.getElementById('leftCapybaraRacket');

const rightCapybara = document.getElementById('rightCapybara');
const rightCapybaraBody = document.getElementById('rightCapybaraBody');
const rightCapybaraHand = document.getElementById('rightCapybaraHand');
const rightCapybaraRacket = document.getElementById('rightCapybaraRacket');

const TennisBall = document.getElementById('TennisBall');


function LeftRacket()
{
    leftCapybaraRacket.classList.remove('LeftRacket');

    setTimeout(function() {
        leftCapybaraRacket.classList.add('LeftRacket');
    },10)

    TennisBall.classList.remove('Ball_1_Left');
    TennisBall.classList.remove('Ball_1_Right');

    setTimeout(function() {
        TennisBall.classList.add('Ball_1_Left');
    },10)
}

function RightRacket()
{
    rightCapybaraRacket.classList.remove('RightRacket');
    
    setTimeout(function() {
        rightCapybaraRacket.classList.add('RightRacket');
    },10)
    
    TennisBall.classList.remove('Ball_1_Left');
    TennisBall.classList.remove('Ball_1_Right');

    setTimeout(function() {
        TennisBall.classList.add('Ball_1_Right');
    },10)

}

TennisBall.addEventListener('animationend', function(event){
    if (event.animationName === 'Ball_1_Left')
    {
        RightRacket();
    }

    else if (event.animationName === 'Ball_1_Right')
    {
        LeftRacket();
    }
});


leftCapybaraRacket.classList.add('LeftRacket');
TennisBall.classList.add('Ball_1_Left');
