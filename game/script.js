let heart = document.getElementById('heart');
let basket = document.getElementById('basket');
let scoreDisplay = document.getElementById('score');
let gameOverDisplay = document.getElementById('gameOver');
let messageText = document.getElementById('messageText');
let messageImage = document.getElementById('messageImage');
let nextLevelBtn = document.getElementById('nextLevelBtn');
let gameContainer = document.querySelector('.game-container');
let score = 0;
let heartFallingInterval;

function startGame() {
    heart.style.top = '0';
    heart.style.left = '50%';
    score = 0;
    scoreDisplay.textContent = score;
    gameOverDisplay.style.display = 'none';
    nextLevelBtn.style.display = 'none';
    heartFallingInterval = setInterval(heartFall, 20);
}

function heartFall() {
    let heartTop = parseInt(window.getComputedStyle(heart).getPropertyValue('top'));
    heart.style.top = heartTop + 5 + 'px';

    let heartLeft = parseInt(window.getComputedStyle(heart).getPropertyValue('left'));
    let basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));

    if (heartTop > 550) {
        if (heartLeft > basketLeft && heartLeft < basketLeft + 80) {
            score++;
            scoreDisplay.textContent = score;
            heart.style.top = '0';
            heart.style.left = Math.random() * 360 + 'px';
            if (score >= 10) {
                winGame();
            }
        } else {
            gameOver();
        }
    }
}

function gameOver() {
    clearInterval(heartFallingInterval);
    messageText.textContent = 'Chúc em may mắn lần sauu!';
    messageImage.src = 'lose.jpg'; // Thay thế bằng đường dẫn đến ảnh bạn muốn sử dụng
    gameOverDisplay.style.display = 'block';
}

function winGame() {
    clearInterval(heartFallingInterval);
    messageText.textContent = 'You Win!!! Phần thưởng là 10000 trái tym trân thành đến từ tuiii';
    messageImage.src = 'win.jpg'; // Thay thế bằng đường dẫn đến ảnh bạn muốn sử dụng
    gameOverDisplay.style.display = 'block';
    nextLevelBtn.style.display = 'inline-block'; // Hiển thị nút khi thắng
}

nextLevelBtn.addEventListener('click', () => {
    window.location.href = 'shop.jpg'; // Thay thế bằng đường dẫn của bạn
});

document.addEventListener('mousemove', (e) => {
    let containerRect = gameContainer.getBoundingClientRect();
    let basketLeft = e.clientX - containerRect.left - basket.offsetWidth / 2;

    if (basketLeft >= 0 && basketLeft <= 320) {
        basket.style.left = basketLeft + 'px';
    }
});

startGame();
