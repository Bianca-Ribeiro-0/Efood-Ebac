import { useState, useEffect } from "react";
import { DadosRestaurante } from "../../components/CardRestaurants";
import Header from "../../components/Header";
import RestList from "../../Containers/RestaurantList";

import { useGetRestaurantsQuery } from "../../services/api";

const Home = () => {

  const {data: restaurante, isLoading} = useGetRestaurantsQuery()

  if(restaurante){
    return(
        <>
            <Header></Header>
            <RestList restaurants={restaurante}></RestList>
        </>
    )    
  }

  return <h3>CARREGANDO...</h3>

}

export default Home