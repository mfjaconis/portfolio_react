import { Provider } from "react-redux";
import { useGetUserQuery } from "./services/api";
import { store } from "./store";

export type User = {
	name: string;
	avatar_url: string;
};

function App() {
	const { data: user, isLoading } = useGetUserQuery();

	if (isLoading) return <h2>Carregando...</h2>;

	return <Provider store={store}>{<h1>{user.name}</h1>}</Provider>;
}

export default App;
