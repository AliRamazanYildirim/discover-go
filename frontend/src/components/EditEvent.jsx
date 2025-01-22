import { Modal, Box, TextField, Button, IconButton, Input, InputLabel, FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEventStore } from '../store/useEventStore';

const EventForm = () => {
    const { modalOpen, currentEvent, mapClickLocation, addEvent, closeModal } = useEventStore();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        useEventStore.setState((state) => ({
            currentEvent: { ...state.currentEvent, [name]: value },
        }));
    };

    const handleSubmit = async () => {
        if (currentEvent) {
            const eventWithLocation = { ...currentEvent, location: mapClickLocation };
            await addEvent(eventWithLocation);
        }
        closeModal();
    };

    return (
        <Modal open={modalOpen} onClose={closeModal}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    onClick={closeModal}>
                    <CloseIcon />
                </IconButton>
                <h2 className='event'>Add Event</h2>
                <TextField
                    fullWidth
                    label="Title"
                    name="title"
                    value={currentEvent?.title || ''}
                    onChange={handleInputChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={currentEvent?.description || ''}
                    onChange={handleInputChange}
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                        value={currentEvent?.date || ''}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        mt: 2,
                    }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}>
                        Save Event
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={closeModal}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default EventForm;