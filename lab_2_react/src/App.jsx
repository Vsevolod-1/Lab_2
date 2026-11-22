import { useEffect, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  // Автоматичне перемикання теми при завантаженні залежно від часу доби (07:00 - 21:00 -> light, інакше -> dark)
  useEffect(() => {
    const forcedTheme = new URLSearchParams(window.location.search).get('theme');
    if (forcedTheme === 'light' || forcedTheme === 'dark') {
      setTheme(forcedTheme);
      return;
    }
    const hours = new Date().getHours();
    setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
  }, []);

  // Застосування класу теми до <body>
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark', 'dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark', 'dark-mode');
      document.body.classList.add('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 py-4">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <Experience />
        <Reviews />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
