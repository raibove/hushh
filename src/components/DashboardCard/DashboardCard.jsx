import "./DashboardCard.css"
import Modal from '@mui/material/Modal';
import { useState } from "react";

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
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div  className="modal">
                <img src={imageSrc} alt={altText} className="modal-img"/>
                <span className="modal-description">apple</span>
            </div>
        </Modal>
        </>
    )
}

export default DashboardCard;