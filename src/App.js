import React from 'react';
import './App.css';
import Food from './components/Food/Food.js';

class App extends React.Component {
    state = {
        data: [
            {
                taste: 'фуа-гра',
                numberOfServings: '10 порций',
                gift: 'мышь',      
                packageWeight: '0,5',
                taglineSelected: 'Печень утки разварная с артишоками.',
                id: 1
            },
            {
                taste: 'рыбой',
                numberOfServings: '40 порций',
                gift: '2 мыши',      
                packageWeight: '2',
                taglineSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                id: 2
            },
            {
                taste: 'курой',
                numberOfServings: '100 порций',
                gift: '10 мышей',      
                postscript: 'заказчик доволен',
                packageWeight: '5',
                taglineSelected: 'Филе из цыплят с трюфелями в бульоне.',
                id: 3
            }
        ]
    };

    render()  {
        return (
            <div className="outer">
                <div className="app">
                    <h1 className="app-title">Ты сегодня покормил кота?</h1>
                    <div className="all-cards-wrapper">
                        {this.state.data.map((el) => {
                            return (
                                <div className="mr">
                                    <Food {...el} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
