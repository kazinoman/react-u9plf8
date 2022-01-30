import React from 'react';
import './style.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

// Components
import Home from './components/Home.page.js';
import About from './components/About.page.js';
import Contact from './components/Contact.page.js';

//
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

// custom component

const CusTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: 'auto',
  backGroundColor: 'red',
  '& MuiTabs-root': {
    marginLeft: '30px',
  },
  '& .MuiTabs-indicator': {
    // display: 'none',
    backgroundColor: 'orange',
    color: 'orange',
  },
}));

const CusTab = styled(Tab)(({ theme }) => ({
  color: 'orange',
  fontSize: '16px',
  '& .MuiTabs-root': {
    fontSize: '26px',
    fontFamily: 'roboto',
  },
  '& .Mui-selected': {
    color: 'orange',
  },
}));

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);

  return (
    <BrowserRouter>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <CusTabs
        value={value}
        onChange={handleChange}
        sx={{ '& .MuiTabs-root': { marginLeft: '40px' } }}
      >
        <CusTab label="Home" component={Link} to="/" />
        <CusTab label="About" component={Link} to="about" />
        <CusTab label="Contact" component={Link} to="contact" />
      </CusTabs>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
