import PropTypes from 'prop-types'

function List(props){

/*   const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "pineapple", calories: 37}]
*/
//    fruits.sort((a, b) => a.name.localeCompare(b.name) ); // Alphabetic order
//    fruits.sort((a, b) => b.name.localeCompare(a.name) ); // Reverse Alphabetic order
//    fruits.sort((a, b) => a.calories - b.calories ); // Calories numeric order
//    fruits.sort((a, b) => b.calories - a.calories ); // Calories reverse numeric order

/*   const listItems = fruits.map(fruit =>   <li key={fruit.id} >
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);
*/
/*  Filtrar as frutas por calorias
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100 );
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id} >
                                                        {lowCalFruit.name}: &nbsp;
                                                        <b>{lowCalFruit.calories}</b></li>);
*/

    // Reusable components (list)
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item =>  <li key={item.id} >
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);
    // we can only reutrn a single element, or many elements within a fragment: <> elements </>
    // the h3 element is for the title / category of the items, and the ol (ordered list) is the list of items
    return (<> 
                <h3 className="list-category">{category}</h3> 
                <ol className="list-items">{listItems}</ol> 
            </>);
}
// default props in case either the category or the items are not displayed in the App.jsx
// the array is the list of items
List.proptypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}
List.defaultProps = {
    category: "Category",
    items: [],
}


export default List