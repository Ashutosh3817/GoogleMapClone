// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";


//it's asynchronous method it should wait uptil the data is successfully fetched\
//sw=> south west coordinate information (it gives the information of latitude and lonigitude of south-west coordinate);
//ne=> north  east coordinate information (it gives the information of latitude and lonigitude of south-west coordinate);
export const getPlacesData = async (type,sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
      ,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key":
            "41d3fea22emsha003791abb1f9e9p1571fajsn94493f1d471d",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};
// import axios from "axios";

// const url =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(
//       `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
//       {
//         params: {
//           bl_latitude: sw.lat,
//           tr_latitude: ne.lat,
//           bl_longitude: sw.lng,
//           tr_longitude: ne.lng,
//         },
//         headers: {
//           "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//           "x-rapidapi-key":
//             "Y41d3fea22emsha003791abb1f9e9p1571fajsn94493f1d471d"
//             ,
//         },
//       }
//     );
//     return data;
//   } catch (error) {
//     console.log(`Fetch data Error : ${error}`);
//   }
// };