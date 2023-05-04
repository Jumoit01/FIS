import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'

import './components/stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
