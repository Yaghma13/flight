import { Box, Divider } from "@mui/material";
import { useState } from "react";
import FlightDetails from "./FlightDetails";

const FlightDetailsPanel = () => {
    const [firstTab, setFirstTab] = useState(true)
    return (
        <Box sx={{ position: "relative" }}>
            <Box sx={{ display: "flex" }}>
                <Box sx={{
                    width: "121px",
                    height: "20px",
                    margin: "27.5px 15.5px 0 1px",
                    padding: "6.5px 12px 11.5px 12px",
                    borderRadius: "4px",
                    backgroundColor: "#1773dc",
                    color: "#fff",
                    fontSize: "14px",
                    textAlign: "center"
                }} onClick={() => setFirstTab(true)}>جزییات پرواز</Box>
                <Box sx={{ margin: "32px 15.5px 0 1px" }} onClick={() => setFirstTab(false)}>قوانین و شرایط</Box>
            </Box>
            <Divider />
            <Box sx={{ position: "absolute" }}>
                {firstTab ? <FlightDetails /> : <Box></Box>}
            </Box>
        </Box>
    )
}

export default FlightDetailsPanel;