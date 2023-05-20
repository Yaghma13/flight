import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import FilterItem from "./FilterItem";

const FiltersList = ({ onChangeFilter }) => {
    return (
        <Box sx={{ width: "282px", ml: "24px", mt: "32px", fontSize: "14px", color: "#464646" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>مدت زمان اعتبار نتایج</Box>
                <Box>14:25</Box>
            </Box>
            <Card sx={{ borderRadius: 0, boxShadow: "none" }}>
                <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: "13px" }}>
                        <Box sx={{ fontWeight: "bold" }}>فیلترها</Box>
                        <Box sx={{ color: "#1773dc" }} variant="body1">حذف فیلترها</Box>
                    </Box>
                    <Divider sx={{ mx: "-16px", mb: "16px" }} />
                    <FilterItem filterTitle={"کلاس پروازی"} filterItems={["اکونومی", "بیزینس"]} onChoose={onChangeFilter} />
                    {/* <Divider />
                    <FilterItem filterTitle={"نوع پرواز"} filterItems={["پروازهای سیستمی", "پروازهای چارتری"]} onChoose={onChangeFilter} /> */}
                </CardContent>
            </Card>
        </Box>
    )
}

export default FiltersList;