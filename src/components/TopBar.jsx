import React, { useState } from "react";
import {
  AppBar,
  Box,
  Grid,
  Grow,
  IconButton,
  ToggleButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import NameLabel from "./NameLabel";
import SideBar from "./SideBar";
import UseWidthSize from "./UseWidthSize";

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [toggleOpen, setToggleOpen] = useState(false);
  const widthSize = UseWidthSize()

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openToggle = () => {
    setToggleOpen(!toggleOpen);
  };
  const style = {
    bgColor: "black",
    zIndex: 2,
  };
  return (
    <AppBar position="static">
      <Grid container sx={{ backgroundColor: "aliceblue" }}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            backgroundColor: "white",
            clipPath: "polygon(0 0, 100% 0, 0 310%)",
            // height: { md: "120px", xs: "50px" },
            display: { xs: "none", md: "flex" },
          }}
        >
          <Toolbar
            sx={{
              display: { md: "flex", xs: "none" },
              alignItems: "center",
              marginLeft: "3rem",
            }}
          >
            <IconButton edge="start" aria-label="logo">
              <img
                style={{ width: "6rem", height: "6rem" }}
                src="https://asset.brandfetch.io/idEv3rmw3p/id4TbMs60B.jpeg"
                alt="Logo"
              />
            </IconButton>
          </Toolbar>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          sx={{
            backgroundColor: "aliceblue",
            display: { md: "flex" },
            alignItems: "center",
            justifyContent: "flex-end",
            pr: 8,
            height: { md: "120px", xs: "50px" },
          }}
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
            sx={{ border: "none", display: { md: "none" } }}
          >
            <FormatAlignLeftIcon onClick={openToggle} />
          </ToggleButton>
          
            { widthSize<768 && <Grow
              in={toggleOpen}
              style={{ transformOrigin: "0 0 0" }}
              timeout={1000}
            >
              <Box>
                <SideBar style={style} />
              </Box>
            </Grow>}

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NameLabel />
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TopBar;
