import React,{useEffect} from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import Headlines from "./components/Headlines";


function App() {


  return (
    <div className="App">
        <Header />
        <Headlines />
        <Body />
        
    </div>
  );
}

export default App;