import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAppConfig } from '../../types'

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://669949882069c438cd71df70.mockapi.io' }),
    endpoints: (builder) => ({
        getConfig: builder.query<IAppConfig, any>({
            query: () => `/appconfig/2`,
        }),
    }),
})

export const { useGetConfigQuery } = appApi
export default appApi;