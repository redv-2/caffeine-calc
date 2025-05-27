import drinkslist from "./data/drinkdata";
import ItemList from "./itemlist";

function DrinkList({ addToList }) {
    return (
        <div className="menu">
            <h2>Drink List</h2>
            <hr />
            <ItemList list={drinkslist} add={true} addToList={addToList} />
            <hr />
        </div>
    );
};

export default DrinkList;