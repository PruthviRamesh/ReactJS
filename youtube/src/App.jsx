import logo from './logo.svg';
import Nav from './components/nav';
import Category from './components/categories';
import Video from './components/videos';
import './App.css';
import VideosLogic from './components/videosLogic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVideo from './components/addvideo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Category/>
        <Routes>
          <Route element={<AddVideo/>} path='/addvideo'/>
          <Route element={<VideosLogic/>} path='/'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;