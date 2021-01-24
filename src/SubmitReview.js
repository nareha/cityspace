import { useState } from 'react';

export default function SubmitReview(props) {

    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(5);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    
    const handleContent = (event) => {
        setContent(event.target.value);
    }

    const handleRating = (event) => {
        setRating(Number(event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createReview(username, content, rating, () => {
            setUsername("");
            setContent("");
        });
    }

    return (
    <form className="new-answer-form" onSubmit={handleSubmit}>
    <div className="form-content">
        <div className="form-content-top">
            <label for="username">username:</label>
            <input type="text" id="username" className="username-input" value={username} onChange={handleUsername}></input>
            <label for="rating">rating:</label>
            <select id="rating" className="rating-input" value={rating} onChange={handleRating}>
                <option value={5}>5</option>
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
            </select>
        </div>
        <div>
            <label for="content">add review:</label>
            <textarea id="content" className="content-input" value={content} onChange={handleContent}></textarea>
        </div>
    </div>
    <input type="submit" className="submit-button"></input>
    </form>
    );
}