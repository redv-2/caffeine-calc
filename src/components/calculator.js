import DrinkList from "./drinklist";
import ItemList from "./itemlist";
import { useState } from "react";

function Calculator() {
    //let personallist = [{type:"Add here!",caffeine:0}];
    const [personallist, setPersonalList] = useState([{type:"Add here!",caffeine:0}]);

    const addToList = (item) => {
        setPersonalList([...personallist, item])
    }
    const removeFromList = (index) => {
        const newList = personallist.filter((_, i) => i !== index);
        setPersonalList(newList);
    }

    const totalCaffeine = personallist.reduce(
        (total, drink) => total + drink.caffeine,
        0
    );

    let status = "";
    if (totalCaffeine == 0) {
        status = "None!"
    } else if (totalCaffeine < 200) {
        status = "Fine!"
    } else if (totalCaffeine < 400) {
        status = "Not bad!"
    } else if (totalCaffeine < 600) {
        status = "Concerning!"
    } else {
        status = "Far too much!"
    };

    return (
        <>
            <div className="DrinkList">
                <h2>Daily Drinks</h2>
                <hr />
                <ItemList list={personallist} removeFromList={removeFromList} addToList={addToList} />
                <hr />
                <h3>Total caffeine per day...</h3>
                <h2>{totalCaffeine}mg</h2>
                <hr />
                <h3>Your caffeine intake is...</h3>
                <h2>{status}</h2>
            </div>
            <div className='DrinkMenu'>
                <DrinkList addToList={addToList} />
            </div>
        </>
    );
};

export default Calculator;