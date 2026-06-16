const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Пайдаланушы атын көрсету
const user = tg.initDataUnsafe?.user;
if (user) {
  document.getElementById('username').textContent = 
    `Сәлем, ${user.first_name}! 👋`;
} else {
  document.getElementById('username').textContent = 
    'HoReCa қауымдастығына қош келдіңіз! 🍽️';
}

// Түймелер
const buttons = document.querySelectorAll('.card');

buttons[0].addEventListener('click', () => {
  tg.showAlert('📋 Жаңалықтар бөлімі жақында ашылады!');
});

buttons[1].addEventListener('click', () => {
  tg.showAlert('👥 Мүшелер тізімі жақында қосылады!');
});

buttons[2].addEventListener('click', () => {
  tg.showAlert('📅 Іс-шаралар күнтізбесі жақында!');
});

buttons[3].addEventListener('click', () => {
  tg.showAlert('💬 Байланыс үшін: @HoReCacommunity_bot');
});