import React from 'react';

import UserInfo from './userInfo';


import './component.css';

function formatDate(date) {
    let met = date.toLocaleDateString();
    return met
} 

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author={props.user.author} />
            <div className="Comment-text">
                {props.user.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.user.date)}
            </div>
        </div>
    );
}

export default Comment;
