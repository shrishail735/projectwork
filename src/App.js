import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashbord from './components/layout/dashbord/dashbord';
import Projectdetails from './components/Projects/projectdetails';
import SignIN from './components/auth/signin';
import SignUp from './components/auth/signup';
import CreateProject from './components/Projects/CreateProject';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar />
        <Switch>
          <Route exact path="/" component={Dashbord}></Route>
          <Route path="/create" component={CreateProject}></Route>
          <Route path="/projects/:id" component={Projectdetails}></Route>
          <Route path="/signin" component={SignIN}></Route>
          <Route path="/signup" component={SignUp}></Route>
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
