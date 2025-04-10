import './App.css';
import { Application } from './components/application/Application';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <Skills skills={['react', 'next', 'js']} />
    </div>
  );
}

export default App;
