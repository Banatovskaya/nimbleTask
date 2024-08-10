import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  'Authorization': 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn',
};

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: "/" + "contacts/?sort=created:desc",
        headers: headers ,
      }),
      providesTags: ["Contacts"],
    }),
    getContactData: builder.query({
      query: (id) => ({
        url: "/" + "contact/" + id,
        headers: headers ,
      }),
      providesTags: ["Contact"],
    }),
    postContact: builder.mutation({
      query: (body) => ({
        body: body,
        url: "/" + "contact",
        headers: headers,
        method: "POST",
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: "/" + "contact" + "/" + id,
        headers: headers,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    putTags: builder.mutation({
      query: ({id, body}) => ({
        body: body,
        url: "/" + "contacts" + "/" + id + "/tags",
        headers: headers,
        method: "PUT",
      }),
      invalidatesTags: ["Contact", "Contacts"],
    }),
  }),
});

export const {
    useGetContactsQuery,
    useGetContactDataQuery,
    usePostContactMutation,
    useDeleteContactMutation,
    usePutTagsMutation
} = postAPI;