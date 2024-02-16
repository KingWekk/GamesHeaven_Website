
function Button(){

    /* inline styling */
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    //const handleClick2 = (name) => console.log(`${name} stop clicking me` );
    //<button style={styles} onClick={() => handleClick2("KingWekk")}>Click me</button>

    // conditions within the function
/*  let count = 0;
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking me!`)
        }
    };
*/ 

    // the (event) parameter was shorten to just (e)
    // to get the event: const handleClick = (e) => console.log(e);
    // textContent is the event we chose, we wil change it:
    const handleClick = (e) => e.target.textContent = "OUCH!";
    //we can either use the onClick to a single click event, or the onDoubleClick to a double click event
    return(
        <button style={styles} onDoubleClick={(e) => handleClick(e)}>Click me</button>
    )
}

export default Button