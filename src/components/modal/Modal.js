/*import { Modal } from "react-bootstrap";
import "./styles.css";

function ModalBootsrap({ children, show, handleClose, title, img  }) {
  return (
    <Modal
      show={show} 
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
          <img
                src={img}
                alt=''
                style={{ maxWidth: "80%", objectFit: "contain" }}
            />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
}


export default ModalBootsrap;*/
/*import React from 'react';
import './Popup.css';

function popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Fermer</button>
            {props.children}
        </div>
      
    </div>
    
  ) : "";
}

export default popup;*/
import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}
const Button_Style ={
  backgroundcolor: '#90D9F1',
  border:'none',
  fontsize: '25px',
  
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button style={{backgroundColor:'transparent',border:'none',fontsize:'25px',position:'absolute',top:'16px',right:'16px'}} onClick={onClose}>Fermer</button>
        <br></br>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}


