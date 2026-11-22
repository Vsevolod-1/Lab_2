import { useEffect, useState } from 'react';

function ContactForm() {
  const params = new URLSearchParams(window.location.search);
  const [isOpen, setIsOpen] = useState(params.get('modal') === '1');
  const isFilled = params.get('fill') === '1';

  useEffect(() => {
    // Відкриваємо модальне вікно через 1 хвилину (60 000 мс) перебування на сайті
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const inp = "w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white";
  const lbl = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4" onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}>
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Форма зворотного зв'язку</h2>
          <button type="button" onClick={() => setIsOpen(false)} className="text-slate-500 dark:text-slate-400 text-sm font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 cursor-pointer">
            Закрити ✕
          </button>
        </div>
        <form action="https://formspree.io/f/xvzwqpnk" method="POST" className="space-y-4 text-left">
          <div>
            <label htmlFor="react-name" className={lbl}>Ім’я</label>
            <input id="react-name" type="text" name="name" required defaultValue={isFilled ? 'Всеволод Ільницький' : ''} placeholder="Введіть ваше ім’я" className={inp} />
          </div>
          <div>
            <label htmlFor="react-email" className={lbl}>Email</label>
            <input id="react-email" type="email" name="email" required defaultValue={isFilled ? 'vsevolod.ilnytskyi.kb.2025@lpnu.ua' : ''} placeholder="example@mail.com" className={inp} />
          </div>
          <div>
            <label htmlFor="react-phone" className={lbl}>Номер телефону</label>
            <input id="react-phone" type="tel" name="phone" required defaultValue={isFilled ? '+380 (67) 482-91-35' : ''} placeholder="+380 (XX) XXX-XX-XX" className={inp} />
          </div>
          <div>
            <label htmlFor="react-message" className={lbl}>Повідомлення</label>
            <textarea id="react-message" name="message" rows="4" required defaultValue={isFilled ? 'Вітаю! Надсилаю форму зворотного зв’язку (Варіант 8).' : ''} placeholder="Текст у довільній формі..." className={inp} />
          </div>
          <button type="submit" className="w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md cursor-pointer">Надіслати</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
