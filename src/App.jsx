import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ProfilePicture from "./ProfilePicture.jsx"
import Counter from "./Counter.jsx"


function App() {


  const fruits =   [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "pineapple", calories: 37}]
  const vegetables =   [{id: 5, name: "potatoes", calories: 110}, 
                        {id: 6, name: "celery", calories: 15}, 
                        {id: 7, name: "carrots", calories: 25}, 
                        {id: 8, name: "corn", calories: 63}]


// "fruits.length > 0 ? do something : null" meaning, if the fuits list has any items, then print the list, if not, then print null = nothing  
// we can also just write: "fruits.length > 0 && do something" its the same thing but with less code
  return(
    <>
      <Header />
      <Counter/>
      <UserGreeting isLoggedIn={true} username="KingWekk" />
      <Student name="Rei Semana" age={19} isStudent={true} />   
      <Student name="KingWekk" age={19} isStudent={false} />   
      <Student />   
      <Card />
      <Card />
      <Card />
      <Card />  
      <>
        {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
      </>
      <Food />
      <Button/> 
      <ProfilePicture/> 
      <Footer />
    </>
  );
}

export default App
