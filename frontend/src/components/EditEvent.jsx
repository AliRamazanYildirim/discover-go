import { Modal, Box, TextField, Button } from '@mui/material';
import { useEventStore } from '../store/useEventStore';

const EditEvent = () => {
    const { editModalOpen, currentEvent, updateEvent, closeEditModal } = useEventStore();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        useEventStore.setState((state) => ({
            currentEvent: { ...state.currentEvent, [name]: value },
        }));
    };

    const handleSubmit = async () => {
        if (!currentEvent || !currentEvent._id) {
            console.error('Invalid event data');
            return;
        }

        try {
            await updateEvent(currentEvent._id, currentEvent);
            closeEditModal();
        } catch (error) {
            console.error('Error while updating event:', error.message || error);
        }
    };

    return (
        <Modal open={editModalOpen} onClose={closeEditModal}>
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
                <h2>Edit Event</h2>
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
                    Save Changes
                </Button>
            </Box>
        </Modal>
    );
};

export default EditEvent;
