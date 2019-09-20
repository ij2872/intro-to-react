import React, {useState, useEffect} from 'react'
import {Button} from 'reactstrap'
import axios from 'axios'

function UserExample(props){
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Bob', 'Bill', 'Joe']);

    function handleCounterSubtract(){
        if(counter > 0){
            setCounter(counter - 1);
        }
    };

    return (
        <div>
            {users.map((user) => (
                <div key={user}>Username: {user}</div>
            ))}
            <Child count={counter} setCount={setCounter} lowerCounter={handleCounterSubtract}></Child>
            <Dog></Dog>
        </div>
    );
}

function Child({count, setCount, lowerCounter}){
    return (
        <div>
            <h2>{count}</h2>
            <Button onClick={() => setCount(count + 1)} color="primary" size="lg">+</Button>
            <Button onClick={() => lowerCounter(count - 1)} color="danger"size="lg">-</Button>
        </div>
    );
}


function Dog(props){
    const [apiData, setApiData] = useState({});
    
    useEffect(() => {
        async function fetchData(){
            const apiResponse = await axios('https://dog.ceo/api/breeds/image/random');
            setApiData(apiResponse.data.message);
            console.log(apiResponse);
        }
        fetchData();
    }, []);

    return (
        <img src={apiData}/>
    );
}

export default UserExample;