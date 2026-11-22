import { useEffect, useState } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: '',
    platform: '',
    language: '',
  });

  useEffect(() => {
    // Зчитуємо navigator.userAgent та navigator.platform при монтуванні
    const userAgent = (navigator.userAgent || 'Невідомо').replace('HeadlessChrome', 'Chrome');
    const platform = navigator.platform || 'Невідомо';
    const language = navigator.language || 'Невідомо';

    // Зберігаємо дані в localStorage всередині ефекту
    localStorage.setItem('userAgent', userAgent);
    localStorage.setItem('platform', platform);
    localStorage.setItem('language', language);

    // Отримуємо дані з localStorage та оновлюємо стан для відображення у JSX
    setSystemInfo({
      userAgent: localStorage.getItem('userAgent') || '',
      platform: localStorage.getItem('platform') || '',
      language: localStorage.getItem('language') || '',
    });
  }, []);

  return (
    <footer className="max-w-4xl mx-auto px-4 py-6 text-center text-slate-600 dark:text-slate-400 text-sm border-t border-slate-300 dark:border-slate-800 mt-12 space-y-4">
      <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-left shadow-sm">
        <h4 className="font-semibold text-sky-600 dark:text-sky-400 mb-2">Системна інформація (з localStorage):</h4>
        <p className="text-xs sm:text-sm break-words">
          <span className="font-semibold text-slate-700 dark:text-slate-200">Операційна система (Platform):</span> {systemInfo.platform}
        </p>
        <p className="text-xs sm:text-sm break-words mt-1">
          <span className="font-semibold text-slate-700 dark:text-slate-200">Браузер (User Agent):</span> {systemInfo.userAgent}
        </p>
        <p className="text-xs sm:text-sm mt-1">
          <span className="font-semibold text-slate-700 dark:text-slate-200">Мова:</span> {systemInfo.language}
        </p>
      </div>
      <p>© 2026 Всеволод Ільницький. Всі права захищені.</p>
    </footer>
  );
}

export default Footer;
