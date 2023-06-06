class RDCapy
{
    constructor(id,text)
    {
        this.id = id;
        this.text = text;
    }
}

const text = document.getElementById('text');

const BabyCapybara = document.getElementById('Baby');
const DriveCapybara = document.getElementById('Drive');
const EkfqoCapybara = document.getElementById('Ekfqo');
const KissCapybara = document.getElementById('Kiss');
const NomalCapybara = document.getElementById('Nomal');
const RidingCapybara = document.getElementById('Riding');
const shangusCapybara = document.getElementById('shangus');

const Baby = new RDCapy(BabyCapybara, 'BabyCapybara')
const Drive = new RDCapy(DriveCapybara, 'DriveCapybara')
const Ekfqo = new RDCapy(EkfqoCapybara, '배달Capybara')
const Kiss = new RDCapy(KissCapybara, 'KissCapybara')
const Nomal = new RDCapy(NomalCapybara, 'NomalCapybara')
const Riding = new RDCapy(RidingCapybara, 'RidingCapybara')
const shangus = new RDCapy(shangusCapybara, '그거');

const RandomCapybaraList = [
    Baby,
    Drive,
    Ekfqo,
    Kiss,
    Nomal,
    Riding,
    shangus
];

const result = RandomCapybaraList[Math.floor(Math.random() * RandomCapybaraList.length)];

result.id.style.display = 'block';
text.textContent = result.text;
