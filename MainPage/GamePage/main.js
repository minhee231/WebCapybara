function delay(time, callback) 
{
  setTimeout(callback, time*1000);
}
//================================================================
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
// const RPGScreen = document.getElementsByClassName('RPGScreen')[0];
const RPGScreen = document.getElementById('RPGScreen');
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

function handleKeyDown(event) //캐릭터 움직이는 함수
{
  const step = 10;
  const key = event.key;

  if (event.code == "Space")
  {
    MoveRightSword();
    MoveLeftSword();
  }

  if (RpgCharacterMoveX == 760)
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
const CapybaraStory = document.getElementById('CapybaraStory');

function showText() 
{
  text = StoryText[StoryIndex];

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
    // document.getElementsByClassName("RpgStory")[0].style.display = 'none';
    CapybaraStory.style.display = 'none';
    StoryCheck = true;
    return;
  }

  if (StoryIndex >= StoryText.length-1) return;
  document.getElementById("StoryText").textContent = "";
  const interval = 100;
  
  StoryIndex++;
  index = 0;
  timer = setInterval((showText), interval); 
}

// const MaWangSee = document.getElementsByClassName("MaWangSee");
const MaWangSee = document.getElementById("MaWangSee");
const MaWangStoryBox = document.getElementById("MaWangStoryBox");
const StoryBox = document.getElementById("StoryBox");
const MaWangStoryName = document.getElementById('MaWangStoryName');
const HatuneCapybara = document.getElementById('HatuneCapybara')
const HatuneGravityEffect = document.getElementById('GravityEffect');
const HatuneHand = document.getElementById('HatuneHand');
const MaWangAttack = document.getElementById('MaWangAttack');


function MaWang() //마왕에게 가까워졌을 때 이벤트
{
  CapybaraStory.style.display = 'none';
  MaWangSee.style.display = 'block';
  HatuneCapybara.classList.add('HatuneKaiTen');
  HatuneCapybara.style.left = '1000px';
  HatuneCapybara.style.top = '-200px'
  tMaWangShowText();
}

characterSword.addEventListener('animationend', function(event) {
  if (event.animationName === 'StoryAttack')
  {
    HatuneGravityEvent();
  }
});

function HatuneGravityEvent()
{
  HatuneHand.style.display = 'block';
  HatuneGravityEffect.style.display = 'block';
  HatuneCapybara.classList.remove('HatuneKaiTen');
  HatuneCapybara.classList.add('HatuneFastKaiTen');
  HatuneCapybara.style.left = '850px';
  HatuneCapybara.style.top = '50px';
  // document.getElementsByClassName('MaWangAttack')[0].style.display = 'block';
  MaWangAttack.style.display = 'block';

  tMW_AttackShowText();
}

//마왕 조우 했을 때 대사 띄우는 거
const _MaWangStoryText = document.getElementById("MaWangStoryText");
const MaWangStoryText = ['','잠깐!!','??','너 혹시 하츠네 카피바라를 데리러 왔나?','YesYesYes~','그럼 나와 싸우자!','그래 알겠디~'];

let MaWangIndex = 0;
let MaWangStoryIndex = 0;
let MaWangText;
let MaWangtimer;

function MaWangShowText() 
{
  MaWangText = MaWangStoryText[MaWangStoryIndex];

  document.getElementById("MaWangStoryText").textContent += MaWangStoryText[MaWangStoryIndex].charAt(MaWangIndex);
  MaWangIndex++;
  if (MaWangIndex >= MaWangText.length) 
  {
    clearInterval(MaWangtimer);
  }
}

function tMaWangShowText() //마지막 대사
{
  if (MaWangText == '그래 알겠디~')
  {
    MaWangSee.style.display = 'none';
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


//마왕이 공격 받아치는 이벤트 후 대사
const MaWangAttackName = document.getElementById('MaWangAttackName');
const _MaWangAttackStoryText = document.getElementById("MaWangAttackText");
const MaWangAttackStoryText = ['','으아아아아아악!','하...하츠네 카피바라!!!!','크하하하하하','평범한 카피바라는 아무것도 할 수 없지','그렇다면!!!!'];

let MW_AttackIndex = 0;
let MW_AttackStoryIndex = 0;
let MW_AttackText;
let MW_AttackTimer;

function MW_AttackShowText() 
{
  MW_AttackText = MaWangAttackStoryText[MW_AttackStoryIndex];

  _MaWangAttackStoryText.textContent += MaWangAttackStoryText[MW_AttackStoryIndex].charAt(MW_AttackIndex);
  MW_AttackIndex++;
  if (MW_AttackIndex >= MW_AttackText.length) 
  {
    clearInterval(MW_AttackTimer);
  }
}

function tMW_AttackShowText() 
{
  if (MW_AttackText == '그렇다면!!!!') //스토리 마지막 이벤트 실행
  {
    MaWangAttack.style.display = 'none'
    RPGScreen.style.display = 'none';
    CapybaraTransFormBack();

    
    return;
  }

  MW_AttackNameShow(); //이름 바꾸는 함수

  if (MW_AttackStoryIndex >= MaWangAttackStoryText.length-1) return;
  _MaWangAttackStoryText.textContent = "";
  const interval = 100;
  
  MW_AttackStoryIndex++;
  MW_AttackIndex = 0;
  MW_AttackTimer = setInterval((MW_AttackShowText), interval); 
}


function MW_AttackNameShow()
{
  MaWangAttackStoryText.textContent = '';

  if (MW_AttackStoryIndex == 1 || MW_AttackStoryIndex == 4)
  {
    MaWangAttackName.textContent = '카피바라';
  }
  else if (MW_AttackStoryIndex == 2 || MW_AttackStoryIndex == 3)
  {
    MaWangAttackName.textContent = '마왕 카피바라';
  }
}

//변신 장면 백그라운드 애니메이션
let CapybaraTransFormBackground = -100;
const CapybaraTransFormCooltime = 0.7;

const CapybaraTrans = document.getElementById('CapybaraTrans');
const TrailblazerCapybara = document.getElementById('TrailblazerCapybara');
const TrailblazerHair = document.getElementById('TrailblazerHair');
const TrailblazerWeapon = document.getElementById('TrailblazerWeapon');
const qus = document.getElementById('qus');
const tls = document.getElementById('tls');


const KafkaKingCapybara = document.getElementById('KafkaKingCapybara');
const ExclamationMark = document.getElementById('ExclamationMark');


function CapybaraTransFormBack()
{
  GameScreen.style.background = `linear-gradient(to right, #FFB6CD ${CapybaraTransFormBackground}%, #FFDDCD 100%)`;
  CapybaraTransFormBackground += 0.5;
  
  if (CapybaraTransFormBackground <= 100)
  {
    setTimeout(CapybaraTransFormBack, CapybaraTransFormCooltime);
  }
  else
  {
    document.getElementById('TrailblazerCapybara').style.display = 'block';
    document.getElementById('GlitterEffect').style.display = 'block';
  }
}

function tCapybaraTransFormBack() 
{
  setTimeout(CapybaraTransFormBack, CapybaraTransFormCooltime);
}

function skip() //없애도 되는 함수 그냥 내가 볼려고 짠 함수임
{
  document.getElementById('TrailblazerCapybara').style.display = 'block';
  document.getElementById('GlitterEffect').style.display = 'block';
}

//개척자 카피바라 요소 하나씩 등장
TrailblazerCapybara.addEventListener('animationend', function(event) {
  TrailblazerHair.style.display = 'block';
});

TrailblazerHair.addEventListener('animationend', function(event) {
  TrailblazerWeapon.style.display = 'block';
});

TrailblazerWeapon.addEventListener('animationend', function(event) {
  qus.style.display = 'block';
});

qus.addEventListener('animationend', function(event) {
  tls.style.display = 'block';
});

tls.addEventListener('animationend', function(event) {
  KafkaKingCapybara.style.display = 'block';
});

KafkaKingCapybara.addEventListener('animationend', function(event) {
  ExclamationMark.style.display = 'block';
});

ExclamationMark.addEventListener('animationend', tKafkaCapybaraTransFormBack);


let KafkaBackground = -100;
// const KafkaBG_Cooltime = 0.7

const KafkaCapybara = document.getElementById('KafkaCapybara');
const KafkaHair= document.getElementById('KafkaHair');
const KafkaWeapon = document.getElementById('KafkaWeapon');
const ShockCapybara = document.getElementById('ShockCapybara');
const rkr = document.getElementById('rkr');
const tjd = document.getElementById('tjd');
function KafkaCapybaraTransFormBack()
{
  GameScreen.style.background = `linear-gradient(to left, #594ACE ${KafkaBackground}%, #251E54 100%)`;
  KafkaBackground += 0.5;
  
  if (KafkaBackground <= 100)
  {
    setTimeout(KafkaCapybaraTransFormBack, CapybaraTransFormCooltime);
  }
  else
  {
    //배경 다 채워지면 객체 보이게 하는거~
    KafkaCapybara.style.display = 'block';
    KafkaHair.style.display = 'block';
    KafkaWeapon.style.display = 'block';
  }
}

function tKafkaCapybaraTransFormBack() 
{
  CapybaraTrans.style.display = 'none';
  ShockCapybara.style.display = 'none';
  setTimeout(KafkaCapybaraTransFormBack, CapybaraTransFormCooltime);
}

KafkaWeapon.addEventListener('animationend', function(event) {
  rkr.style.display = 'block';
});

KafkaWeapon.addEventListener('animationend', function(event) {
  tjd.style.display = 'block';
});
