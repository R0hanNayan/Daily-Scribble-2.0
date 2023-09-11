import React from "react";
import './postWidget.css';

function PostWidget(props){
    return(
        <div className="Posts">
            <h1>{props.title}</h1>
            <div className="Posts-content">
                <p>{props.content.slice(0, 100)}</p>
            </div>
            <p>{props.user}</p>
        </div>
    )
}
export default PostWidget;