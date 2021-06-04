import React, { useEffect, useCallback, useState } from 'react';
import './Home.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import HomeDefault from './HomeDefault';
// import TrendingGames from './TrendingGames';
import TripleInfoBox from './TripleInfoBox';
import axios from 'axios';


function Home() {

  return (
    <div>
      <Nav/>
      <HomeDefault/>
      <TripleInfoBox/>
    </div>
  );
}

export default Home;
