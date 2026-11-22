function Header({ theme, onToggleTheme }) {
  return (
    <header className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 text-center shadow-lg rounded-b-xl max-w-4xl mx-auto mb-4">
      <div className="flex justify-end mb-3">
        <button
          type="button"
          onClick={onToggleTheme}
          className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100 hover:bg-sky-500 hover:text-white border border-slate-300 dark:border-slate-600 cursor-pointer"
        >
          {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
        </button>
      </div>

      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-wide mb-2">
        Всеволод Ільницький
      </h1>
      <p className="text-xl text-sky-600 dark:text-sky-400 font-medium mb-4">
        Студент 2 курсу НУ «Львівська політехніка», спеціальність «Кібербезпека», м. Львів
      </p>

      <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
        <a href="#about" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Про себе</a>
        <a href="#experience" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Досвід</a>
        <a href="#education" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Освіта</a>
        <a href="#skills" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Навички</a>
        <a href="#reviews" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Відгуки</a>
      </nav>
    </header>
  );
}

export default Header;
