import React, { useState } from "react";
import { Box, Button, Badge } from "@mui/material";

function ButtonToggler() {
  const [selectedButton, setSelectedButton] = useState("Monthly");

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 2,
        border: "1px solid",
        borderColor: "gray",
        borderRadius: 50,
        height: "1.8rem",
        width:'15rem'
      }}
    >
      <Button
        onClick={() => handleButtonClick("Monthly")}
        sx={{
          fontWeight: "bold",
          width: "50%",
          backgroundColor:
            selectedButton === "Monthly" ? "darkturquoise" : "white",
          borderRadius: "50px 0 0 50px",
          textTransform: "capitalize",
          color: selectedButton === "Monthly" ? "black" : "darkturquoise",
          fontSize: "12px",
        }}
      >
        Monthly
      </Button>
      <Button
        onClick={() => handleButtonClick("Annual")}
        sx={{
          fontWeight: "bold",
          width: "50%",
          borderRadius: "0 50px 50px 0",
          textTransform: "capitalize",
          color: selectedButton === "Annual" ? "white" : "black",
          fontSize: "12px",
          backgroundColor: selectedButton === "Annual" ? "darkturquoise" : "white",
        }}
      >
        <Badge
        badgeContent={
            <span style={{ color: "greenyellow", marginTop:'3px' }}>{'-10%'}</span>
          }
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          Annual
        </Badge>
      </Button>
    </Box>
  );
}

export default ButtonToggler;
