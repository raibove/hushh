import "./DashboardCard.css"
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function DashboardCard({imageSrc, altText}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <div className="dashboard-card" onClick={handleOpen}>
            <div className="dashboard-card-img-container">
                <img src={imageSrc} alt={altText} className="dashboard-card-img"/>
            </div>
            <div className="dashboard-card-title">
                <p className="dashboard-card-p">An interview for job?</p>
            </div>
        </div>
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogContent className="modal">
            <div  >
                <img src={imageSrc} alt={altText} className="modal-img"/>
                <span className="modal-description">apple</span>
            </div>
            </DialogContent>
            <DialogActions className="modal-action">
                <button className="modal-button">Start</button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default DashboardCard;