import { Modal, Box, TextField, Button } from '@mui/material';
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
                <h2>Add Event</h2>
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
                <TextField
                    fullWidth
                    label="Date"
                    name="date"
                    type="date"
                    value={currentEvent?.date || ''}
                    onChange={handleInputChange}
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ mt: 2 }}>
                    Save
                </Button>
            </Box>
        </Modal>
    );
};

export default EventForm;