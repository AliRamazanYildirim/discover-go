import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Map, Marker } from "pigeon-maps";
import { Menu, Home, Info, Settings } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useEventStore } from "../store/useEventStore";
import EventForm from "./EventForm";

const HomePage = () => {
  const { events, getAllEvents, openModal, setMapClickLocation } =
    useEventStore();

  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Home", icon: <Home />, link: "#" },
    { text: "About", icon: <Info />, link: "#about" },
    { text: "Settings", icon: <Settings />, link: "#settings" },
  ];

  const handleMapClick = ({ latLng }) => {
    setMapClickLocation({ lat: latLng[0], lng: latLng[1] });
    openModal({
      title: "",
      description: "",
      date: "",
    });
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <IconButton
        onClick={toggleDrawer}
        sx={{ position: "absolute", top: 16, left: 16, zIndex: 2 }}
      >
        <Menu />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component="a" href={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Map
        height={window.innerHeight}
        defaultCenter={[50.1109, 8.6821]}
        defaultZoom={11}
        onClick={handleMapClick}
      >
        {events
          .filter(
            (event) =>
              event.location &&
              event.location.lat !== undefined &&
              event.location.lng !== undefined
          )
          .map((event, index) => (
            <Marker
              key={index}
              width={50}
              anchor={[event.location.lat, event.location.lng]}
            />
          ))}
      </Map>

      <EventForm />
    </div>
  );
};

export default HomePage;
