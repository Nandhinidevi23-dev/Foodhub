
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuHooks from './HooksLearning/MenuHooks';
import UseState from './HooksLearning/UseState';
import UseEffect from './HooksLearning/UseEffect';
import UserContext from './HooksLearning/ThemeButton';
import { FoodComponent } from './FoodApp/FoodComponent';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<MenuHooks />} />
    //     <Route path="/use-state" element={<UseState />} />
    //     <Route path="/use-effect" element={<UseEffect />} />
    //     <Route path="/use-context" element={<UserContext />} />
    //     <Route path="/use-context" element={<FoodComponent />} />

    //   </Routes>
    // </Router>
    <FoodComponent/>
    
  );
};

export default App;
