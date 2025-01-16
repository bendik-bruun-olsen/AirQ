import {
	createContext,
	ReactNode,
	useState,
	Dispatch,
	SetStateAction,
} from "react";

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
