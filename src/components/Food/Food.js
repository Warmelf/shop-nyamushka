import React from 'react';
import './Food.css';
import Cat from './cat.png';

class Food extends React.Component {
    state = {
        choosed: false,
        disabled: false,
        count: 2
    };

    isChoosed = () => {
        this.setState({ count: this.state.count + 1 });
        if ((this.state.count % 2) === 0) {
            this.setState({ choosed: true });
        } else {
            this.setState({ choosed: false });
        }
    }

    isDisabled = () => {
        this.setState({ disabled: true });
    }

    render() {
        return (   
            <div className="card__wrapper"> 
                <div className={`card ${this.state.disabled ? "disabled" : null}`} 
                onClick={() => {
                        this.isChoosed();
                }}>  
                    <div className={`card__bg-blue 
                    ${this.state.choosed ? "choosed" : null}
                    ${this.state.disabled ? "disabled" : null}`}>
                        <div className="card__description">
                            <p className="card__title">Сказочное заморское явство</p>
                            <h1 className="card__main-title">Нямушка</h1>
                            <h2 className="card__sibtitle">с {this.props.taste}</h2>
                            <p className="card__text">{this.props.numberOfServings}</p>
                            <p className="card__text">{this.props.gift} в подарок</p>
                            <p className="card__text">{this.props.postscript}</p>
                        </div>
                        <img src={Cat} alt="Кот, который хочет Нямушку" className="cat-img" />
                        <div className={`card__circle 
                        ${this.state.choosed ? "choosed" : null}
                        ${this.state.disabled ? "disabled" : null}`}>
                            <p className="card__circle-number">{this.props.packageWeight}</p>
                            <p className="card__circle-text">кг</p>
                        </div>
                    </div>
                </div> 
                <p className={`card__tagline ${
                    this.state.disabled || this.state.choosed ? "hidden" : null
                    }`}>
                    Чего сидишь? Порадуй котэ, {' '}
                    <button className="card__tagline__button"
                    onClick={() => {
                        this.isChoosed();
                    }}>купи.</button>
                </p>
                <p className={`card__tagline card__tagline-disabled ${
                    !this.state.disabled ? "hidden" : null
                }`}>
                    Печалька, с {this.props.taste} закончился.
                </p>
                <p className={`card__tagline ${
                    !this.state.choosed ? "hidden" : null
                }`}>
                   {this.props.taglineSelected}
                </p>
            </div>
        );
    }
}

export default Food;