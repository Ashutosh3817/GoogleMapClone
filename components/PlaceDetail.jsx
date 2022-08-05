import { Badge, Flex } from "@chakra-ui/react";
import { GroundOverlay } from "@react-google-maps/api"; 
import React from "react";
import { Text, Image } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { IoLocation } from "react-icons/io5";

const PlaceDetail = ({ place }) => {
  return (
    <Flex
      bg={"whiteAlpha.900"}
      px={4}
      py={2}
      mb={2}
      shadow="1g"
      direction={"column"}
      alignItems={"start"}
      justifyContent="space-between"
    >
      <Flex justifyContent={"space-between"} width="full">
        <Flex
          direction={"column"}
          justifyContent="start"
          alignItems={"start"}
          width="full"
          px={2}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            justifyContent={"space-between"}
          >
            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              noOfLines={1}
            >
              {place.name}
            </Text>

            <Text fontSize={"sm"} fontWeight={"500"} color={"gray.500"}>
              {place.price}
            </Text>
          </Flex>
          {/* Ratings */}
          <Flex alignItems={"center"} width={"full"}>
            {/* //Rating is in the form of string we convert it in number by casting the string to number */}
            <Rating size="small" value={Number(place.rating)} readOnly />
            {/* //create string literals */}
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
            >{`(${place.num_reviews})`}</Text>
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
              ml={"auto"}
            >
              {place.price_level}
            </Text>
          </Flex>
          {/* Ranking */}
          <Text fontSize={"sm"} fontWeight={"500"} color={"gray.400"}>
            {place.ranking}
          </Text>

          {/* Open or close status */}
          <Text fontSize={"sm"} fontWeight={"500"} color={"gray.600"}>
            {place.open_now_text}
          </Text>

          {/* Types of Food or Dietary_Restrictions */}
          {place?.dietary_restrictions && (
            <Flex width={"full"} flexWrap={"wrap"}>
              {
                // dietary_restrictions is array so we use map
                place.dietary_restrictions.map((n, i) => (
                  <Badge
                    colorScheme={"teal"}
                    cursor={"pointer"}
                    key={i}
                    m={1}
                    fontSize={10}
                  >
                    {n.name}
                  </Badge>
                ))
              }{" "}
            </Flex>
          )}
        </Flex>
        {/* restaurants images */}
        <Image
          objectFit={"cover"}
          width={"120px"}
          height={"120px"}
          rounded="lg"
          src={
            place.photo
              ? place?.photo?.images?.large?.url
              : "https://cdn-icons-png.flaticon.com/512/1187/1187465.png?w=826&t=st=1659622912~exp=1659623512~hmac=15bfbc3aacdd206bf6913cc984e07f45dc0588e0152c67282d4a0db102754450"
          }
        />
      </Flex>
      {
        place?.address && (
          <Flex alignItems={'center'} width={'full'} px={1} my={2}>
            <IoLocation fontSize={20} color='gray' />
            <Text  noOfLines={1}
                  fontSize={'small'}
                  fontWeight={500}
                  color={'gray.700'}
                  ml = {1}      
            >{place.address}</Text>
          </Flex>
        )
      }
    </Flex>
  );
};

export default PlaceDetail;
