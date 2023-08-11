import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Navigation from './components/Navigation';

// import Playground from './playground/Playground';

function App() {
  return (
    // <Navigation />
    <Routes>
      <Route path='' element={<Homepage />} />
      <Route path='/' element={<Navigation />} />
    </Routes>
  );
}

export default App;
