import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './landingPage';
import PostView from './postView';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/postView' element={<PostView />} />
          </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
