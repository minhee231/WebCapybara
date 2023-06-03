Heart.addEventListener('animationend', StarRailFight);

const CapybaraTrans = document.getElementById('CapybaraTrans');
function StarRailFight()
{
    GameScreen.style.backgroundImage = "url(./StarRail_Image/StarRailBackGround.png";
    CapybaraTrans.style.display = 'none';
}
