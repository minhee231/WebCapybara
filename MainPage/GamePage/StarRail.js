class CharacterHp
{
    constructor(HP,CharacterIMG)
    {
        this.HP = HP;
        this.Shield = 0;
        this.CharacterIMG = CharacterIMG
    }
    
    TakeShield(ShieldAmount) //쉴드 부여 매서드
    {
        this.Shield += ShieldAmount;
    }

    ReceiveHP(damageAmount) //HP 감소 매서드
    {
        if (this.HP <= 0)
        {
            this.CharacterIMG.style.display = 'none';
        }
        else 
        {
            this.HP -= Math.abs(damageAmount);
        }
    }

    ReceiveShield(damageAmount) //쉴드 감소 매서드
    {
        this.Shield -= damageAmount; 
        if (this.Shield <= 0)
        {
            this.ReceiveHP(this.Shield) // 쉴드 다 까이면 체력 감소
            this.Shield = 0;
        }
    }
}

tjd.addEventListener('animationend', StarRailFight); //꽤나 위에 있어서 이상하지만 변신 장면 끝나면 스타레일로 넘어가는거

const KafkaTrans = document.getElementById('KafkaTrans'); //카프카 변신장면

const StarRail = document.getElementById('StarRail');
const HPbar = document.getElementById('HPbar');
const tjfaud = document.getElementById('tjfaud');

//개척자
const SRTrailblazerCapybara = document.getElementById('SRTrailblazerCapybara');
const TrailblazerCapybaraBody = document.getElementById('TrailblazerCapybaraBody')
const TrailblazerCapybaraHair = document.getElementById('TrailblazerCapybaraHair')
const TrailblazerCapybaraWeapon = document.getElementById('TrailblazerCapybaraWeapon')
const TrailblazerCapybaraHand = document.getElementById('TrailblazerCapybaraHand')
const TrailblazerBasicBT = document.getElementById('TrailblazerBasicBT');
const TrailblazerSkillBT = document.getElementById('TrailblazerSkillBT');

//제레
const SRSeeleCapybara = document.getElementById('SRSeeleCapybara');
const SeeleCapybaraBody = document.getElementById('SeeleCapybaraBody');
const SeeleCapybaraHair = document.getElementById('SeeleCapybaraHair');
const SeeleCapybaraHand = document.getElementById('SeeleCapybaraHand');
const SeeleCapybaraWeapon = document.getElementById('SeeleCapybaraWeapon');
const SeeleBasicBT = document.getElementById('SeeleBasicBT');
const SeeleSkillBT = document.getElementById('SeeleSkillBT');

//단항
const SRDanHengCapybara = document.getElementById('SRDanHengCapybara');
const DanHengCapybaraBody = document.getElementById('DanHengCapybaraBody');
const DanHengCapybaraHair = document.getElementById('DanHengCapybaraHair');
const DanHengCapybaraHand = document.getElementById('DanHengCapybaraHand');
const DanHengCapybaraWeapon = document.getElementById('DanHengCapybaraWeapon');
const DanHengBasicBT = document.getElementById('DanHengBasicBT');
const DanHengSkillBT = document.getElementById('DanHengSkillBT');

//삼칠
const SRMar_7thCapybara = document.getElementById('SRMar_7thCapybara');
const Mar_7thCapybaraBody = document.getElementById('Mar_7thCapybaraBody');
const Mar_7thCapybaraHair = document.getElementById('Mar_7thCapybaraHair');
const Mar_7thCapybaraHand = document.getElementById('Mar_7thCapybaraHand');
const Mar_7thCapybaraWeapon = document.getElementById('Mar_7thCapybaraWeapon');
const Mar_7thBasicBT = document.getElementById('Mar_7thBasicBT');
const Mar_7thSkillBT = document.getElementById('Mar_7thSkillBT');

//카프카
const SRKafkaCapybara = document.getElementById('SRKafkaCapybara');
const KafkaCapybaraBody = document.getElementById('KafkaCapybaraBody');
const KafkaCapybaraHair = document.getElementById('KafkaCapybaraHair');
const KafkaCapybaraWeapon = document.getElementById('KafkaCapybaraWeapon');
const KafkaCapybaraHand = document.getElementById('KafkaCapybaraHand');

//캐릭터 생성
const Kafka = new CharacterHp(1000, SRKafkaCapybara);
const Trailblazer = new CharacterHp(100, SRTrailblazerCapybara);
const Seele = new CharacterHp(100, SRSeeleCapybara);
const DanHeng = new CharacterHp(100, SRDanHengCapybara);
const Mar_7th = new CharacterHp(100, SRMar_7thCapybara);

//쉴드 부여
const MarShield = document.getElementById('MarShield');
const TrailblazerShield = document.getElementById('TrailblazerShield');
const SeeleShield = document.getElementById('SeeleShield');
const DanHengShield = document.getElementById('DanHengShield');
const Mar7thShield = document.getElementById('Mar7thShield');

const Sequence = [Trailblazer,Seele,DanHeng,Mar_7th];

//공격 순서는 척자 -> 제레 -> 단항 -> 삼칠 ) 순서로 진행
//스타레일의 속도까지 구현하기에는 머리가 딸림

let AttackCoolTime = false;
let SKillPoint = 3;

function RemoveAnimation() //뭉탱이 ㅋㅋㅋㅋㅋㅋㅋ
{
    TrailblazerCapybaraBody.classList.remove('TrailblazerBasicAttackBodyHair');
    TrailblazerCapybaraHair.classList.remove('TrailblazerBasicAttackBodyHair');
    TrailblazerCapybaraHand.classList.remove('TrailblazerBasicAttackHand');
    TrailblazerCapybaraWeapon.classList.remove('TrailblazerBasicAttackWeapon');
    TrailblazerCapybaraBody.classList.remove('TrailblazerSkillAttackBodyHair');
    TrailblazerCapybaraHair.classList.remove('TrailblazerSkillAttackBodyHair');
    TrailblazerCapybaraHand.classList.remove('TrailblazerSkillAttackHand');
    TrailblazerCapybaraWeapon.classList.remove('TrailblazerSkillAttackWeapon');
    SeeleCapybaraBody.classList.remove('SeeleBasicAttack_HandBodyHair');
    SeeleCapybaraHair.classList.remove('SeeleBasicAttack_HandBodyHair');
    SeeleCapybaraHand.classList.remove('SeeleBasicAttack_HandBodyHair');
    SeeleCapybaraWeapon.classList.remove('SeeleBasicAttackWeapon');
    SeeleCapybaraBody.classList.remove('SeeleSkillAttack_HandBodyHair');
    SeeleCapybaraHair.classList.remove('SeeleSkillAttack_HandBodyHair');
    SeeleCapybaraHand.classList.remove('SeeleSkillAttack_HandBodyHair');
    SeeleCapybaraWeapon.classList.remove('SeeleSkillAttackWeapon');
    DanHengCapybaraBody.classList.remove('DanHengBasicAttack_HandBodyHair');
    DanHengCapybaraHair.classList.remove('DanHengBasicAttack_HandBodyHair');
    DanHengCapybaraHand.classList.remove('DanHengBasicAttack_HandBodyHair');
    DanHengCapybaraWeapon.classList.remove('DanHengBasicAttackWeapon');
    DanHengCapybaraBody.classList.remove('DanHengSkillAttack_HandBodyHair');
    DanHengCapybaraHair.classList.remove('DanHengSkillAttack_HandBodyHair');
    DanHengCapybaraHand.classList.remove('DanHengSkillAttack_HandBodyHair');
    DanHengCapybaraWeapon.classList.remove('DanHengSkillAttackWeapon');
    Mar_7thCapybaraWeapon.classList.remove('MarBasicAttackWeapon');
    KafkaCapybaraBody.classList.remove('KafkaCapybara_HandBodyHair');
    KafkaCapybaraHair.classList.remove('KafkaCapybara_HandBodyHair');
    KafkaCapybaraHand.classList.remove('KafkaCapybara_HandBodyHair');
    KafkaCapybaraWeapon.classList.remove('KafkaCapybaraWeapon');
}

//개척자 공격=====================================================================
function TrailblazerBasicAttack() 
{
    if (AttackCoolTime) return;
    AttackCoolTime = true;

    RemoveAnimation();
    
    setTimeout(function() {
        Kafka.ReceiveHP(100);
        TrailblazerCapybaraBody.classList.add('TrailblazerBasicAttackBodyHair');
        TrailblazerCapybaraHair.classList.add('TrailblazerBasicAttackBodyHair');
        TrailblazerCapybaraHand.classList.add('TrailblazerBasicAttackHand');
        TrailblazerCapybaraWeapon.classList.add('TrailblazerBasicAttackWeapon');
    }, 10);
}

function TrailblazerSkillAttack() 
{
    if (AttackCoolTime) return;
    AttackCoolTime = true;

    RemoveAnimation();
  
    setTimeout(function() {
        Kafka.ReceiveHP(130);
        TrailblazerCapybaraBody.classList.add('TrailblazerSkillAttackBodyHair');
        TrailblazerCapybaraHair.classList.add('TrailblazerSkillAttackBodyHair');
        TrailblazerCapybaraHand.classList.add('TrailblazerSkillAttackHand');
        TrailblazerCapybaraWeapon.classList.add('TrailblazerSkillAttackWeapon');
 
    }, 10);
}

TrailblazerCapybaraBody.addEventListener('animationend', function(event){
    AttackCoolTime = 
    CallSeele();
    console.log(AttackCoolTime);
});

TrailblazerBasicBT.addEventListener('click', TrailblazerBasicAttack);
TrailblazerSkillBT.addEventListener('click', TrailblazerSkillAttack);

//제레 공격=========================================================================
function SeeleBasicAttack()
{  
    if (AttackCoolTime) return;
    AttackCoolTime = true;

    RemoveAnimation();

    setTimeout(function() {
        Kafka.ReceiveHP(120);
        SeeleCapybaraBody.classList.add('SeeleBasicAttack_HandBodyHair');
        SeeleCapybaraHair.classList.add('SeeleBasicAttack_HandBodyHair');
        SeeleCapybaraHand.classList.add('SeeleBasicAttack_HandBodyHair');
        SeeleCapybaraWeapon.classList.add('SeeleBasicAttackWeapon');
    },10);
}

function SeeleSkillAttack()
{  
    if (AttackCoolTime) return;
    AttackCoolTime = true;

    RemoveAnimation();

    setTimeout(function() {
        Kafka.ReceiveHP(170);
        SeeleCapybaraBody.classList.add('SeeleSkillAttack_HandBodyHair');
        SeeleCapybaraHair.classList.add('SeeleSkillAttack_HandBodyHair');
        SeeleCapybaraHand.classList.add('SeeleSkillAttack_HandBodyHair');
        SeeleCapybaraWeapon.classList.add('SeeleSkillAttackWeapon');
    },10);
}

SeeleCapybaraBody.addEventListener('animationend', function(event){
    AttackCoolTime = false
    CallDanHeng();
    console.log(AttackCoolTime);
});

SeeleBasicBT.addEventListener('click', SeeleBasicAttack);
SeeleSkillBT.addEventListener('click', SeeleSkillAttack);

//단항 공격====================================================
function DanHengBasicAttack()
{
    if (AttackCoolTime) return;
    AttackCoolTime = true;
    RemoveAnimation();

    setTimeout(function(){
        Kafka.ReceiveHP(120);
        DanHengCapybaraBody.classList.add('DanHengBasicAttack_HandBodyHair');
        DanHengCapybaraHair.classList.add('DanHengBasicAttack_HandBodyHair');
        DanHengCapybaraHand.classList.add('DanHengBasicAttack_HandBodyHair');
        DanHengCapybaraWeapon.classList.add('DanHengBasicAttackWeapon');
    },10)
}

function DanHengSkillAttack()
{
    if (AttackCoolTime) return;
    AttackCoolTime = true;
    RemoveAnimation();

    setTimeout(function(){
        Kafka.ReceiveHP(150);
        DanHengCapybaraBody.classList.add('DanHengSkillAttack_HandBodyHair');
        DanHengCapybaraHair.classList.add('DanHengSkillAttack_HandBodyHair');
        DanHengCapybaraHand.classList.add('DanHengSkillAttack_HandBodyHair');
        DanHengCapybaraWeapon.classList.add('DanHengSkillAttackWeapon');
    },10)
}

DanHengCapybaraBody.addEventListener('animationend', function(event){
    AttackCoolTime = false
    CallMar7th();
    console.log(AttackCoolTime);
});

DanHengBasicBT.addEventListener('click' ,DanHengBasicAttack);
DanHengSkillBT.addEventListener('click' ,DanHengSkillAttack);

//삼칠이 공격==========================================================
function Mar_7thBasicAttack()
{
    if (AttackCoolTime) return;
    AttackCoolTime = true;
    Mar_7thCapybaraWeapon.classList.remove('MarBasicAttackWeapon');

    setTimeout(function() {
        Mar_7thCapybaraWeapon.classList.add('MarBasicAttackWeapon');
    },10)
}

//삼칠이 쉴드 주는 스킬
function Mar_7thSkill()
{
    if (AttackCoolTime) return;
    AttackCoolTime = true;

    MarShield.style.display = 'block';
    SRMar_7thCapybara.style.display = 'none';
    SRKafkaCapybara.style.display = 'none';
    tjfaud.style.display = 'block';
}

Mar_7thCapybaraWeapon.addEventListener('animationend', function(event){
    AttackCoolTime = false
    CallKafka();
    console.log(AttackCoolTime);
});

Mar_7thBasicBT.addEventListener('click', Mar_7thBasicAttack);
Mar_7thSkillBT.addEventListener('click', Mar_7thSkill);

//카프카 공격==========================================================
function KafakaAttack()
{

    RemoveAnimation();
    setTimeout(function() {
        KafkaCapybaraBody.classList.add('KafkaCapybara_HandBodyHair');
        KafkaCapybaraHair.classList.add('KafkaCapybara_HandBodyHair');
        KafkaCapybaraHand.classList.add('KafkaCapybara_HandBodyHair');
        KafkaCapybaraWeapon.classList.add('KafkaCapybaraWeapon');

        KafkaRandomAttack();
    }, 10);
}

function KafkaRandomAttack() //카프카의 랜덤 공!격
{
    var RandomCapybara = Sequence[Math.floor(Math.random() * Sequence.length)]
    SRTrailblazerCapybara.style.display = 'none';
    SRSeeleCapybara.style.display = 'none';
    SRDanHengCapybara.style.display = 'none';
    SRMar_7thCapybara.style.display = 'none';
    RandomCapybara.CharacterIMG.style.display = 'block';

    console.log(RandomCapybara);
    RandomCapybara.ReceiveShield(20);
}

KafkaCapybaraBody.addEventListener('animationend', function(event){
    AttackCoolTime = false
    SRTrailblazerCapybara.style.display = 'none';
    SRSeeleCapybara.style.display = 'none';
    SRDanHengCapybara.style.display = 'none';
    SRMar_7thCapybara.style.display = 'none';
    CallTrailblazer();
    console.log(AttackCoolTime);
});

//턴제==========================================
let TrailblazerDeath = false;
let SeeleDeath = false;
let DanHengDeath = false;
let Mar_7thDeath = false;

function StarRailFight()
{
    GameScreen.style.backgroundImage = "url(./StarRail_Image/StarRailBackGround.png";
    KafkaTrans.style.display = 'none';

    StarRail.style.display  = 'block';
    HPbar.style.display = 'block';
    SRTrailblazerCapybara.style.display = 'block';
}

function CallTrailblazer()
{
    Annihilation();
    RemoveAnimation();
    HpUpdate();
    if (Trailblazer.HP <= 0)
    {
        TrailblazerDeath = true;
        CallSeele();

        return;
    }
    SRMar_7thCapybara.style.display = 'none';
    SRTrailblazerCapybara.style.display = 'block';
}

function CallSeele()
{
    HpUpdate();
    Annihilation();
    KafkaDeath();
    RemoveAnimation();
    if (Seele.HP <= 0)
    {
        SeeleDeath = true;
        CallDanHeng();

        return;
    }
    SRTrailblazerCapybara.style.display = 'none';
    SRSeeleCapybara.style.display = 'block';
}

function CallDanHeng()
{
    HpUpdate();
    Annihilation();
    KafkaDeath();
    RemoveAnimation();
    if (DanHeng.HP <= 0)
    {
        DanHengDeath = true;
        CallMar7th();

        return;
    }
    SRSeeleCapybara.style.display = 'none';
    SRDanHengCapybara.style.display = 'block';
}

function CallMar7th()
{
    HpUpdate();
    Annihilation();
    KafkaDeath();
    RemoveAnimation();
    if (Mar_7th.HP <= 0)
    {
        Mar_7thDeath = true;
        CallKafka();

        return;
    }
    SRDanHengCapybara.style.display = 'none';
    SRMar_7thCapybara.style.display = 'block';
}

function CallKafka()
{
    HpUpdate();
    RemoveAnimation();
    Annihilation();
    KafkaDeath();
    SRKafkaCapybara.style.display = 'block';
    KafakaAttack();
}

//쉴드 부여~ 
TrailblazerShield.addEventListener('click', function(){
    MarShield.style.display = 'none';
    tjfaud.style.display = 'none';
    Trailblazer.Shield += 30;
    CallKafka();
})

SeeleShield.addEventListener('click', function(){
    MarShield.style.display = 'none';
    tjfaud.style.display = 'none';
    Seele.Shield += 30;
    CallKafka();
})

DanHengShield.addEventListener('click', function(){
    MarShield.style.display = 'none';
    tjfaud.style.display = 'none';
    DanHeng.Shield += 30;
    CallKafka();
})

Mar7thShield.addEventListener('click', function(){
    MarShield.style.display = 'none';
    tjfaud.style.display = 'none';
    Mar_7th.Shield += 30;
    CallKafka();
})

//전멸 이벤트
function Annihilation()
{
    if (TrailblazerDeath && SeeleDeath && DanHengDeath && Mar_7thDeath )
    {
        //대충 카프카가 척자 묶는 짤 띄우기
        //이제 하츠네 카피바라와 함께네? 라는 대사 띄우기



        return;
    }
}

function KafkaDeath()
{
    if (Kafka.HP <= 0)
    {
        //대충 척자가 카프카 먹는 짤
        //죽기 직전에 사실 너는 내 유전자의 1/4 꺼드럭 꺼드럭 그 다음에 짤 띄우셈
        console.log("카프카 뒤짐");
        RemoveAnimation();
        KafkaCapybaraBody.classList.add('KafkaDeath');
        KafkaCapybaraHair.classList.add('KafkaDeath');
        KafkaCapybaraHand.classList.add('KafkaDeath');
        KafkaHPbar.classList.add('KafkaDeath');
        KafkaCapybaraWeapon.style.display = 'none';
        return;
    }
}

//체력바 표시
const TrailblazerHPbar = document.getElementById('TrailblazerHPbar');
const SeeleHPbar = document.getElementById('SeeleHPbar');
const DanHengHPbar = document.getElementById('DanHengHPbar');
const Mar7thHPbar = document.getElementById('Mar7thHPbar');
const KafkaHPbar = document.getElementById('KafkaHPbar');

function HpUpdate()
{
    TrailblazerHPbar.style.background = `linear-gradient(to right, #0f0 ${(Trailblazer.HP / 100) * 100}%, red 0%)`;
    SeeleHPbar.style.background = `linear-gradient(to right, #0f0 ${(Seele.HP / 100) * 100}%, red 0%)`;
    DanHengHPbar.style.background = `linear-gradient(to right, #0f0 ${(DanHeng.HP / 100) * 100}%, red 0%)`;
    Mar7thHPbar.style.background = `linear-gradient(to right, #0f0 ${(Mar_7th.HP / 100) * 100}%, red 0%)`;
    KafkaHPbar.style.background = `linear-gradient(to right, #0f0 ${(Kafka.HP / 1000) * 100}%, red 0%)`;
    console.log(Kafka);
}


//마지막 스토리
const EndingStory = document.getElementById('EndingStory');
const EndingStoryText = document.getElementById('EndingStoryText');
const EndingStoryName = document.getElementById('EndingStoryName');
const EndingStoryVal = ['','엄마 이제 영원히 함께예요...','응...']

let EndingStoryTextIndex = 0;
let EndingStoryIndex = 0;
let EndingText;
let EndingTimer;

function EndingStoryShowText() 
{
    EndingText = EndingStoryVal[EndingStoryIndex];

    EndingStoryText.textContent += EndingStoryVal[EndingStoryIndex].charAt(EndingStoryTextIndex);
  EndingStoryTextIndex++;
  if (EndingStoryTextIndex >= EndingText.length) 
  {
    clearInterval(EndingTimer);
  }
}

function tEndingStoryShowText() 
{
    if (EndingText == '응...')
    {
        EndingStory.style.display = 'none';
    }

  EndingStoryNameShow(); //이름 바꾸는 함수

  if (EndingStoryIndex >= EndingStoryVal.length-1) return;
  EndingStoryText.textContent = "";
  const interval = 100;
  
  EndingStoryIndex++;
  EndingStoryTextIndex = 0;
  EndingTimer = setInterval((EndingStoryShowText), interval); 
}


function EndingStoryNameShow()
{
  MaWangAttackStoryText.textContent = '';

  if (EndingStoryIndex == 1)
  {
    EndingStoryName.textContent = '카프카';
  }

}


//카프카 뒤지면~
KafkaCapybaraBody.addEventListener('animationend',function(event) {
    if (event.animationName === 'KafkaDeath')
    {
        StarRail.style.display = 'none';
        HPbar.style.display = 'none';
        GameScreen.style.backgroundImage = "url(./StarRail_Image/KafkaBackground.png";
        GameScreen.style.backgroundSize = 'cover';
        EndingStory.style.display = 'block';
        document.getElementById('EasterEgg').style.display = 'block';
    }
});