/*const ItemList = (props) => {
    return (
        <div className="ListBody">
            {props.list.map((item) => {
                return (
                    <DrinkItem item={item} />
                )
            })}
        </div>
)
};*/

function ItemList({ list, removeFromList, addToList, add = false }) {
    return (
        <ul className="itemlist">
            {list.map((item, index) => (
                <li key={index}>
                    {item.type} - {item.caffeine}mg
                    {add ? (
                        <button onClick={() => addToList(item)}>Add</button>
                    ) : (
                        <button onClick={() => removeFromList(index)}>Remove</button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;