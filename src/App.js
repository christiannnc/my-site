import { createContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import './App.css';

export const ThemeContext = createContext();

const App = () => {
  const THEME_KEY = 'isDarkMode';
  const storedTheme = JSON.parse(localStorage.getItem(THEME_KEY) ?? false);
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
        <header className="App-header">
          <div>
            <Navbar />

            <div className="welcome-div">
              <h1 className="cc-hello-header">Hello, I'm Christian</h1>
            </div>

            <AboutSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </header>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
