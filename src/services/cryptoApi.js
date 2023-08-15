import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '78ab0cbfb8msh89c3acccef0e94ap171301jsn94d41c7bcf4d'

};

const  baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
baseQuery: fetchBaseQuery({ baseUrl }),
endpoints: (builder) => ({
  getCryptos: builder.query({
    query: (count) => createRequest(`/coins?limit=${count}`),
  })
})
});

export const { useGetCryptosQuery } = cryptoApi;