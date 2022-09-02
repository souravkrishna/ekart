
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ProductModal({product})
{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{backgroundColor:"#38003c"}} variant="contained" onClick={handleOpen} endIcon={<SendIcon />}>More Detail</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style}}>
            <Typography sx={{fontFamily: "monospace", fontSize:"30px", fontWeight:"bold"}} id="modal-modal-title" variant="h6" component="h2">
                {product.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: "monospace", fontSize:"20px"}}>
                {product.type}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: "monospace", fontSize:"20px"}}>
                {product.description}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: "monospace", fontSize:"20px"}}>
                Rs:{product.price}
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductModal;