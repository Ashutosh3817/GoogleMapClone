import { Flex,Box,Skeleton,SkeletonCircle,SkeletonText } from "@chakra-ui/react";
import React from "react";
import PlaceDetail from "./PlaceDetail";

//we fecth all the information of restaurants

const List = ({ places, isLoading }) => {
  if (isLoading)
    return (
      //we skeleton of Chakra UI
      <Flex
        direction={"column"}
        bg={"whiteAlpha.900"}
        width={"34vw"}
        height="100vh"
        position={"absolute"}
        left={0}
        top={0}
        zIndex={1}
        overflow="hidden"
        px={2}
      >
        <Box padding="6" boxShadow="lg" bg="white" marginTop={16}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" marginTop={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" marginTop={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" marginTop={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" marginTop={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </Flex>
    ); 

    //if we donot able to find the information 

    return (
      <Flex
        direction={"column"}
        bg={"whiteAlpha.900"}
        width={"34vw"}
        height="100vh"
        position={"absolute"}
        left={0}
        top={0}
        zIndex={1}
        overflow="hidden"
        px={2}
      >
        <Flex flex={1} overflowY={'scroll'} mt={16} direction={'column'}>
           {
            places && places.map((place,i)=> <PlaceDetail place={place} key={i}/>)
           }

        </Flex>
      </Flex>
    );
};

export default List;
