import FoodOption from "./components/FoodOption";
import GroceryOption from "./components/GroceryOption";
import Header from "./components/Header";
import DineoutOption from "./components/DineoutOption";
import RestaurantOption from "./components/RestaurantOption";

export default function App(){
    return(
        <>
            <Header/>
            <FoodOption/>
            <GroceryOption/>
            <DineoutOption/>
            <RestaurantOption/>
        </>
        
    )
}