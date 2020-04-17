import './App.css';
import React from 'react';
import SearchPage from './components/Search/SearchPage';
import SavedPage from './components/Saved/SavedPage';
import NavBar from './components/NavBar'
import style from './App.css'

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  
 
  return (
    <Router>
  
        {console.log("App.js Rendering....")}

        <div className="App">
        <NavBar />
            <div class="wrapper">
              <div class="container-fluid" style={style.RightSection}>
                    
                    <div id="content" class="row pt-2">
                        
                        <div class="col-12 ">
                          <Route exact path={["/", "/search"]} component={SearchPage} />
                          <Route path={["/Saved"]} component={SavedPage} />
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </Router>
  );
}

  export default App;
