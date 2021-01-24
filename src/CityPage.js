import { useEffect, useState } from 'react';
import firebase from './firebase';
import './CityPage.css';
import './Main.css';
import Review from './Review.js';
import LA from './images/LA.svg';
import SubmitReview from './SubmitReview.js';

const db = firebase.firestore();

//const citydata = require('./citydata.json');

export default function CityPage(props) {

    const [reviews, setReviews] = useState([]);
  
    const setupFirestoreListener = () => {
      return db.collection(props.city)
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        const reviews = snapshot.docs.map((doc) => {
          return {...doc.data(), id: doc.id}
        });
        setReviews(reviews);
      },
      (error) =>
        console.error("Error getting documents: ", error));
    }
    useEffect(setupFirestoreListener);

    const createReview = (username, content, rating, callback) => {
        db.collection(props.city).doc()
          .set({
              name: username,
              text: content,
              rating: rating,
              date: Date.now(),
          })
          .then(() => {
              callback();
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
    }
    
    return (
        <>
        <div className="city-page-container">
            <h1 className='city-page-title'>{props.city}</h1>
            <div className="city-page-info">
                <img src={LA} alt={props.city} className="city-page-image"/>
                <div className="city-page-stats">
                    <div className="criteria-and-numbers">
                        <div className="criteria">
                            Non-Discrimination Laws:<br></br>
                            Municipality as Employer:<br></br>
                            Municipal Services:<br></br>
                            Law Enforcement:<br></br>
                            Leadership on LGBTQ Equality:<br></br>
                        </div>
                        <div className="numbers">
                            {`${props.ratings[0]}/30`}<br></br>
                            {`${props.ratings[1]}/28`}<br></br>
                            {`${props.ratings[2]}/12`}<br></br>
                            {`${props.ratings[3]}/22`}<br></br>
                            {`${props.ratings[4]}/8`}
                        </div>
                    </div>
                    <div className="city-page-total-container">
                        <div>Total:</div><div className="city-page-total">{`${props.total} / 100`}</div>
                    </div>
                    <a href="https://hrc-prod-requests.s3-us-west-2.amazonaws.com/MEI-2020-Los-Angeles-California.pdf?mtime=20201202092920&focal=none">MEI 2020 Score Breakdown</a>
                </div>
            </div>
            <div className="user-review-container">
                <h2 className="user-review-title">User Reviews</h2>
                {
                    reviews.map((review) => {
                        return <Review user={review.name} text={review.text} stars={review.rating} />
                    })
                }
            </div>
            <SubmitReview createReview={createReview} />
        </div>
        <div style={{visibility: "hidden"}} className="bottom-space">.</div>
        </>
    );
}