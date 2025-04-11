import "./App.css";
import { Application } from "./components/application/Application";
import Counter from "./components/counter/Counter";
import MuiMode from "./components/mui/MuiMode";
import Skills from "./components/skills/Skills";
import AppProviders from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      {/* <Skills skills={['react', 'next', 'js']} />
      <Counter /> */}
      <MuiMode />
    </AppProviders>
  );
}

export default App;
