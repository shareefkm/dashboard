import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function NameLabel() {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "2px solid",
        bgcolor: "white",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Avatar
        alt="Logo"
        src="/logo.png"
        sx={{ width: 40, height: 40, marginRight: 1 }}
      />

      <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color:'black' }}>
       XYZ Enterprisec pvt. Ltd
      </Typography>
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        bgcolor: "white",
        boxShadow: 3,
        borderRadius: 2,
        ml:1
      }}
    >
      <IconButton sx={{ marginLeft: 1, fontSize:3, color:'black' }}>
        <KeyboardArrowDownIcon />
      </IconButton>
    </Box>
    </Box>
  );
}

export default NameLabel;
