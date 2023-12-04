import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Menu } from './menu/Menu';
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
