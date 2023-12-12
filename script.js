const blessings = [
    "祝您聖誕快樂，新年進步！",
    "願您的聖誕充滿溫馨、快樂、和平！",
    "希望聖誕老人給您帶來滿滿的幸福和笑容！",
    "在這個美好的節日裏，願您的每一天都閃耀著快樂的光芒！"
];

function getRandomBlessing() {
    const randomIndex = Math.floor(Math.random() * blessings.length);
    return blessings[randomIndex];
}

function checkButtonStatus() {
    const buttonClicked = localStorage.getItem('buttonClicked');
    if (buttonClicked === 'true') {
        const button = document.getElementById('blessingButton');
        button.disabled = true;
    }
}

let isButtonClicked = false;

document.getElementById('blessingButton').addEventListener('click', function() {
    if (!isButtonClicked) {
        const blessing = getRandomBlessing();
        document.getElementById('blessingText').textContent = blessing;
        isButtonClicked = true;
        this.disabled = true;
        localStorage.setItem('buttonClicked', 'true');
    }
});

checkButtonStatus();
