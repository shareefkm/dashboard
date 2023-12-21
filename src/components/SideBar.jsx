import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  Stack,
  ToggleButton,
  Grow,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FaPowerOff } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiSolidUserPin } from "react-icons/bi";
import { PiPottedPlantFill, PiPuzzlePieceFill } from "react-icons/pi";
import { RiQuestionAnswerFill } from "react-icons/ri";
import useSize from "./UseWidthSize";

const sideBarItem = [
  { title: "Dashboard", icon: <MdDashboard /> },
  { title: "Perks", icon: <PiPottedPlantFill /> },
  { title: "Addons", icon: <PiPuzzlePieceFill /> },
  { title: "FAQ", icon: <RiQuestionAnswerFill /> },
  { title: "Support", icon: <BiSolidUserPin /> },
];

function SideBar({style}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openToggle = () => {
    setToggleOpen(!toggleOpen);
  };
  return (
    <Box
      sx={{
        width: "100%" ,
        height: "100vh",
        backgroundColor:style?.bgColor || "gray.100",
        borderRight: "1px",
        borderColor: "gray",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex:style?.zIndex
      }}
    >
      <div>
        <Toolbar sx={{ justifyContent: { md: "center" }, height: "160px" }}>
          <Box sx={{ marginLeft: { md: "-10px", xl: "" } }}>
            <Avatar
              alt="rammohan"
              sx={{
                height: "70px",
                width: "70px",
                display: "block",
                margin: "auto",
              }}
            >
              <img
                style={{ width: "70px", height: "70px", display: "block" }}
                src="/profile.jpeg"
                alt=""
              />
            </Avatar>
            <Box sx={{ textAlign: "center", mt: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Ram Mohan
                </Typography>
                <ArrowForwardIosIcon
                  sx={{
                    color: "blue",
                    fontSize: 15,
                    ml: 1,
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Typography fontSize={{ md: 12 }} component="div">
                rammohan@gmail.com
              </Typography>
            </Box>
          </Box>
        </Toolbar>
        <Divider />
        <List>
          {sideBarItem.map((text, index) => (
            <ListItem key={text.title} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: "dodgerblue",
                    marginRight: "-20px",
                    marginLeft: "20px",
                    fontSize: 24,
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.title}
                  sx={{ fontFamily: "revert-layer" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <Button
        sx={{
          pl:6,
          py:2,
          fontWeight: "bold",
          justifyContent: 'flex-start',
          width: "100%",  
          backgroundColor: "aliceblue", 
          borderRadius:0
        }}
      >
        Logout <FaPowerOff style={{ marginLeft: "10px" }} />
      </Button>
    </Box>
  );
}

export default SideBar;
