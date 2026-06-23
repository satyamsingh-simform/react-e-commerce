import type { RestData } from "./RestaurantOption";

type RestCard={
    item:RestData,
}

export default function RestaurantCard(item:RestCard){
    
    return(
        <>
        <h1>cardRest</h1>
        {item}
        </>
    )
}