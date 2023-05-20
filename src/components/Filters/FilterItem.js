import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Box, Checkbox, Collapse, FormControlLabel, Typography } from "@mui/material"
import { useState } from "react";

const FilterItem = ({ filterTitle, filterItems, onChoose }) => {
    const [expanded, setExpanded] = useState(true);

    const handleChange = (filterItem) => {
        onChoose(filterItem);
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">{filterTitle}</Typography>
                {expanded ? <ExpandLess onClick={() => setExpanded(!expanded)} /> : <ExpandMore onClick={() => setExpanded(!expanded)} />}
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {filterItems.map((filterItem, index) => {
                        return <FormControlLabel key={index} control={<Checkbox onChange={() => handleChange(filterItem)} />} label={filterItem} />
                    })}

                </Box>
            </Collapse>
        </>
    )
}

export default FilterItem;