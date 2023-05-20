import { Box, Button, Card, CardContent, Collapse, Divider, Typography } from "@mui/material";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { useState } from "react";
import FlightDetailsPanel from "./FlightDetailsPanel";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import moment from "jalali-moment";
import { convertEnglishNumberToPersian } from "../../utils/persian";


const Flight = ({ data, additionalData }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => { setExpanded(!expanded); };

    const departureTime = data.originDestinationOptions[0].flightSegments[0].departureDateTime;
    const arrivalTime = data.originDestinationOptions[0].flightSegments[0].arrivalDateTime;
    const departureHour = departureTime.slice(11, 16);
    const arrivalHour = arrivalTime.slice(11, 16);

    const price = data.airItineraryPricingInfo.ptcFareBreakdown[0].passengerFare.totalFare;
    const isCharter = data.isCharter;

    const journeyDuration = data.originDestinationOptions[0].journeyDurationPerMinute;
    const journeyDurationHour = Math.floor(journeyDuration / 60);
    const journeyDurationMinute = journeyDuration - (journeyDurationHour * 60);
    const departureAirportLocationCode = data.originDestinationOptions[0].flightSegments[0].departureAirportLocationCode;
    const departureAirportLocationIndex = additionalData.airports.findIndex(d => d.iata === departureAirportLocationCode);
    const departureAirportLocation = additionalData.airports[departureAirportLocationIndex].cityFa;
    const arrivalAirportLocationCode = data.originDestinationOptions[0].flightSegments[0].arrivalAirportLocationCode;
    const arrivalAirportLocationIndex = additionalData.airports.findIndex(d => d.iata === arrivalAirportLocationCode);
    const arrivalAirportLocation = additionalData.airports[arrivalAirportLocationIndex].cityFa;
    const airlineCode = data.originDestinationOptions[0].flightSegments[0].operatingAirline.code;
    const airlineIndex = additionalData.airlines.findIndex(d => d.iata === airlineCode)
    const airlineName = additionalData.airlines[airlineIndex].nameFa;
    const flightNumber = data.originDestinationOptions[0].flightSegments[0].flightNumber;
    const remainingSeats = data.originDestinationOptions[0].flightSegments[0].seatsRemaining;
    const flightClass = data.originDestinationOptions[0].flightSegments[0].cabinClassCode;

    return (
        <Card sx={{ width: "100%", height: expanded ? 584 : 185, marginBottom: 2, borderRadius: 0, boxShadow: "none" }}>
            <CardContent sx={{ '&.MuiCardContent-root': { padding: 0 } }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "space-between" }}>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", mt: "46px" }}>
                            <Box sx={{ display: "flex", alignItems: "center", mr: "18px", ml: "138px" }}>
                                <img src="W5.png" alt="Logo" />
                                <Box sx={{ mr: "16px", fontSize: "14px", lineHeight: 2, color: "#464646" }}>
                                    {airlineName}
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Box sx={{ fontSize: "24px", fontWeight: "bold" }}>{convertEnglishNumberToPersian(departureHour)}</Box>
                                    <Box sx={{ mr: "16px", fontSize: "14px", lineHeight: 2, color: "#464646" }}>{departureAirportLocation}</Box>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Box sx={{ fontSize: "12px", color: "#6f6f6f" }}>{convertEnglishNumberToPersian(journeyDurationHour)} ساعت و {convertEnglishNumberToPersian(journeyDurationMinute)} دقیقه</Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", px: "32px" }}>
                                        <PanoramaFishEyeIcon sx={{ color: "#1773dc", fontSize: 12 }} />
                                        <Box sx={{ width: 147, borderBottom: "1px solid #c6c6c6", mb: "6px", mx: "-1px" }}></Box>
                                        <PanoramaFishEyeIcon sx={{ color: "#ff7913", fontSize: 12 }} />
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Box sx={{ fontSize: "24px", fontWeight: "bold" }}>{convertEnglishNumberToPersian(arrivalHour)}</Box>
                                    <Box sx={{ mr: "16px", fontSize: "14px", lineHeight: 2, color: "#464646" }}>{arrivalAirportLocation}</Box>
                                </Box>
                            </Box>
                        </Box>
                        <Divider sx={{ mr: "68px", ml: "16px", mb: "-8px" }} orientation="vertical" flexItem />
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box sx={{ fontSize: "12px", color: "#8d8d8d", mb: "9px", mt: "16px" }}>یک نفر</Box>
                            <Box sx={{ display: "flex", mb: "10px" }}>
                                <Box sx={{ fontSize: "20px", fontWeight: "bold", color: "#1773dc", ml: "8px" }}>{convertEnglishNumberToPersian(price)}</Box>
                                <Box sx={{ fontsize: "12px", color: "#8d8d8d" }}>تومان</Box>
                            </Box>
                            <Button sx={{ fontFamily: "IRANSans", fontsize: "14px", fontWeight: "normal", width: "169px", height: "40px", ml: "16px" }} variant="contained">انتخاب بلیط</Button>
                        </Box>
                    </Box>
                    <Divider sx={{ mt: 1, mb: 1 }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                        <Box sx={{ display: "flex", color: "#464646", mr: "16px" }}>
                            {isCharter && <Box sx={{ ml: "16px" }}>چارتر</Box>}
                            <Box sx={{ ml: "16px" }}>{flightClass === "Y" ? "اکونومی" : "بیزینس"}</Box>
                            <Box sx={{ ml: "16px" }}>{remainingSeats} صندلی خالی</Box>
                            <Box sx={{ ml: "16px" }}>شماره پرواز: {flightNumber}</Box>
                            <Box sx={{ ml: "16px" }}>تأمین کننده: پرایس لاین</Box>

                        </Box>
                        <Box
                            onClick={handleExpandClick}
                            sx={{ color: "#ff7913", display: "flex", ml: "60px" }}
                        >
                            جزییات بیشتر
                            {expanded ? <ExpandLess /> : <ExpandMore />}
                        </Box>
                    </Box>
                </Box>


                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <FlightDetailsPanel />
                </Collapse>
            </CardContent>
        </Card >
    )
}

export default Flight;