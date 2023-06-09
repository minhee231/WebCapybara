const NewsContent = document.getElementById('NewsContent');
const HoDDuck = document.getElementById('HoDDuck');
const HoDDuckEat0 = document.getElementById('HoDDuckEat0');
const HoDDuckEat1 = document.getElementById('HoDDuckEat1');
const HoDDuckEat2 = document.getElementById('HoDDuckEat2');
const HoDDuckEat3 = document.getElementById('HoDDuckEat3');
const HoDDuckEat4 = document.getElementById('HoDDuckEat4');
const MomCapybara = document.getElementById('MomCapybara');

const HoDDuckList = [
    HoDDuckEat0,
    HoDDuckEat1,
    HoDDuckEat2,
    HoDDuckEat3,
    HoDDuckEat4
]

const text = [
    '우리 친구들 안녕안녕',
    '오오오오오오오오오오 오 오 오 ',
    '오늘 해볼 것은 뭐냐면은',
    '호호 호 호호호호호 호 호 호 호',
    '호호호 호떡 먹어볼께 먹어볼께',
];

const text2 = [
    '음 으으음 음~',
    '맛있어 맛있어 맛있어',
    '이 이이이 이이 이거',
    '엄엄 엄엄 엄마 카피바라가',
]

const text3 = [
    '만들어 주신 거 거든???',
    '엄엄 엄엄마 카피바라가',
    '직접 직접 흘 흑ㄱ 흙 설탕 흙설탕 넣어서',
    '엄마가 직접 후라이팬에 구 구구 구워 주신거야',
    '부럽지 부럽지 부부 부럽지 부럽지',
    ''
]

let count = 0;
let count2 = 0;
let count3 = 0;

function NextContent()
{
    NewsContent.textContent = text[count];

    if (text.length == count)
    {
        //스토리 마지막
        HoDDuck.style.display = 'none';
        HoDDuckEat();
        return;
    }
    count++;


    setTimeout(NextContent, 2000);
}

setTimeout(NextContent,2000);

function NextContent2()
{
    NewsContent.textContent = text2[count2];

    if (text2.length == count2)
    {
        MomCapybara.style.display = 'block';
        NextContent3();
        return;
    }

    count2++;

    setTimeout(NextContent2, 2000);
}

function NextContent3()
{
    NewsContent.textContent = text3[count3];
    count3++;

    setTimeout(NextContent3, 2000);
}



let HoDDuckEatCount = 0
function HoDDuckEat()
{
    HoDDuckList[HoDDuckEatCount].style.display = 'block';
    
    if (HoDDuckEatCount > 0)
    {
        HoDDuckList[HoDDuckEatCount-1].style.display = 'none';
    }
    
    if (HoDDuckEatCount == 4)
    {
        NextContent2();
        return;
    }
    
    HoDDuckEatCount++;
    
    setTimeout(HoDDuckEat, 2000);
}

function ShowMom()
{
    MomCapybara.style.display = 'block';
}
