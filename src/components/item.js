const DrinkItem = (props) => {
    return (
        <>
            <h3>{props.item.type}</h3>
            <p>{props.item.caffeine}mg</p>
        </>
    )
}

export default DrinkItem;