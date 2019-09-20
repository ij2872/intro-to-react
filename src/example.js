
import React, {useState} from 'react';

function HomePage(props){
    const [userName, setUserName] = useState("Bob");
   
    return (
        <UserCard name={userName} lastName="Burger" updateName={setUserName}>
        </UserCard>
    );
}

function UserCard(props){
    // props.updateName("Bill");
    return(
        <div>
            <h1>{props.name + " " + props.lastName}</h1>
        </div>
    );
}



export default HomePage;
