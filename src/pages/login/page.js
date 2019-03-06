import React from 'react';
import { browserHistory } from 'react-router';
import styles from './AutoComplete.css';

import AutoComplete from './AutoComplete'; //importuojam komponenta
//import AutoComplete2 from './AutoComplete2';

import movies from './movies'; //props called items
//import axios from 'axios';


//import movie from './images/film.png';
//import search from './images/search.png';




export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }



  render() {
   // const { apis } = this.state;
    return (

        <div className="App">
            <p><h1>From array </h1></p>
                <p className= {styles.AutoComplete}>
                    <img className="movie" alt="movieicon" width="100" height="100" src="http://simpleicon.com/wp-content/uploads/movie-1.png" style={{width: 80, height: 80, position: 'relative', left: 0, top: 20}}/>
                    <img className="search" alt="searchicon" width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGtrpkXDSDB9vuBCX4I-3ZaKzJuXO2z1h-r7bSIqyKufg29-L" style={{width: 80, height: 80, position: 'relative', left: 795, top: 20}}/>
                <p className={styles.White}></p>
                    <AutoComplete items={movies} text="AutoComplete" maxSearchResults={8} menuLimit={8} />
        {/* kvieciam klase AutoComplete. {movies} -pridedam items as a prop, kaip atributa ir suteikiam reiksme movies */}
                <p className={styles.nobagr}></p>
                </p>

            {/* //   <p><h2>Bandymas. From api </h2></p>
             //   <p className= {styles.AutoComplete2}>
             //       <img className="movie" alt="movieicon" width="100" height="100" src="http://simpleicon.com/wp-content/uploads/movie-1.png" style={{width: 80, height: 80, position: 'relative', left: 0, top: 20}}/>
             //       <img className="search" alt="searchicon" width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGtrpkXDSDB9vuBCX4I-3ZaKzJuXO2z1h-r7bSIqyKufg29-L" style={{width: 80, height: 80, position: 'relative', left: 795, top: 20}}/>
			//
            //        <AutoComplete2 apis={axios} text="AutoComplete2" maxSearchResults={8} menuLimit={8} />
            //    <p className={styles.White2}></p>
            //    </p> */}

        </div>
    );
  }

}


