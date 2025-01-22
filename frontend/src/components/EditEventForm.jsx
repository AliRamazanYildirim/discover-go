import { Modal, Box, TextField, Button, IconButton, Input, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useEventStore } from '../store/useEventStore';

const EditEventForm = () => {
    const { editModalOpen, currentEvent, updateEvent, closeEditModal, deleteEvent } = useEventStore();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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

    const handleDelete = async () => {
        if (!currentEvent || !currentEvent._id) {
            console.error('Invalid event data');
            return;
        }

        try {
            await deleteEvent(currentEvent._id);
            closeEditModal();
        } catch (error) {
            console.error('Error while deleting event:', error.message || error);
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
                <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    onClick={closeEditModal}>
                    <CloseIcon />
                </IconButton>
                <h2 className='event'>Edit Event</h2>
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
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ mt: 2 }}>
                    Save Changes
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => setDeleteDialogOpen(true)}
                    sx={{ mt: 2, ml: 2 }}>
                    Delete Event
                </Button>
                <Dialog
                    open={deleteDialogOpen}
                    onClose={() => setDeleteDialogOpen(false)}>
                    <DialogTitle className='event'>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this event?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleDelete} color="error">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Modal>
    );
};

export default EditEventForm;