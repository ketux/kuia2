import React from 'react';
import './style.css';
import './AutoComplete.css';
/*import logo from './logo.jpg';*/

export default class AutoComplete extends React.Component { //klase reprezidentuojanti komponenta
    constructor(props) {
        //props - budas gauti duomenis komponente tam, kad galetum juos modifikuot. Tai argumentai, kuriuos priima konstruktorius.
        super(props);
        //super kviecia tevine klase. Super class konstruktorius, i kuriuos krauna props argumentus
        this.state = { //kuriamas naujas objektas
            suggestions: [], //vienas property
            query: '',
        };
    }

    onTextChanged = (e) => { //funkcija, kuri apdoroja ivedama teksta/ Paima onchangeevent kaip argumenta, kuris pavadintas "e"
        const { items } = this.props; //duomenu gavimui is atskiro array failo. Gaunama reiksme is evento. this.prop - kintamieji. atvaizdavimas atsizvelgus i tai, ka vartotojas irase
        const value = e.target.value; //value - html ivesta reiksme
        let suggestions = []; //pradzioje buna tuscia
        //const maxRendered = 8;
        if (value.length > 0) { //tikrina, ar ne tuscias
            const regex = new RegExp(`^${value}`, 'i');// tikrina, ar yra atitikmenu pagal ivesta teksta
            suggestions = items.sort().filter(v => regex.test(v)); //duomenu gavimui ir rusiavimui. prop kuris vadinas items
            }
        this.setState (() => ({suggestions, query: value }));//setState - funkcija, kai kazka pakeiti laukely, pasikeicia ir rezultatai. Listo atnaujinimas. query: value - kada tekstas pasiekicia textbox'e, pasikeicia reiksme ir state'e
    }

    SuggestionSelected (value) { //funkcija, kuri kontroliuoja pasirinkima
        this.setState (() => ({ //atnaujina state'a i pasirinkta reiksme
            query: value,
            suggestions: [], //sarasas pradingsta, kai mes padarom pasirinkima
        }))
    }

    renderSuggestions () { //atvaizduoja atfiltruota lista
        const { suggestions } = this.state; //perstruktūrizavimas
        if (suggestions.length === 0) { //jei tuscia, nieko ir nerodo
            return null; //nieko neatvaizduoja
            }
        return ( //jeigu nera tuscia
            <ul>
                {suggestions.map((item) => <li onClick={() => this.SuggestionSelected(item) }>{item}</li>)}
            {/* kiekvienas irasas atskiroje eiluteje. onClick - paspaudus pasirinkima jis uzsiraso textbox'e */}
            </ul>
        );
    }

    render() {
        const { query } = this.state; //istraukia query reiksme is state'o
        return (
            <div className="AutoComplete">
                <input className="gap" value={query} onChange={this.onTextChanged} type="text" placeholder="&#61896; Enter movie name" charSet="utf-8" />
            {this.renderSuggestions()}
            </div>
        )
    }
}
