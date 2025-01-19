import {
	createContext,
	ReactNode,
	useState,
	Dispatch,
	SetStateAction,
	useEffect,
} from "react";

interface LocationContextType {
	selectedLocation: { uid: string };
	setSelectedLocation: Dispatch<SetStateAction<{ uid: string }>>;
}

const LocationContext = createContext<LocationContextType>({
	selectedLocation: { uid: "" },
	setSelectedLocation: () => {},
});

interface Props {
	children?: ReactNode;
}

function ContextProvider({ children }: Props) {
	const [selectedLocation, setSelectedLocation] = useState(() => {
		const storedLocation = localStorage.getItem("selectedLocation");
		return storedLocation ? JSON.parse(storedLocation) : { uid: "2657" };
	});

	useEffect(() => {
		localStorage.setItem("selectedLocation", JSON.stringify(selectedLocation));
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
