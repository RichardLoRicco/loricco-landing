// Runs before first paint (see layout.tsx).
// 1. Marks <html> with .js so scroll-reveal styles only hide content when the
//    script that reveals it is actually running.
// 2. Applies the stored theme, or the OS preference, to prevent a flash.
(function() {
  document.documentElement.classList.add('js');
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
