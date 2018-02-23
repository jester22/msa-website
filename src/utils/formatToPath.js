const formatToPath = (title) => {
	return title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}

export default formatToPath;