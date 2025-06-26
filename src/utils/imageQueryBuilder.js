function buildImageQuery({ city, condition, hour}) {
    let timeOfDay = "day";
    if(hour < 6 ) timeOfDay = "night";
    else if (hour < 12) timeOfDay = "morning";
    else if (hour < 18) timeOfDay = "afternoon";
    else timeOfDay ="sunset";

    const query = `${city} ${condition} ${timeOfDay}`
    return query;
}
export { buildImageQuery };