import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

import './App.scss';
import { Dashboard, Login } from './pages';

const code = new URLSearchParams(window.location.search).get('code');

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return code ? (
    <Dashboard code={code} />
  ) : (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === 'light' ? '🔆' : '🌙'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} uncheckedIcon checkedIcon />
        </div>
        <Login />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
