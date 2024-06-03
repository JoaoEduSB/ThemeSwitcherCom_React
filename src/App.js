import './App.css';
import ThemeSwitcher from "./Components/ThemeSwitcher"
import {ThemeProvider} from "./Components/ThemeContext"

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
}

export default App;
