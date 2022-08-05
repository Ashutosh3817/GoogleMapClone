import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
//import { getPlacesData } from "./api";
import Head from "next/head";
import { getPlacesData } from "./api";
//Intead of hardcoded place informartion we make the state of place


const Home = () => {
  const [places,setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  // for set the filtered data
  const[filteredPlaces,setFilteredPlaces] = useState([]);

  //get information acoording to our location
  const[bounds,setbounds] = useState(null);
  const[type,setType] = useState("restaurants");
  const[ratings,setRatings] = useState("");

  //we put usesatte true because if it is loading then we some changes in list.jsx

  const[isLoading,setIsLoading] = useState(false);

  //because of the useEffect popups will be generated i.e this wants to know the location of you

  useEffect(()=>{
    //get the users current location or initial login
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      console.log({latitude,longitude});
      setCoordinates({lat:latitude,lng:longitude});
    });
  },[]);

  // Filter Data According to Ratings
useEffect(()=>{
  const filteredData = places.filter((place)=> place.rating > ratings);
  setFilteredPlaces(filteredData)
},[ratings])

  useEffect(() => {
    //initially it should be null but only pass the information of data
    // we pass only south west and north east because co-ordiantes or latitide or longitude of the north east and north west are same and south east lat lan are same to south west lat lon
     setIsLoading(true);
    getPlacesData(type,bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

  //It is nothing but flex box with default flex box properties
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Head>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBSDYW6vRv_gUBkvPkNQp24gZNTY6pp8ZE"></script>
      </Head>
      {/* //we destructure information in header.jsx file */}
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />
      {/* pass these two information in list */}
      <List
        places={filteredPlaces.length ? filteredPlaces : places}
        isLoading={isLoading}
      />
      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setbounds={setbounds}
        places={filteredPlaces.length ? filteredPlaces : places}
      />
    </Flex>
  );
};

export default Home;
