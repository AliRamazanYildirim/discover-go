import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Map, Marker } from 'pigeon-maps';
import { Menu, Home, Info, Settings } from '@mui/icons-material';
import { useState } from 'react';

const HomePage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: 'Home', icon: <Home />, link: '#' },
        { text: 'About', icon: <Info />, link: '#about' },
        { text: 'Settings', icon: <Settings />, link: '#settings' },
    ];

    return (
        <Box 
            sx={{ 
                position: 'relative', 
                height: '100vh', 
                width: '100vw', 
                overflow: 'hidden', 
                backgroundColor: 'background.default', 
                color: 'text.primary' 
            }}
        >
            <IconButton 
                onClick={toggleDrawer} 
                sx={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}
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
                height={window.innerHeight} // Direct pixel value is used
                defaultCenter={[50.1109, 8.6821]} // Frankfurt coordinates
                defaultZoom={11}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
            >
                <Marker width={50} anchor={[50.1109, 8.6821]} />
            </Map>
            <Box 
                sx={{ 
                    position: 'relative', 
                    zIndex: 1, 
                    padding: 3, 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    borderRadius: 1 
                }}
            >
            </Box>
        </Box>
    );
};

export default HomePage;

