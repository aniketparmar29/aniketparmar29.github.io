import { Route, Routes } from 'react-router-dom';
import useLoading from './hooks/useLoading';
import './App.css';
import Home from './Pages/Home';
import LoadingPage from './Pages/LoadingPage';
function App() {
  const {ready} = useLoading(4000);
  return (
    <>
    <Routes>
      {ready!==true?<Route exact path="/" element={<LoadingPage/>}/>:
      <Route exact path="/" element={<Home/>}/>}
    </Routes>
    

    </>
  );
}

export default App;
