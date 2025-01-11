import {
	createContext,
	ReactNode,
	useState,
	Dispatch,
	SetStateAction,
	useEffect,
} from "react";

// interface LocationContextType {
// 	selectedLocation: APIResponse["data"] | null;
// 	setSelectedLocation: Dispatch<SetStateAction<APIResponse["data"] | null>>;
// }

// const CityContext = createContext<LocationContextType>({
// 	selectedLocation: null,
// 	setSelectedLocation: () => {},
// });

interface LocationContextType {
	selectedLocation: { name: string; uid: string };
	setSelectedLocation: Dispatch<SetStateAction<{ name: string; uid: string }>>;
}

const LocationContext = createContext<LocationContextType>({
	selectedLocation: { name: "", uid: "" },
	setSelectedLocation: () => {},
});

interface Props {
	children?: ReactNode;
}

function ContextProvider({ children }: Props) {
	const [selectedLocation, setSelectedLocation] = useState({
		name: "Kannik, Stavanger, Norway",
		uid: "2657",
	});

	useEffect(() => {
		console.log("(ContextProvider) selectedLocation: ", selectedLocation);
	}, [selectedLocation]);

	return (
		<LocationContext.Provider
			value={{
				selectedLocation: selectedLocation,
				setSelectedLocation: setSelectedLocation,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
}

export { ContextProvider, LocationContext };
