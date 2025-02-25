import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { User } from "../App";

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.github.com/users",
	}),
	endpoints: (builder) => ({
		getUser: builder.query<User[], void>({
			query: () => "mfjaconis",
		}),
	}),
});

export const { useGetUserQuery } = api;

export default api;
