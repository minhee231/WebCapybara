const Katana = document.getElementById('Katana');

class MopImg
{
    constructor(full,up,down,div)
    {
        this.Full = full;
        this.Up = up;
        this.Down = down;
        this.div = div;
    }

    Half() //이미지 반갈죽 애니메이션 추가 + 원래 이미지 숨김
    {
        this.Up.classList.add('HalfUp');
        this.Down.classList.add('HalfDown');
        this.Full.style.display = 'none';

        Katana.classList.remove('Katana');
        setTimeout(function() {
            Katana.classList.add('Katana'); //칼 지나가나는 애니메이션
        },10);
    }

}

const Attack1 = document.getElementById('Attack1');
const Attack2 = document.getElementById('Attack2');
const Attack3 = document.getElementById('Attack3');
const Attack4 = document.getElementById('Attack4');
const Attack5 = document.getElementById('Attack5');
const CapybaraEvent = document.getElementById('CapybaraEvent');

const _Pelican = document.getElementById('Pelican');
const _Crocodile = document.getElementById('Crocodile');
const _Quokka = document.getElementById('Quokka');
const _Minhee = document.getElementById('Minhee');
const _Capybara = document.getElementById('Capybara');

const HalfUp_Pelican = document.getElementById('HalfUp_Pelican');
const HalfDown_Pelican = document.getElementById('HalfDown_Pelican');
const HalfUp_Crocodile = document.getElementById('HalfUp_Crocodile');
const HalfDown_Crocodile = document.getElementById('HalfDown_Crocodile');
const HalfUp_Quokka = document.getElementById('HalfUp_Quokka');
const HalfDown_Quokka = document.getElementById('HalfDown_Quokka');
const HalfUp_Minhee = document.getElementById('HalfUp_Minhee');
const HalfDown_Minhee = document.getElementById('HalfDown_Minhee');
const HalfUp_Capybara = document.getElementById('HalfUp_Capybara');
const HalfDown_Capybara = document.getElementById('HalfDown_Capybara');

const EventText = document.getElementById('EventText');
const CapybaraNoNoNo = document.getElementById('CapybaraNoNoNo');
const Hand = document.getElementById('Hand');

const Pelican = new MopImg(_Pelican,HalfUp_Pelican,HalfDown_Pelican,Attack1);
const Crocodile = new MopImg(_Crocodile,HalfUp_Crocodile,HalfDown_Crocodile, Attack2);
const Quokka = new MopImg(_Quokka,HalfUp_Quokka,HalfDown_Quokka , Attack3);
const Minhee = new MopImg(_Minhee,HalfUp_Minhee,HalfDown_Minhee, Attack4);
const Capybara = new MopImg(_Capybara,HalfUp_Capybara,HalfDown_Capybara, Attack5);

const AttackList = [
    Pelican,
    Crocodile,
    Quokka,
    Minhee,
    Capybara
];

let YesCount = 0;
let AT = false;

function YesYesYes() //예 버튼 클릭시 작동 함수
{
    if (AT) return;
    
    AT = true;

    if (AttackList[YesCount] == Capybara)
    {
        NoNoNo();
        return;
    }

    AttackList[YesCount++].Half();
}


document.addEventListener('animationend',function(event){
    if (event.animationName != 'Katana')
    {
        AttackList[YesCount-1].div.style.display = 'none';
        AttackList[YesCount].div.style.display = 'block';
    }

    if (event.animationName == 'Katana')
    {
        AT = false;
    }
})

function NoNoNo()
{
    CapybaraTalk();
    CapybaraEvent.style.display = 'block';
    Attack5.style.display = 'none';
}


const CpayTalk = [
    '잠깐!!!',
    'NoNoNo',
    'Capybara is Friendly',
    'No Attack!!',
    ''
]
let TalkCount = 0;
function CapybaraTalk()
{
    if (TalkCount == CpayTalk.length) return;
    EventText.textContent = CpayTalk[TalkCount++];

    setTimeout(CapybaraTalk,2000);
}