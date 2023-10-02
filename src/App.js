import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import Footer from './shared/Footer';

function App() {
  return (
    <div className="app">
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
