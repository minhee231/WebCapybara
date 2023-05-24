const button = document.getElementById("GameStartButton");

button.onmouseover = function() {
  button.innerHTML = "CapyStart";
};

button.onmouseout = function() {
  button.innerHTML = "GameStart";
};
//버튼 텍스트 변경 =========================================================

const StartScreen = document.getElementsByClassName("StartScreen")[0];
const GameScreen = document.getElementsByClassName("GameScreen")[0];
const RPGScreen = document.getElementsByClassName('RPGScreen')[0];
function GameStart() //게임 시작 버튼 누름
{
    StartScreen.style.display = "none";

    GameScreen.style.backgroundImage = "url(./RpgImage/BackGround.png";
    RPGScreen.style.display = "block";
    ShowText();
}

//게임스타트===============================================================

const character = document.querySelector("#RPGCharacter");
const characterSword = document.querySelector("#CapybaraSword");
const characterHat = document.querySelector("#CapybaraHat");

let _stop = false;
let RpgCharacterMoveX = -20;
let RpgCharacterHatX = -650;
let RpgCharacterSword = 500;
let DirectionRight = true;

function handleKeyDown(event) 
{
  const step = 10;
  const key = event.key;

  if (event.code == "Space")
  {
    console.log(DirectionRight);
    MoveRightSword();
    MoveLeftSword();
  }

  if (RpgCharacterMoveX == 780)
  {
    if (_stop) return;

    document.getElementById('KingCapybara').style.width = '300px';
    document.getElementById('KingCapybara').style.left = '1400px';
    document.getElementById('KingCapybara').style.top = '300px';

    _stop = true;
    MaWang();
    return;
  }

  if (key == "ArrowLeft" || key == 'a' || key == 'A')
  {
    if (RpgCharacterMoveX < -350) return;

    DirectionRight = false;
    RpgCharacterMoveX -= step;
    RpgCharacterHatX -= step;
    RpgCharacterSword -= step;
    character.style.transform = "scale(-0.3,0.3)";
    characterHat.style.transform = 'scale(-0.05,0.05)';
    characterSword.style.transform = 'scale(-0,0)';
    
    characterHat.style.left = `${RpgCharacterHatX+100}px`;
    characterSword.style.left = `${RpgCharacterSword-210}px`;
    characterHat.style.display = 'block';
  }

  if (key == "ArrowRight" || key == 'd' || key == 'D')
  {
    if (RpgCharacterMoveX > 1200) return;

    DirectionRight = true;  
    character.style.transform = "scale(0.3,0.3)";
    characterHat.style.transform = 'scale(0.05,0.05)';
    characterSword.style.transform = 'scale(0,0)';

    RpgCharacterMoveX += step;
    RpgCharacterHatX += step;
    RpgCharacterSword += step;

    characterHat.style.left = `${RpgCharacterHatX}px`;
    characterSword.style.left = `${RpgCharacterSword}px`;
    characterHat.style.display = 'block';
  }

  character.style.left = `${RpgCharacterMoveX}px`;
}

function handleKeyUp(event)
{
  characterHat.style.display = 'none';
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// document.addEventListener("keydown", function(event) {
//   console.log(event.code);
// });  
//이벤트 키 확인임 언젠간 지우셈

function MoveLeftSword()
{
  if (DirectionRight) return;

  console.log("왼쪽");  
  characterSword.classList.remove("SwordLeftAttack");
  characterSword.classList.remove("SwordRightAttack");
  characterSword.offsetWidth = characterSword.offsetWidth;
  characterSword.classList.add("SwordLeftAttack");
}

function MoveRightSword()
{
  if (!DirectionRight) return;

  console.log("오른쪽");
  characterSword.classList.remove("SwordRightAttack");
  characterSword.classList.remove("SwordLeftAttack");
  characterSword.offsetWidth = characterSword.offsetWidth;
  characterSword.classList.add("SwordRightAttack");
}
//공격 쿨타임 많이 귀찮음.... 그래서 안할꺼야~

//캐릭터 방향키 이동=========================================
//스토리
let index = 0;
let timer;
let StoryIndex = 0;
let text;

const _StoryText = document.getElementById("StoryText");
const StoryText = ['','나는 카피바라다.','나는 왕도 아니고, 신도 아니고 카피바라다.','마왕에게 납치 당한 하츠네 카피바라를 구하기 위해 마왕의 성으로 가는 길이다.','못된 마왕! 내가 꼭 잡아내고 말거야!!!','A,D 키를 눌러 마왕의 성으로 가자' , '스페이스바를 누르면 공격도 가능하지! ']
console.log(StoryText.length)

function showText() 
{
  text = StoryText[StoryIndex];

  console.log(text);
  document.getElementById("StoryText").textContent += StoryText[StoryIndex].charAt(index);
  index++;
  if (index >= text.length) 
  {
    clearInterval(timer);
  }
}

function ShowText() 
{
  if (text == '스페이스바를 누르면 공격도 가능하지! ')
  {
    document.getElementsByClassName("RpgStory")[0].style.display = 'none';
    StoryCheck = true;
    return;
  }

  if (StoryIndex >= StoryText.length-1) return;
  document.getElementById("StoryText").textContent = "";
  const interval = 100;
  
  StoryIndex++;
  index = 0;
  timer = setInterval((showText), interval); 
  console.log(StoryIndex);
}

const MaWangSee = document.getElementsByClassName("MaWangSee");
const MaWangStoryBox = document.getElementById("MaWangStoryBox");
const StoryBox = document.getElementById("StoryBox");
const MaWangStoryName = document.getElementById('MaWangStoryName');
const HatuneCapybara = document.getElementById('HatuneCapybara')

console.log(MaWangSee);

function MaWang()
{
  document.getElementsByClassName("RpgStory")[0].style.display = 'none';
  MaWangSee[0].style.display = 'block';
  MaWangStoryBox.style.display = 'block';
  MaWangStoryName.style.display = 'block';
  HatuneCapybara.classList.add('HatuneKaiTen');
  HatuneCapybara.style.
  tMaWangShowText();
}

// MaWangSee[0].addEventListener("click",tMaWangShowText());


const _MaWangStoryText = document.getElementById("MaWangStoryText");
const MaWangStoryText = ['','잠깐!!.','??','너 혹시 하츠네 카피바라를 데리러 왔나?','YesYesYes~','그럼 나와 싸우자!','그래 알겠디~'];

let MaWangIndex = 0;
let MaWangStoryIndex = 0;
let MaWangText;
let MaWangtimer;

function MaWangShowText() 
{
  MaWangText = MaWangStoryText[MaWangStoryIndex];

  console.log(MaWangText);
  document.getElementById("MaWangStoryText").textContent += MaWangStoryText[MaWangStoryIndex].charAt(MaWangIndex);
  MaWangIndex++;
  if (MaWangIndex >= MaWangText.length) 
  {
    clearInterval(MaWangtimer);
  }
}

function tMaWangShowText() 
{
  if (MaWangText == '그래 알겠디~') //스토리 마지막 이벤트 실행
  {
    document.getElementsByClassName("MaWangSee")[0].style.display = 'none';
    characterSword.classList.remove("SwordRightAttack");
    characterSword.classList.remove("SwordLeftAttack");
    characterSword.offsetWidth = characterSword.offsetWidth;
    characterSword.classList.add("StoryAttack");
    return;
  }

  MaWangStoryNameShow();

  if (MaWangStoryIndex >= MaWangStoryText.length-1) return;
  document.getElementById("MaWangStoryText").textContent = "";
  const interval = 100;
  
  MaWangStoryIndex++;
  MaWangIndex = 0;
  MaWangtimer = setInterval((MaWangShowText), interval); 
}


function MaWangStoryNameShow()
{
  if (MaWangStoryIndex%2==0)
  {
    document.getElementById('MaWangStoryName').textContent = '마왕 카피바라';
  }

  else
  {
    document.getElementById('MaWangStoryName').textContent = '카피바라';
  }
}

function sss() //없애도 됨
{
  // document.getElementsByClassName('RPGScreen')[0].add("Jineip");
  // document.getElementById('RPGCharacter').classList.add("Jineip");
  document.getElementsByClassName('GameScreen')[0].classList.add("Jineip");
}