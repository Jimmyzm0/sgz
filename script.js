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

let isButtonClicked = false; // 跟蹤按鈕是否已經被點擊

document.getElementById('blessingButton').addEventListener('click', function() {
    if (!isButtonClicked) {
        const blessing = getRandomBlessing();
        document.getElementById('blessingText').textContent = blessing;
        isButtonClicked = true; // 更新按鈕點擊狀態
        this.disabled = true; // 禁用按鈕
        localStorage.setItem('buttonClicked', 'true'); // 在本地存儲中設置標記
    }
});
checkButtonStatus(); // 在頁面加載時檢查按鈕狀態
