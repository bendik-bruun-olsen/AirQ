import {
	createContext,
	ReactNode,
	useState,
	Dispatch,
	SetStateAction,
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
	selectedLocation: string;
	setSelectedLocation: Dispatch<SetStateAction<string>>;
}

const LocationContext = createContext<LocationContextType>({
	selectedLocation: "",
	setSelectedLocation: () => {},
});

interface Props {
	children?: ReactNode;
}

function ContextProvider({ children }: Props) {
	const initialLocation = "stavanger";
	const [selectedLocation, setSelectedLocation] =
		useState<string>(initialLocation);

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
