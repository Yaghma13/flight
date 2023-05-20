import { Box, Divider } from "@mui/material";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const FlightDetails = () => {
    return (
        <Box sx={{ p: "16px" }}>
            <Box sx={{ fontSize: "16px", fontWeight: "bold", color: "#464646", mt: "4px", mb: "24px" }}>پرواز رفت تهران - کیش</Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ ml: "34px" }}>
                    <img src={"W5.png"} alt="Mahan" width={40} height={34} />
                    <Box>ماهان</Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <PanoramaFishEyeIcon sx={{ color: "#870b1d", fontSize: "0.5rem" }} />
                    <Box sx={{
                        height: 147, borderLeft: "1px dotted #c6c6c6"
                    }}></Box>
                    < PanoramaFishEyeIcon sx={{ color: "#870b1d", fontSize: "0.5rem" }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", height: "172px" }}>
                    <Box sx={{ display: "flex", fontSize: "14px" }}>
                        <Box sx={{ ml: 1, mr: 1 }}>12:45</Box>
                        <Box sx={{ ml: 2 }}>تهران (THR)</Box>
                        <Box sx={{ ml: 2 }}>12 اردیبهشت 1399</Box>
                        <Box sx={{ ml: 2 }}>Imam Khomeini Intl</Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", height: 122, pt: "24px", pb: "6px", pr: "18px", fontSize: "12px" }}>
                        <Box sx={{ display: "flex", pb: "8.5px", pl: "72px", lineHeight: "24px" }}>
                            <Box sx={{ ml: "19px" }}>مدت پرواز</Box>
                            <Box>3 ساعت و 45 دقیقه</Box>
                        </Box>
                        <Box sx={{ display: "flex", pb: "8.5px", pl: "72px", lineHeight: "24px" }}>
                            <Box sx={{ ml: "19px" }}>نوع هواپیما</Box>
                            <Box>Airbus A320</Box>
                        </Box>
                        <Box sx={{ display: "flex", pb: "8.5px", pl: "72px", lineHeight: "24px" }}>
                            <Box sx={{ ml: "19px" }}>کلاس پرواز</Box>
                            <Box>اکونومی</Box>
                        </Box>
                        <Box sx={{ display: "flex", pb: "8.5px", pl: "72px", lineHeight: "24px" }}>
                            <Box sx={{ ml: "19px" }}>نوع پرواز</Box>
                            <Box>سیستمی</Box>
                        </Box>
                        <Box sx={{ display: "flex", pb: "8.5px", pl: "72px", lineHeight: "24px" }}>
                            <Box sx={{ ml: "19px" }}>بار مجاز</Box>
                            <Box>20 کیلوگرم</Box>
                        </Box>
                        <Box sx={{ display: "flex", pb: "8.5px", pl: "72px", lineHeight: "24px" }}>
                            <Box sx={{ ml: "19px" }}>کلاس نرخی</Box>
                            <Box>A</Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", pb: "8.5px", pl: "72px", lineHeight: "24px" }}>
                            <Box sx={{ ml: "19px" }}>استرداد</Box>
                            <Box>غیر قابل استرداد</Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", fontSize: "14px" }}>
                        <Box sx={{ ml: 1, mr: 1 }}>12:45</Box>
                        <Box sx={{ ml: 2 }}>مشهد</Box>
                        <Box sx={{ ml: 2 }}>13 اردیبهشت 1399</Box>
                        <Box sx={{ ml: 2 }}>Mashhad Airport</Box>
                    </Box>
                </Box>

            </Box>
            <Box sx={{
                fontSize: "14px", color: "#464646",
                display: "flex", alignItems: "center", border: "1px solid #eeeeee", mt: "32px", width: "860px",

            }}>
                <Box sx={{ display: "flex", borderLeft: "1px solid #eee", pl: "12px", height: "100%" }}>
                    <Box sx={{ mr: "16px", my: "13px" }}>2 x بزرگسال</Box>
                    <Box sx={{ mr: "8px", ml: "16px", my: "13px" }}>1370000 تومان</Box>
                </Box>
                <Box sx={{ display: "flex", borderLeft: "1px solid #eee", pl: "12px", height: "100%" }}>
                    <Box sx={{ mr: "16px", my: "13px" }}>1 x کودک</Box>
                    <Box sx={{ mr: "8px", ml: "16px", my: "13px" }}>1370000 تومان</Box>
                </Box>
                <Box sx={{ display: "flex", borderLeft: "1px solid #eee", pl: "12px", height: "100%" }}>
                    <Box sx={{ mr: "16px", my: "13px" }}>1 x نوزاد</Box>
                    <Box sx={{ mr: "8px", ml: "16px", my: "13px" }}>1370000 تومان</Box>
                </Box>
                <Box sx={{ display: "flex", fontWeight: "bold" }}>
                    <Box sx={{ mr: "32px", my: "13px" }}>مجموع:</Box>
                    <Box sx={{ color: "#1773dc", mr: "16px", ml: "16px", my: "13px" }}>1370000 تومان</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FlightDetails;