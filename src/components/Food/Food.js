import React from 'react';
import './Food.css';
import Cat from './cat.png';

class Food extends React.Component {
    state = {

    };

    render() {
        return (   
            <div className="card__wrapper"> 
                <div className="card">  
                    <div className="card__bg-blue">
                        <div className="card__description">
                            <p className="card__title">Сказочное заморское явство</p>
                            <h1 className="card__main-title">Нямушка</h1>
                            <h2 className="card__sibtitle">с {this.props.taste}</h2>
                            <p className="card__text">{this.props.numberOfServings}</p>
                            <p className="card__text">{this.props.gift} в подарок</p>
                            <p className="card__text">{this.props.postscript}</p>
                        </div>
                        <img src={Cat} alt="Кот, который хочет Нямушку" className="cat-img" />
                        <div className="card__circle">
                            <p className="card__circle-number">{this.props.packageWeight}</p><p className="card__circle-text">кг</p>
                        </div>
                    </div>
                </div> 
                <p className="card__tagline">Чего сидишь? Порадуй котэ, <a href="../" className="card__tagline__link">купи.</a></p>
                <p className="card__tagline card__tagline-disabled hidden">Печалька, с {this.props.taste} закончился.</p>
            </div>
        );
    }
}

export default Food;