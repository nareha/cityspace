import './CityPage.css';
import Review from './Review.js';

export default function CityPage(props) {
    return (
        <div className="city-page-container">
            <h1 className='city-page-title'>{props.city}</h1>
            <div className="city-page-info">
                <img src={props.img} alt={props.city} className="city-page-image"/>
                <div className="city-page-stats">
                    <div className="criteria-and-numbers">
                        <div className="criteria">
                            Non-Discrimination Laws:<br></br>
                            Municipality as Employer:<br></br>
                            Municipal Services:<br></br>
                            Law Enforcement:<br></br>
                            Leadership on LGBTQ Equality:<br></br>
                            FLEX Points:
                        </div>
                        <div className="numbers">
                            30/30<br></br>
                            26/28<br></br>
                            7/12<br></br>
                            22/22<br></br>
                            8<br></br>
                            +15
                        </div>
                    </div>
                    <div className="city-page-total-container">
                        <div>Total:</div><div className="city-page-total">{props.total}</div>
                    </div>
                    <a href="https://hrc-prod-requests.s3-us-west-2.amazonaws.com/MEI-2020-Los-Angeles-California.pdf?mtime=20201202092920&focal=none">MEI 2020 Score Breakdown</a>
                </div>
            </div>
            <div className="user-review-container">
                <h2 className="user-review-title">User Reviews</h2>
                <Review />
            </div>
            <form className="new-answer-form">
                <div className="form-content">
                    <label for="username">username:</label>
                    <input type="text" id="username"></input>
                    <label for="rating">rating:</label>
                    <select id="rating">
                        <option value={5}>5</option>
                        <option value={4}>4</option>
                        <option value={3}>3</option>
                        <option value={2}>2</option>
                        <option value={1}>1</option>
                    </select><br></br>
                    <label for="content">add review:</label>
                    <textarea id="content"></textarea>
                </div>
                <input type="submit" className="submit-button"></input>
            </form>
        </div>
    );
}