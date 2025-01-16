const capitalizeWords = (text: string): string => {
	return text
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
};

const formatDate = (date: string) => {
	return new Intl.DateTimeFormat("no-NO", {
		month: "short",
		day: "numeric",
	}).format(new Date(date));
};

export { capitalizeWords, formatDate };
