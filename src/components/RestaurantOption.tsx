import { restaurantsData } from "../utils/restaurantData";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantOption(){
    return(
        <section className="flex flex-col container mx-auto mt-30 mb-30 font-bold text-2xl text-gray-900">
            <h1 className="mb-10">Discover best restaurants on Dineout</h1>
            <div className="flex flex-nowrap overflow-x-auto gap-10">
                {restaurantsData.map((restItem)=><RestaurantCard key={restItem.info.id} restItem={restItem}/>)}
            </div>
        </section>
    )
}