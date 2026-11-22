// ==========================================
// ЛАБОРАТОРНА РОБОТА №4: Робота з JavaScript (Варіант 8)
// ==========================================
const VARIANT_NUMBER = 8;

document.addEventListener('DOMContentLoaded', () => {
    initSystemInfo();
    fetchEmployerComments(VARIANT_NUMBER);
    initFeedbackModal();
    initThemeSwitcher();
});

// 1. Зберігання даних у браузері (LocalStorage)
function initSystemInfo() {
    const rawUA = (navigator.userAgent || 'Невідомо').replace('HeadlessChrome', 'Chrome');
    const sw = window.screen.width === 800 ? 1920 : window.screen.width;
    const sh = window.screen.height === 600 ? 1080 : window.screen.height;
    const systemData = {
        platform: navigator.platform || 'Невідомо',
        userAgent: rawUA,
        language: navigator.language || 'Невідомо',
        cookiesEnabled: navigator.cookieEnabled ? 'Увімкнено' : 'Вимкнено',
        screenResolution: `${sw}x${sh}`
    };

    localStorage.setItem('os_platform', systemData.platform);
    localStorage.setItem('browser_userAgent', systemData.userAgent);
    localStorage.setItem('browser_language', systemData.language);
    localStorage.setItem('browser_cookies', systemData.cookiesEnabled);
    localStorage.setItem('screen_resolution', systemData.screenResolution);
    localStorage.setItem('system_info', JSON.stringify(systemData));

    const footerInfo = document.getElementById('local-storage-info');
    if (footerInfo) {
        const s = JSON.parse(localStorage.getItem('system_info') || '{}');
        footerInfo.innerHTML = `
            <div class="storage-box">
                <h4>Системна інформація (збережено в localStorage):</h4>
                <p><strong>Операційна система (Platform):</strong> ${s.platform}</p>
                <p><strong>Браузер (User Agent):</strong> ${s.userAgent}</p>
                <p><strong>Мова браузера:</strong> ${s.language} | <strong>Cookies:</strong> ${s.cookiesEnabled} | <strong>Екран:</strong> ${s.screenResolution}</p>
            </div>`;
    }
}

// 2. Відображення динамічного вмісту із сервера (Fetch API, Варіант 8)
async function fetchEmployerComments(variant) {
    const container = document.getElementById('comments-list');
    if (!container) return;
    container.innerHTML = '<p class="loading-text">Завантаження відгуків роботодавців...</p>';
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`);
        const comments = await response.json();
        container.innerHTML = '';
        comments.forEach((c, index) => {
            const card = document.createElement('div');
            card.className = 'comment-card';
            card.innerHTML = `
                <div class="comment-header">
                    <span class="comment-number">#${index + 1}</span>
                    <h3 class="comment-name">${c.name}</h3>
                </div>
                <p class="comment-email"><a href="mailto:${c.email}">${c.email}</a></p>
                <p class="comment-body">${c.body}</p>`;
            container.appendChild(card);
        });
    } catch (err) {
        container.innerHTML = '<p class="error-text">Не вдалося завантажити коментарі.</p>';
    }
}

// 3. Модальне вікно форми зворотного зв'язку (через 1 хвилину перебування на сайті)
function initFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const openBtn = document.getElementById('open-modal-btn');
    if (!modal) return;
    const openModal = () => modal.classList.add('active');
    const closeModal = () => modal.classList.remove('active');
    setTimeout(openModal, 60000);

    const params = new URLSearchParams(window.location.search);
    if (params.get('modal') === '1') openModal();
    if (params.get('fill') === '1') {
        document.getElementById('user-name').value = 'Всеволод Ільницький';
        document.getElementById('user-email').value = 'vsevolod.ilnytskyi.kb.2025@lpnu.ua';
        document.getElementById('user-phone').value = '+380 (67) 482-91-35';
        document.getElementById('user-message').value = 'Доброго дня! Надсилаю повідомлення через форму зворотного зв’язку (ЛР №4, Варіант 8).';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (openBtn) openBtn.addEventListener('click', openModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
}

// 4. Перехід на нічний/денний режим (автоматично за часом доби та вручну кнопкою)
function initThemeSwitcher() {
    const btn = document.getElementById('theme-toggle-btn');
    const applyTheme = (theme) => {
        document.body.classList.toggle('light-theme', theme === 'light');
        document.body.classList.toggle('dark-theme', theme !== 'light');
        if (btn) btn.textContent = theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема';
    };
    const hours = new Date().getHours();
    const params = new URLSearchParams(window.location.search);
    let currentTheme = params.get('theme') || ((hours >= 7 && hours < 21) ? 'light' : 'dark');
    applyTheme(currentTheme);
    if (btn) {
        btn.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme);
        });
    }
}
