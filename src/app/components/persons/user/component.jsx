import React from 'react';

function User(props) {
const { oneUser } = props;

  return(
    <div>
        {
          oneUser.length ? 
          <div>
              <img  src={oneUser[0].avatar_url} alt="id"/>
              <p>{oneUser[0].html_url}</p>
          </div>
          : <p>Loding...</p>  
        }
    </div>
  );
};

export default User;