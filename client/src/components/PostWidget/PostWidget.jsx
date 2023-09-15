import React, { useState } from "react";
import './postWidget.css';
import './postCard.css';

function PostCard({ title, content, user, handleClick }) {
    return (
        <div className="PostCard">
            <h1 id="PostCardTitle">{title}</h1>
            <div className="Post-Card-Content">
                <p id="PostCardContent">{content}</p>
            </div>
            <div className="Post-Card-User">
                <p id="PostCardUser">-{user}</p>
            </div>
            <div className="Post-Card-Close">
                <button id="PostCardClose" type="submit" onClick={handleClick}>Close</button>
            </div>
        </div>
    )
}

function PostWidget({ title, content, user}) {
    const [isCardOpen, setIsCardOpen] = useState(false);

    const handleClick = () => {
        setIsCardOpen(!isCardOpen);
    }

    return (
        <div>
            {
                isCardOpen ? (
                    <div className="PostCard-Container">
                        <PostCard title={title} content={content} user={user} handleClick={handleClick}/>
                    </div>
                ) : (
                    <div className="Post-Widget">
                        <h1 id="PostWidgetTitle">{title}</h1>
                        <div className="Post-Widget-Content">
                            <p id="PostWidgetContent">{content.slice(0, 150)}</p>
                        </div>
                        <div className="Post-Widget-User">
                            <p id="PostWidgetUser">-{user}</p>
                        </div>
                        <div className="read-more">
                            <button id="readMoreBtn" type="submit" onClick={handleClick}>Read more...</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PostWidget;