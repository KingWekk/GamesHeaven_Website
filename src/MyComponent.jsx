// i dont need to import the whole library, so i will just import the "useState" function
import React, {useState} from 'react';

function MyComponent(){

    const [name, SetName] = useState("Guest");
    const [age, SetAge] = useState(0);
    const [isEmployed, SetIsEmployed] = useState(false)

    const updateName = () => {
        SetName("KingWekk");
    }

    const incrementAge = () => {
        SetAge(age+1);
    }

    const toggleEmployedStatus = () => {
        SetIsEmployed(!isEmployed);
    }

    return  <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle Status</button>
            </div>


}

export default MyComponent