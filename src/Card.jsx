import profilePic from './assets/KingImage.jpeg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"/>
            <h2 className="card-title" >King Wekk</h2>
            <p classname="card-text" >I am KingWekk xD</p>
        </div>
    );

}

export default Card