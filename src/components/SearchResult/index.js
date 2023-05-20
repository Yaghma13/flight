import { useEffect, useState } from "react";
import Flight from "./Flight"
import { Box, MenuItem, Select, useMediaQuery } from "@mui/material";
import moment from "jalali-moment";


const SearchResult = ({ data, additionalData }) => {

    const [sortType, setSortType] = useState(1);
    const desktopMode = useMediaQuery('(min-width:800px)');

    const departureTime = data[0].originDestinationOptions[0].flightSegments[0].departureDateTime;
    const date = moment(departureTime, 'YYYY/MM/DD').locale('fa');

    const handleChangeSortType = (type) => {
        setSortType(type);
        let temp = data;
        temp.sort((a, b) => {
            if (type === 1) {
                const aPrice = a.airItineraryPricingInfo.ptcFareBreakdown[0].passengerFare.totalFare;
                const bPrice = b.airItineraryPricingInfo.ptcFareBreakdown[0].passengerFare.totalFare;
                return aPrice - bPrice;
            }
            else {
                const aTime = a.originDestinationOptions[0].flightSegments[0].departureDateTime;
                const bTime = b.originDestinationOptions[0].flightSegments[0].departureDateTime;
                return Date.parse(aTime) - Date.parse(bTime);
            }
        });
    }
    return (
        <Box sx={{ maxWidth: 894, width: "100%" }}>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#464646" }}>بلیط هواپیمای تهران به کیش</h1>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", fontSize: "14px", color: "#464646" }}>
                    <Box sx={{ ml: "4px" }}>{data?.length} پرواز یافت شد.</Box>
                    <Box>{date.format('dddd, D MMMM YYYY')}</Box>
                </Box>
                {desktopMode && <Box sx={{ display: "flex", alignItems: "center", mb: "16px" }}>
                    <Box sx={{ fontSize: "14px", color: "#8d8d8d", ml: "14px" }}>مرتب سازی</Box>
                    <Select sx={{ width: "155px", height: "40px", fontSize: "14px", fontFamily: "IRANSans", color: "#464646", backgroundColor: "#fff" }}
                        value={sortType}
                        onChange={(e) => handleChangeSortType(e.target.value)}
                    >
                        <MenuItem sx={{ fontSize: "14px", fontFamily: "IRANSans" }} value={1}>قیمت</MenuItem>
                        <MenuItem sx={{ fontSize: "14px", fontFamily: "IRANSans" }} value={2}>زمان پرواز</MenuItem>
                    </Select>
                </Box>}
            </Box>
            {
                data?.map((flightItem, index) => <Flight key={index} data={flightItem} additionalData={additionalData} />)
            }
        </Box>
    )
}

export default SearchResult;