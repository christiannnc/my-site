import { useEffect, useState } from 'react';
import { ThemeContext } from './contexts';
import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import { THEME_KEY } from './constants';
import './index.css';

function App() {
  const storedTheme = JSON.parse(localStorage.getItem(THEME_KEY) ?? `${false}`);
  const [isDarkMode, setIsDarkMode] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    console.log(
      '%chi there!',
      'color: #5AB1BB; font-size: 20px; font-weight: 600'
    );
    console.log('');
    console.log(
      "if you'd like, feel free to email me at christian@christianmcox.com " +
        'to let me know what you think about this site, or what i could improve on!'
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={!isDarkMode ? 'body' : 'body dark'}>
        <header className="appHeader">
          <Navbar />
          <HomePage />
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
