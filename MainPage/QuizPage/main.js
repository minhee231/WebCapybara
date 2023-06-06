const QZ1_no = document.getElementById('QZ1_no');
const QZ1_Yes = document.getElementById('QZ1_Yes');
const QZ1 = document.getElementById('QZ1');
const Quiz1YesIMG = document.getElementById('Quiz1YesIMG');

let QZ1_ButtonCount = 0;
function Quiz1NoButton()
{

    if (QZ1_ButtonCount == 0)
    {
        QZ1_no.style.left = '1300px';
        QZ1_no.style.top = '0px';
        QZ1_ButtonCount++;
    }
    
    else if (QZ1_ButtonCount == 1)
    {
        QZ1_no.style.left = '300px';
        QZ1_no.style.top = '300px';
        QZ1_ButtonCount++;
    }

    else if (QZ1_ButtonCount == 2)
    {
        QZ1_no.style.left = '1200px';
        QZ1_no.style.top = '800px';
        QZ1_ButtonCount++;
    }

    else if (QZ1_ButtonCount == 3)
    {
        QZ1_no.style.left = '900px';
        QZ1_no.style.top = '400px';
        QZ1_ButtonCount++;
    }

    else if (QZ1_ButtonCount == 4)
    {
        QZ1_no.style.left = '600px';
        QZ1_no.style.top = '700px';
        QZ1_ButtonCount = 0;
    }
}

function Quiz1YesButton()
{
    QZ1.textContent = 'YesYesYes Capybara is very cute';
    Quiz1YesIMG.style.display = 'block';
    QZ1_Yes.style.display = 'none';
    QZ1_no.style.display = 'none';
}