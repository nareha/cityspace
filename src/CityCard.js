import { Link } from 'react-router-dom';
import firebase from './firebase';
import { useState, useEffect } from 'react';
import './CityCard.css';
import fiveStars from './images/stars/5stars.svg';
import fourStars from './images/stars/4stars.svg';
import threeStars from './images/stars/3stars.svg';
import twoStars from './images/stars/2stars.svg';
import oneStar from './images/stars/1star.svg';

const db = firebase.firestore();

export default function CityCard(props) {

    const [avgStars, setaverageStars] = useState(-1);

    const stars = () => {
        switch(avgStars) {
            case 5: 
                return (<img src={fiveStars} alt="five stars" className="city-card-rating"/>);
            case 4:
                return (<img src={fourStars} alt="four stars" className="city-card-rating"/>)
            case 3:
                return (<img src={threeStars} alt="three stars" className="city-card-rating"/>)
            case 2:
                return (<img src={twoStars} alt="two stars" className="city-card-rating"/>)
            case 1:
                return (<img src={oneStar} alt="one star" className="city-card-rating"/>)
            default:
                return ("error");
        }
    }
    
    const setupFirestoreListener = () => {
        console.log(props);
        return db.collection(props.city)
        .onSnapshot((snapshot) => {
          const totalStars = snapshot.docs.reduce(
            (existing, current) => { return existing + current.data().rating},0);
            setaverageStars(Math.round(totalStars/snapshot.size));
        },
        (error) =>
          console.error("Error getting documents: ", error));
      }
      useEffect(setupFirestoreListener);

    return (
        <div className="city-card-container">
            <Link to={`/city/${props.id}`} id="link"><h3 className="city-card-name">{props.city}</h3></Link>
            <img src={props.img} alt={props.city} className="city-card-image"/>
            <div className="city-card-total">{props.total}</div>
            {stars()}
        </div>
    );
}