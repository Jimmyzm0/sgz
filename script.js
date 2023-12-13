const blessings = [
    "祝您聖誕快樂，新年進步！",
    "願您的聖誕充滿溫馨、快樂、和平！",
    "希望聖誕老人給您帶來滿滿的幸福和笑容！",
    "在這個聖誕佳節，願你和你的家人充滿愛和和平，並分享幸福的時刻！",
    "願這個聖誕季節為你帶來喜悅，讓你的心充滿感恩之情，並讓你的希望得以實現！",
    "在這個特別的日子，願你找到一份快樂，一份平安，以及一份為所愛之人的關懷！",
    "聖誕快樂！願這個節日為你帶來喜悅，並將你的心充滿愛與祝福！",
    "願你在這個聖誕節中找到喜悅，並與家人和朋友一同分享這份喜悅！",
    "聖誕快樂！願你的聖誕節充滿了祝福，並為你帶來健康和幸福！",
    "願這個聖誕季節為你打開新的可能性，並帶來成功和順遂！",
    "聖誕快樂！願這個節日充滿愛，並為你的未來帶來繁榮和幸福！",
    "在這個特別的日子，願你感受到上天的祝福，並與所愛之人共度美好時光！",
    "聖誕節是分享的季節，願你在這個節日中分享愛和溫暖！",
    "在這個寒冷的冬日，願你找到溫暖，並與親人共度美好時光！",
    "在這個美好的節日裏，願您的每一天都閃耀著快樂的光芒！"
];

function getRandomBlessing() {
    const randomIndex = Math.floor(Math.random() * blessings.length);
    return blessings[randomIndex];
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const confirmation = document.getElementById('copyConfirmation');
        confirmation.style.display = 'block'; // 顯示提示
        setTimeout(() => { confirmation.style.display = 'none'; }, 3000); // 3秒後隱藏提示
    }).catch(err => {
        // 處理複製失敗的情況
        console.error('複製失敗：', err);
    });
}

document.getElementById('blessingButton').addEventListener('click', function() {
    const blessing = getRandomBlessing();
    document.getElementById('blessingText').textContent = blessing;
    localStorage.setItem('blessingText', blessing);
    localStorage.setItem('buttonClicked', 'true');
    // 點擊後自動複製祝福語並禁用按鈕
    copyToClipboard(blessing);
    this.disabled = true;
});

function checkButtonStatus() {
    const buttonClicked = localStorage.getItem('buttonClicked');
    if (buttonClicked === 'true') {
        const button = document.getElementById('blessingButton');
        button.disabled = true;
        const storedBlessing = localStorage.getItem('blessingText');
        if (storedBlessing) {
            document.getElementById('blessingText').textContent = storedBlessing;
        }
    }
}

checkButtonStatus();
