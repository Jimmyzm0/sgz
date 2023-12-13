function getRandomBlessing() {
    const randomIndex = Math.floor(Math.random() * blessings.length);
    return blessings[randomIndex];
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('祝福話術已複製到剪貼板！');
    }).catch(err => {
        alert('複製失敗：', err);
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
