import Hero from './components/Hero';
import Hightligts from './components/Hightligts';
import Model from './components/Model';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightligts />
      <Model />
    </main>
  );
}

export default App;
