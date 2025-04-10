import './App.css';
import { Application } from './components/application/Application';
import Counter from './components/counter/Counter';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      {/* <Skills skills={['react', 'next', 'js']} /> */}
      <Counter />
    </div>
  );
}

export default App;
