import { Map, Marker } from 'pigeon-maps';

const HomePage = () => {
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <Map
                height={window.innerHeight} // Direct pixel value is used
                defaultCenter={[50.1109, 8.6821]} // Frankfurt coordinates
                defaultZoom={11}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
            >
                <Marker width={50} anchor={[50.1109, 8.6821]} />
            </Map>
            <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '20px' }}>
                <h1>Welcome to the HomePage</h1>
                <p>This is a sample homepage with a map as the background.</p>
            </div>
        </div>
    );
};

export default HomePage;
