import {useEffect} from "react";
import {initializeTitles} from "./components/Global/Titles";

function App() {
    useEffect(function (){
        initializeTitles()
    }, [])

  return (
    <div className="App">
        <h4 className={"text-right"}>پنل مدیریت رسپا</h4>

    </div>
  );
}

export default App;
