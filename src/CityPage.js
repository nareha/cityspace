import './CityPage.css';

export default function CityPage(props) {
    return (
        <div className="city-page-container">
            <h1>{props.city}</h1>
            <div className="city-page-info">
                <img src={props.img} alt={props.city}/>
                <div className="city-page-stats">
                    <div>
                        <div className="criteria">Non-Discrimination Laws:<br></br>Municipality as Employer:<br></br>Municipal Services:<br></br>Law Enforcement:<br></br>Leadership on LGBTQ Equality:<br></br>FLEX Points:</div>
                    </div>
                </div>
            </div>
        </div>
    );
}