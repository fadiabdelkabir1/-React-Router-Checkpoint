import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './compo/Header';
import FilmGalery from './compo/FilmGalery';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import  Trailer from './compo/trailer.jsx'

function App() {
  const [SearchValue, setSearchValue] = useState('')
  const [rating, setRating] = useState(1)
  const [havor, setHavor] = useState(null)
  const [fakedata, setfakedata] = useState(
    [
    {
        title:'All Too Well',
        rate:3,
        url:"https://cdn.shopify.com/s/files/1/0011/4651/9637/products/litho_dd015644-cf63-4aa4-ba25-8a0cb901f839_1024x1024.png?v=1636654568",
        desc:'this is a description of the movie',
        trailer:"https://www.youtube.com/embed/t0Yf43ONyNo"
    },{
        title:'Avengers End Game',
        rate:5,
        url:"https://m.media-amazon.com/images/I/71UCkI9EWhL._AC_SY606_.jpg",
        desc:'this is a description of the movie',
        trailer:"https://www.youtube.com/embed/TcMBFSGVi1c"
    },{
        title:'Avengers Infinity War',
        rate:5,
        url:"https://i.pinimg.com/736x/a7/21/08/a721082bae9c7427b89422de580c8044.jpg",
        desc:'this is a description of the movie',
        trailer:"https://www.youtube.com/embed/6ZfuNTqbHE8"
    },{
        title:'Harry Potter And The Prisoner Of Azkaban',
        rate:4,
        url:"https://c8.alamy.com/compfr/2c7gk8c/harry-potter-et-le-prisonnier-d-azkaban-affiche-de-film-2c7gk8c.jpg",
        desc:'this is a description of the movie',
        trailer:"https://www.youtube.com/embed/1ZdlAg3j8nI"
    },{
      title:'Spider-Man : Homecoming',
      rate:3,
      url:"https://www.cinehorizons.net/sites/default/files/affiches/395095099-spider-man-homecoming.jpg",
      desc:'this is a description of the movie',
      trailer:"https://www.youtube.com/embed/n9DwoQ7HWvI"
  },{
      title:'Iron Man',
      rate:1,
      url:"https://m.media-amazon.com/images/I/51GQ3614bqL._AC_.jpg",
      desc:'this is a description of the movie',
      trailer:"https://www.youtube.com/embed/8ugaeA-nMTc"
  }
  ,{
    title:'Quite Place 2',
    rate:5,
    url:"https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    desc:'this is a description of the movie',
    trailer:"https://www.youtube.com/embed/BpdDN9d9Jio"
}
])




  return (
  <>
    
    <Router>
      <Routes>
        <Route exact path="/" element={<><Header SearchValue={SearchValue} setSearchValue={setSearchValue} 
    rating={rating} setRating={setRating}
    havor={havor} setHavor={setHavor}
    fakedata={fakedata} setfakedata={setfakedata}></Header>
    <FilmGalery SearchValue={SearchValue} rating={rating}  fakedata={fakedata}></FilmGalery></>}/>
        <Route path="/trailer/:name"  element={<Trailer fakedata={fakedata}/>}/>

      </Routes>
    </Router>
  </>
  );
}

export default App;
