import { Provider } from "react-redux";
import { useGetUserQuery } from "./services/api";
import { store } from "./store";
import Profile from "./containers/Profile";

export type User = {
	id: number,
	name: string,
	avatar_url: string,
	bio: string
}

function App() {

	return <Provider store={store}>
		
		<Profile/>
		</Provider>;
}

export default App;
