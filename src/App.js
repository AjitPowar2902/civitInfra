import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Component/Dashboard';
import ErrorPage from './Component/ErrorPage';
import PageNotFound from './Component/PageNotFound';
import Login from './Pages/Login';
import PlotRegistration from "./Pages/PlotRegistration";
 



function App() {
  return (
    <BrowserRouter>
     
    <Routes>
    <Route path="/" element={<Login/>} />
         <Route path="/Dashboard" element={<Dashboard/>} />
         <Route path="/Help" element={<ErrorPage/>} />
         <Route path="/plotregistration" element={<PlotRegistration/>}/>
         <Route path="*" element={<PageNotFound />} />
         
    </Routes>
    

  </BrowserRouter>
  );
}

export default App;
