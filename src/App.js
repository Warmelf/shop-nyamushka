import React from 'react';
import './App.css';
import Food from './components/Food/Food.js';

class App extends React.Component {
    state = {
        taste: ['фуа-гра', 'рыбой', 'курой'],
        numberOfServings: ['10 порций', '40 порций', '100 порций'],
        gift: ['мышь', '2 мыши', '10 мышей'],
        postscript: 'заказчик доволен',       
        packageWeight: ['0,5', '2' , '5'],
        taglineDefaultLink: ['../meat', '../fish', 'chicken'],
        taglineSelected: [
            'Печень утки разварная с артишоками.',
            'Головы щучьи с чесноком да свежайшая сёмгушка.',
            'Филе из цыплят с трюфелями в бульоне'
        ],
    };

    render()  {
        return (
            <div className="outer">
                <div className="inner">
                    <div className="app">
                        <h1 className="app-title">Ты сегодня покормил кота?</h1>
                        <div className="all-cards-wrapper">
                            <div className="tablet-cards-wrapper">
                                <div className="mr">
                                    <Food taste={this.state.taste[0]} 
                                    numberOfServings={this.state.numberOfServings[0]} 
                                    gift={this.state.gift[0]} 
                                    packageWeight={this.state.packageWeight[0]}  />
                                </div>
                                <div className="mr">
                                    <Food taste={this.state.taste[1]}
                                    numberOfServings={this.state.numberOfServings[1]} 
                                    gift={this.state.gift[1]} 
                                    packageWeight={this.state.packageWeight[1]} />
                                </div>
                            </div>
                            <Food taste={this.state.taste[2]}
                            numberOfServings={this.state.numberOfServings[2]} 
                            gift={this.state.gift[2]} 
                            packageWeight={this.state.packageWeight[2]} 
                            postscript={this.state.postscript}  />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
