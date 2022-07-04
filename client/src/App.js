import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

import i18n from './i18n';
import { Dashboard, Login } from './pages';
import { Languages } from './components';
import './App.scss';

const code = new URLSearchParams(window.location.search).get('code');

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === 'light' ? '🔆' : '🌙'}</label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === 'dark'}
            uncheckedIcon
            checkedIcon
            onColor="#1DB954"
            width={50}
          />
          <Languages onClickUS={() => changeLanguage('en')} onClickPL={() => changeLanguage('pl')} />
        </div>
        {code ? <Dashboard code={code} /> : <Login />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
