import React from 'react';
import './style.css';
import './AutoComplete.css';
//import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const API_KEY = 'cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query={query}';
//GET: https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query={paieškos_tekstas}&page=1&include_adult=false
/*import logo from './logo.jpg';*/

export default class AutoComplete2 extends React.Component { //klase reprezidentuojanti komponenta
    constructor(props) {
        //props - budas gauti duomenis komponente tam, kad galetum juos modifikuot. Tai argumentai, kuriuos priima konstruktorius.
        super(props);
        //super kviecia tevine klase. Super class konstruktorius, i kuriuos krauna props argumentus
        this.state = { //kuriamas naujas objektas
            offers: [], //vienas property
            query: '',

            isLoading: false,
            error: null,
        };
    }

// bandom from API. Užklausos atvaizdavimas
   /* componentDidMount() {
        this.setState({ isLoading: true });

        fetch(API_URL + API_KEY)
            .then(response => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error('Error');
                }
              })
            .then(data => this.setState({ offers: data.offers, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
  } */

//
     componentDidMount() {
        this.setState({ isLoading: true });

        axios.get(API_URL + API_KEY)
            .then(result => this.setState({
                offers: result.data.offers,
                isLoading: false
              }))
            .catch(error => this.setState({
                error,
                isLoading: false
        }));
      }


  /*  render() {
        const { offers, isLoading, error } = this.state;
        if (error) {
          return <p>{error.message}</p>;
        }
        if (isLoading) {
          return <p>Loading ...</p>;
        }

        return (
          <ul>
            {offers.map(offer =>
              <li key={offer.id}>
                <a href={offer.title}>{offer.original_title}</a>
              </li>
            )}
          </ul>
        );
      } */

    onInputChanged = (a) => {
        const { apis } = this.props;
        const value = a.target.value;
        let offers = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            offers = apis.sort().filter(v => regex.test(v));
        }
        this.setState (() => ({offers, query: value }));
    }

    OfferSelected (value) { //funkcija, kuri kontroliuoja pasirinkima
        this.setState (() => ({ //atnaujina state'a i pasirinkta reiksme
            query: value,
            offers: [], //sarasas pradingsta, kai mes padarom pasirinkima
        }))
    }

    renderOffers () {
            const { offers } = this.state;
            if (offers.length === 0) {
                return null;
                }
            return (
                <ul>
                    {offers.map((api) => <li onClick={() => this.OfferSelected(api) }>{api}</li>)}
                </ul>
            );
        }

    render() {
        const { query } = this.state; //istraukia query reiksme is state'o
        return (
            <div className="AutoComplete2">
                <input className="gap" value={query} onChange={this.onInputChanged} type="text" placeholder="&#61896; Enter movie2 name" charSet="utf-8" />
            {this.renderOffers()}

            </div>
        )
    }
}
