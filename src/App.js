import './App.css';
import Nav from './GNB/Nav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import newData from './data/new_data.json';
import { useEffect } from 'react';
import PersonalInfoCard from './PersonalInfoCard';
import SignUp from './SignUp';

function App() {
  useEffect(() => {
    const copyData = newData;
    copyData.forEach((el, index) => {
      el.idx = index + 1;
    })

    console.log(copyData);
    localStorage.setItem('personalInfo',JSON.stringify(copyData));
  })

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="home" element={<PersonalInfoCard/>} />
          <Route path="home/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
