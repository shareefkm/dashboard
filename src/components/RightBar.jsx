import { Badge, Box, IconButton } from "@mui/material";
import { BiPlus, BiSolidBell } from "react-icons/bi";

function RightBar() {
  return (
    <Box
      sx={{
        backgroundColor: "aliceblue",
        height: "100vh",
        borderLeft: "1px",
        borderColor: "gray",
        boxShadow: 3,
        width: '60px',
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        justifyContent: 'space-between', 
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'end', backgroundColor: 'white',py:2,pr:1, ml:1, borderRadius: '10px 0 0 10px', mt: 2 }}>
        <Badge badgeContent={3} color="error">
          <BiSolidBell style={{ fontSize: 28, color: 'blue' }} />
        </Badge>
      </Box>
      <Box sx={{justifyContent:'space-between', display:'flex', flexDirection:'column'}}>
      <Box sx={{ display: 'flex', justifyContent: 'end', backgroundColor: 'white', width: '40px', height: '100px', ml: 'auto', borderRadius: '10px 0 0 10px', mb:2 }}>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end', backgroundColor: 'lavender', ml: 'auto', borderRadius: '50px', mb:2 }}>
        <IconButton style={{ margin: 'auto', color:'violet' }}  aria-label="add">
          <BiPlus />
        </IconButton>
      </Box>
      </Box>
    </Box>
  );
}

export default RightBar;
