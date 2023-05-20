import FiltersList from "./Filters";
import SearchResult from "./SearchResult";
import classes from "./Main.module.scss";
import Data from "../flights.json";
import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";

const Main = () => {
    const [data, setData] = useState(Data);
    const [filteredData, setFilteredData] = useState(data.pricedItineraries);
    const [filtersList, setFiltersList] = useState([]);
    const desktopMode = useMediaQuery('(min-width:800px)');

    const handleChangeFilter = (filter) => {

        if (filtersList.includes(filter)) {
            if (filter === "اکونومی" && filtersList.includes("بیزینس")) {
                const result = data.pricedItineraries.filter(d => d.originDestinationOptions[0].flightSegments[0].cabinClassCode === "C");
                setFilteredData(result);
            }
            else if (filter === "اکونومی" && !filtersList.includes("بیزینس")) {
                setFilteredData(data.pricedItineraries);
            }
            if (filter === "بیزینس" && filtersList.includes("اکونومی")) {
                const result = data.pricedItineraries.filter(d => d.originDestinationOptions[0].flightSegments[0].cabinClassCode === "Y");
                setFilteredData(result);
            }
            else if (filter === "بیزینس" && !filtersList.includes("اکونومی")) {
                setFilteredData(data.pricedItineraries);
            }
            setFiltersList(filtersList.filter(fil => fil !== filter));
        }
        else {
            if (filter === "اکونومی" && !filtersList.includes("بیزینس")) {
                const result = filteredData.filter(d => d.originDestinationOptions[0].flightSegments[0].cabinClassCode === "Y");
                setFilteredData(result);
            }
            else if (filter === "اکونومی" && filtersList.includes("بیزینس")) {
                setFilteredData(data.pricedItineraries);
            }
            if (filter === "بیزینس" && !filtersList.includes("اکونومی")) {
                const result = filteredData.filter(d => d.originDestinationOptions[0].flightSegments[0].cabinClassCode === "C");
                setFilteredData(result);
            }
            else if (filter === "بیزینس" && filtersList.includes("اکونومی")) {
                setFilteredData(data.pricedItineraries);
            }
            setFiltersList([...filtersList, filter]);
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "#f3f3f3" }} dir="rtl">
            {desktopMode && <FiltersList onChangeFilter={handleChangeFilter} />}
            <SearchResult data={filteredData} additionalData={data.additionalData} />
        </Box>
    )
}

export default Main;