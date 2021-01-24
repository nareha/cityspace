import './Review.css';
import fiveStars from './images/stars/5stars.svg';
import fourStars from './images/stars/4stars.svg';
import threeStars from './images/stars/3stars.svg';
import twoStars from './images/stars/2stars.svg';
import oneStar from './images/stars/1star.svg';

export default function Review(props) {

    const stars = () => {
        switch(props.stars) {
            case 5: 
                return (<img src={fiveStars} alt="five stars" className="review-rating"/>);
            case 4:
                return (<img src={fourStars} alt="four stars" className="review-rating"/>)
            case 3:
                return (<img src={threeStars} alt="three stars" className="review-rating"/>)
            case 2:
                return (<img src={twoStars} alt="two stars" className="review-rating"/>)
            case 1:
                return (<img src={oneStar} alt="one star" className="review-rating"/>)
            default:
                return ("error");
        }
    }

    return (
        <div className="review-container">
            <div className="review-head">
                <div>from {props.user}:</div>
                {stars(props.stars)}
            </div>
            <div className="review-content">{props.text}</div>
        </div>
    );
}