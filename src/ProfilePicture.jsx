
function ProfilePicture(){

    const styles = {
        height: "150px",
        marginBottom: "40px",
    }

    const imageUrl = './src/assets/KingImage.jpeg';
    
    // an event to hide the image
    const handleClick = (e) => e.target.style.display = "none";

    return <img style={styles} onClick={(e) => handleClick(e)} src={imageUrl}></img>
}

export default ProfilePicture