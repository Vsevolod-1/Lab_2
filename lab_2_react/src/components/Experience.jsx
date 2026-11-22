function Experience() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Про себе */}
      <section id="about" className="bg-white dark:bg-slate-800/80 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-md hover:border-sky-500/50 transition-all">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-sky-500 pl-3">Про себе</h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Навчаюся у Львівській політехніці за спеціальністю «Кібербезпека». Цікавлюся захистом інформації, мережевою безпекою та вебтехнологіями. Прагну здобути практичний досвід у сфері інформаційної безпеки та розробки.
        </p>
      </section>

      {/* Досвід */}
      <section id="experience" className="bg-white dark:bg-slate-800/80 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-md hover:border-sky-500/50 transition-all">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-sky-500 pl-3">Досвід</h2>
        <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-300">Навчальні та особисті проєкти</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">2025 — теперішній час</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
          <li>Налаштування віртуальної лабораторії на Linux для вивчення основ адміністрування та мережевої безпеки.</li>
          <li>Аналіз мережевого трафіку за допомогою Wireshark в межах навчальних завдань.</li>
          <li>Створення вебсторінок на HTML та React, ведення проєктів у Git.</li>
        </ul>
      </section>

      {/* Освіта */}
      <section id="education" className="bg-white dark:bg-slate-800/80 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-md hover:border-sky-500/50 transition-all">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-sky-500 pl-3">Освіта</h2>
        <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-300">Національний університет «Львівська політехніка»</h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Кафедра ІКТА, спеціальність «Кібербезпека», бакалаврат, 2025 — теперішній час</p>
      </section>

      {/* Навички */}
      <section id="skills" className="bg-white dark:bg-slate-800/80 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-md hover:border-sky-500/50 transition-all">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-sky-500 pl-3">Навички</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-slate-100 dark:bg-slate-700/50 p-3 rounded-lg text-center font-medium text-slate-800 dark:text-slate-200 hover:scale-105 hover:bg-sky-600 hover:text-white transition-all cursor-default">
            Python & C#
          </div>
          <div className="bg-slate-100 dark:bg-slate-700/50 p-3 rounded-lg text-center font-medium text-slate-800 dark:text-slate-200 hover:scale-105 hover:bg-sky-600 hover:text-white transition-all cursor-default">
            Cisco Packet Tracer
          </div>
          <div className="bg-slate-100 dark:bg-slate-700/50 p-3 rounded-lg text-center font-medium text-slate-800 dark:text-slate-200 hover:scale-105 hover:bg-sky-600 hover:text-white transition-all cursor-default">
            Wireshark
          </div>
          <div className="bg-slate-100 dark:bg-slate-700/50 p-3 rounded-lg text-center font-medium text-slate-800 dark:text-slate-200 hover:scale-105 hover:bg-sky-600 hover:text-white transition-all cursor-default">
            HTML & React
          </div>
          <div className="bg-slate-100 dark:bg-slate-700/50 p-3 rounded-lg text-center font-medium text-slate-800 dark:text-slate-200 hover:scale-105 hover:bg-sky-600 hover:text-white transition-all cursor-default">
            Tailwind CSS
          </div>
          <div className="bg-slate-100 dark:bg-slate-700/50 p-3 rounded-lg text-center font-medium text-slate-800 dark:text-slate-200 hover:scale-105 hover:bg-sky-600 hover:text-white transition-all cursor-default">
            Git & GitHub
          </div>
        </div>
      </section>
    </main>
  );
}

export default Experience;
