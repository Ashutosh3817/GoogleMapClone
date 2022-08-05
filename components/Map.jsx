import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import { BiX } from "react-icons/bi";


const Map = ({ coordinates, setCoordinates, setbounds, places }) => {
  //click event on the map
  const [isCard, setIsCard] = useState(false);
  const [cardData, setCardData] = useState(null);

  return (
    <Box width={"full"} height={"full"}>
      {/* for loading the map */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        //helps you to customize your map
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setbounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        //we are getting the id of the particular object
        //child me index no pass ho rha hai
        onChildClick={( child ) => {
          setCardData(places[child]);
          setIsCard(true);
        }}
      >
        {places?.map((place, i) => (
          <Box
            //because latitude is in string so we typecast
            lat={Number(place?.latitude)}
            lng={Number(place?.longitude)}
            position={"relative"}
            cursor="pointer"
          >
            <IoLocation color="red" fontSize={30}></IoLocation>
          </Box>
        ))}

        {isCard && (
          <Box
            width={"200px"}
            height={"150px"}
            bg={"whiteAlpha.900"}
            position={"absolute"}
            top={-12}
            left={0}
            shadow={"lg"}
            rounded={"lg"}
          >
            {/* Image */}
            <Image
              objectFit={"cover"}
              width={"full"}
              height={"120px"}
              rounded="lg"
              src={
                cardData?.photo
                  ? cardData?.photo?.images?.large?.url
                  : "https://cdn-icons-png.flaticon.com/512/1187/1187465.png?w=826&t=st=1659622912~exp=1659623512~hmac=15bfbc3aacdd206bf6913cc984e07f45dc0588e0152c67282d4a0db102754450"
              }
            />
            {/* Place or Restaurants or Hotels or Attractions Name */}
            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              isTruncated
            >
              {cardData?.name}
            </Text>
            {/* For deleting the popup about the any information on the map */}

            <Box
              cursor={"pointer"}
              position={"absolute"}
              top={2}
              right={2}
              width={"30px"}
              height={"30px"}
              bg={"red.300"}
              rounded={"full"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={() => {
                setIsCard(false);
              }}
            >
              <BiX fontSize={20} />
            </Box>
          </Box>
        )}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
// import { Box, Image, Text } from "@chakra-ui/react";
// import React, { useState } from "react";
// import GoogleMapReact from "google-map-react";
// import { IoLocation } from "react-icons/io5";
// import { BiX } from "react-icons/bi";

// const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
//   const [isCard, setIsCard] = useState(false);
//   const [cardData, setCardData] = useState(null);
//   return (
//     <Box width={"full"} height={"full"}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "Your_API_KEY" }}
//         defaultCenter={coordinates}
//         center={coordinates}
//         defaultZoom={10}
//         margin={[50, 50, 50, 50]}
//         options={""}
//         onChange={(e) => {
//           setCoordinates({ lat: e.center.lat, lng: e.center.lng });
//           setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//         onChildClick={(child) => {
//           setCardData(places[child]);
//           setIsCard(true);
//         }}
//       >
//         {places?.map((place, i) => (
//           <Box
//             lat={Number(place.latitude)}
//             lng={Number(place.longitude)}
//             position={"relative"}
//             cursor="pointer"
//           >
//             <IoLocation color="red" fontSize={30} />
//           </Box>
//         ))}

//         {isCard && (
//           <Box
//             width={"200px"}
//             height={"150px"}
//             bg={"whiteAlpha.900"}
//             position={"absolute"}
//             top={-12}
//             left={0}
//             shadow={"lg"}
//             rounded={"lg"}
//           >
//             <Image
//               objectFit={"cover"}
//               width={"full"}
//               height={"120px"}
//               rounded="lg"
//               src={
//                 cardData?.photo
//                   ? cardData?.photo?.images?.large?.url
//                   : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
//               }
//             />

//             <Text
//               textTransform={"capitalize"}
//               width={"40"}
//               fontSize={"lg"}
//               fontWeight={"500"}
//               isTruncated
//             >
//               {cardData.name}
//             </Text>

//             <Box
//               cursor={"pointer"}
//               position={"absolute"}
//               top={2}
//               right={2}
//               width={"30px"}
//               height={"30px"}
//               bg={"red.300"}
//               rounded={"full"}
//               display={"flex"}
//               justifyContent={"center"}
//               alignItems={"center"}
//               onClick={() => {
//                 setIsCard(false);
//               }}
//             >
//               <BiX fontSize={20} />
//             </Box>
//           </Box>
//         )}
//       </GoogleMapReact>
//     </Box>
//   );
// };

// export default Map;