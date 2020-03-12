import React from 'react';
import {Link} from 'react-router-dom';

function Users (props) {
  const { mrops,checkUser } = props;
  const singleUsers = '/user/';
  
  return(
    <div>
        {
          mrops.length && mrops.map( item => {
            return(
              <Link to={singleUsers + item.id} key={item.id} onClick={() => checkUser(item.id)}>
                <img style={styles.users} src={item.avatar_url} alt="id"/>
              </Link> 
               
            )
          })
        }
    </div>
  )
}

const styles ={
users:{
        width:'200px',
        borderRadius:'50%',
        margin:'0px 20px'
    }
}

export default Users;