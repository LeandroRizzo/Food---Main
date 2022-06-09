import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
// import AddRecipe from './Components/AddRecipe/AddRecipe';
import Home from './Components/Home/Home';
// import Nav from './Components/Nav/Nav';
// import RecipeDetail from './Components/RecipeDetail/RecipeDetail';
// import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
       <Route exact path='/' element={<Landing/>}/>
       <Route exact path='/home' component={<Home/>}/>

      </Routes>
      {/*} <Route path='/recipe/:id' component={RecipeDetail} />
       <Route path= '/home' component={Nav}/> 
       <Route exact path='/addRecipe' component={AddRecipe}/> */}
    </div>
  );
}

export default App;