
import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard";

export type RestData={
    info:{
        areaName:string,
        avgRating:number,
        cloudinaryImageId:string,
        cuisines:string[],
        id:string,
        name:string,
        sla:{
            deliverTime:number,
        },
    }
}

type ApiResponse = {
    data: {
        cards: {
            card?: {
                card?: {
                    gridElements?: {
                        infoWithStyle?: {
                            restaurants: RestData[];
                        };
                    };
                };
            };
        }[];
    };
};

export default function RestaurantOption(){
    const [restData,setRestData]=useState<RestData[]>([]);
    useEffect(()=>{
        async function fetchData(){
            const proxyServer = "https://corsproxy.io/?";
            const swiggyAPI='https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            const response=await fetch(proxyServer+swiggyAPI);
            const dataRes:ApiResponse=await response.json();
            console.log('api-data:',dataRes.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setRestData(dataRes.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    },[])

    return(
        <>
        <h1>hi</h1>
        {restData.map((item)=>(
            <RestaurantCard key={item.info.id} item={item}/>
        ))}
        </>
    )
}