import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import StickyHeadTable from "./Table";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import  {useState } from "react";

export default function Task() {
  const [open, setOpen] = useState<boolean>(false);
  const MenuList = ["بانک ها", "بانک ها", "بانک ها", "بانک ها"];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <AppBar position="fixed" style={{ zIndex: 10000 }}>
        <Toolbar>
          <Button color="inherit">Task</Button>
          <Typography
            variant="h6"
            component="div"
            textAlign="end"
            sx={{ flexGrow: 1 }}
          >
            لیست ثابت
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={open ? handleDrawerClose : handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        style={{ boxShadow: "none" }}
        open={open}
        onClose={handleDrawerClose} 
      >
        <Box
          sx={{
            width: "300px",
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            gap: "10px",
            mt: "63px",
          }}
        >
          <List>
            {MenuList.map((item, index) => (
              <ListItem key={index} >
                <Typography variant="h6">{item}</Typography>
                <ListItemIcon>
                  <IconButton size="large">
                    <ListIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1, mt: "64px" }}>
        <Box
          sx={{
            height: "10%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "150px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">دریافت خروجی</Typography>
            <IconButton size="medium">
              <UploadIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">ایجاد</Typography>
            <IconButton size="medium">
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
        <StickyHeadTable />
      </Box>
    </Box>
  );
}
