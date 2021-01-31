import React from 'react';
import './App.css';
import Food from './components/Food/Food.js';

class App extends React.Component {
    state = {
        // taste: ['фуа-гра', 'рыбой', 'курой'],
        // numberOfServings: ['10 порций', '40 порций', '100 порций'],
        // gift: ['мышь', '2 мыши', '10 мышей'],
        // postscript: 'заказчик доволен',       
        // packageWeight: ['0,5', '2' , '5'],
        // taglineSelected: [
        //     'Печень утки разварная с артишоками.',
        //     'Головы щучьи с чесноком да свежайшая сёмгушка.',
        //     'Филе из цыплят с трюфелями в бульоне'
        // ],
        // choosedFirst: false,
        // disabled: false
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

    // isChoosed = () => {
    //     this.setState({ choosed: true });
    // }

    // isDisabled = () => {
    //     this.setState({ disabled: true });
    // }

    render()  {
        return (
            <div className="outer">
                <div className="inner">
                    <div className="app">
                        <h1 className="app-title">Ты сегодня покормил кота?</h1>
                        <div className="all-cards-wrapper">
                            {/* <div className="tablet-cards-wrapper">
                                <div className="mr">
                                    <Food {...this.state} 
                                    taste={this.state.taste[0]} 
                                    numberOfServings={this.state.numberOfServings[0]} 
                                    gift={this.state.gift[0]} 
                                    packageWeight={this.state.packageWeight[0]} 
                                    taglineSelected={this.state.taglineSelected[0]} 
                                    isChoosedFirst={this.isChoosedFirst} 
                                    isDisabled={this.isDisabled} />
                                </div>
                                <div className="mr">
                                    <Food {...this.state} 
                                    taste={this.state.taste[1]}
                                    numberOfServings={this.state.numberOfServings[1]} 
                                    gift={this.state.gift[1]} 
                                    packageWeight={this.state.packageWeight[1]} 
                                    taglineSelected={this.state.taglineSelected[1]}
                                    // isChoosed={this.isChoosed} 
                                    isDisabled={this.isDisabled} />
                                </div>
                            </div>
                            <Food {...this.state} 
                            taste={this.state.taste[2]}
                            numberOfServings={this.state.numberOfServings[2]} 
                            gift={this.state.gift[2]} 
                            packageWeight={this.state.packageWeight[2]} 
                            taglineSelected={this.state.taglineSelected[2]}
                            postscript={this.state.postscript}
                            // isChoosed={this.isChoosed} 
                            isDisabled={this.isDisabled} /> */}
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
            </div>
        );
    }
}

export default App;
