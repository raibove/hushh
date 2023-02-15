import "./DashboardCard.css"

import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Headphone from '../../assets/headphone.svg'
import { SpeechRecognition, SpeechRecognitionTranscript } from 'react-speech-kit';
import { useNavigate } from "react-router-dom";

function DashboardCard({imageSrc, altText}) {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [audioInput, setAudioInput] = useState(null);
    const [recognition, setRecognition] = useState(null);
    const [transcript, setTranscript] = useState('');
    
    const [hasHeadphones, setHasHeadphones] = useState(null);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const startConversation = ()=>{
        navigator.mediaDevices.enumerateDevices().then((devices)=>{
            const audioInputs = devices.filter((device) => device.kind === 'audioinput');
            const audioOutputs = devices.filter((device) => device.kind === 'audiooutput');
            if(audioInputs.length>0 && audioOutputs.length>0){
                if(audioInputs[0].groupId === audioOutputs[0].groupId)
                    setHasHeadphones(false)
                else{
                    setHasHeadphones(true)
                    setOpen(false)
                    navigate('/conversation')
                }
            }else{
                setHasHeadphones(false)
            }
        }).catch((err) => {
            console.error(err);
            setHasHeadphones(false)
        });
    }

    const setHeadphoneConnected = ()=>{
        setHasHeadphones(true)
        setOpen(false)
        navigate('/conversation')
    }

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
            <div>
                <img src={imageSrc} alt={altText} className="modal-img"/>
                <span className="modal-description">apple</span>
            </div>
            </DialogContent>
            <DialogActions className="modal-action">
                <button className="modal-button" onClick={startConversation}>Start</button>
            </DialogActions>
        </Dialog>
        {
            hasHeadphones===false && <div>
            <Dialog
                open={open}
            >
                <DialogContent className="modal">
                <div>
                    <img src={Headphone} alt="headphones" className="headphone-img"/>
                    <h2 className="headphone-description">Wear your headphones to continue</h2>
                </div>
                </DialogContent>
                <DialogActions>
                    <button className="modal-button" onClick={setHeadphoneConnected}><b>I have my headphones connected</b></button>
                </DialogActions>
            </Dialog>
            </div>
        }
        </>
    )
}

export default DashboardCard;