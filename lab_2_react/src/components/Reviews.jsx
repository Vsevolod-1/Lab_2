import { useEffect, useState } from 'react';
const VARIANT_NUMBER = 8;

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`)
      .then((res) => {
        if (!res.ok) throw new Error(`Помилка HTTP: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="reviews" className="max-w-4xl mx-auto px-4 py-4">
      <div className="bg-white dark:bg-slate-800/80 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-md">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-sky-500 pl-3">
          Відгуки попередніх роботодавців (Варіант {VARIANT_NUMBER})
        </h2>
        {loading && <p className="text-slate-500 dark:text-slate-400 italic">Завантаження коментарів із сервера...</p>}
        {error && <p className="text-red-500 dark:text-red-400">Не вдалося отримати дані: {error}</p>}
        {!loading && !error && (
          <div className="space-y-4">
            {comments.map((c, index) => (
              <div key={c.id} className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-lg border border-slate-200 dark:border-slate-700 border-l-4 border-l-sky-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-sky-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">#{index + 1}</span>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">{c.name}</h3>
                </div>
                <a href={`mailto:${c.email}`} className="text-xs text-sky-600 dark:text-sky-400 hover:underline block mb-2">{c.email}</a>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default Reviews;
