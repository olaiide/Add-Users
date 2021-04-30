import Card from './Card';
import classes from './ErrorModal.module.css';
import Button from './Button';
import React from 'react';

const ErrorModal = (props) => {
    return (
      <div>
      <div className={classes.backdrop} onClick={props.onConfirm}/>
      <Card className={classes.modal}>
         <header className={classes.header}>
           <h2>{props.title}</h2>
         </header>
         <div className={classes.content}>
           <p>{props.message}</p>
         </div>
         <footer className={classes.actions}>
           <Button onClick={props.onConfirm}>Okay</Button>
         </footer>
      </Card>
      </div>
    )
}

export default ErrorModal;

/*
const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm}/>
}
const Overlay = props => {
  return (
  <Card className={classes.modal}>
         <header className={classes.header}>
           <h2>{props.title}</h2>
         </header>
         <div className={classes.content}>
           <p>{props.message}</p>
         </div>
         <footer className={classes.actions}>
           <Button onClick={props.onConfirm}>Okay</Button>
         </footer>
      </Card>
  )
}
const ErrorModal = (props) => {
return (
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('overlay'))}
    {ReactDOM.createPortal(<Overlay
    title ={props.title}
    message = {props.message}
    onConfirm = {props.onConfirm}
     />, document.getElementById('modal'))}
  </React.Fragment>
)
};
export default ErrorModal;*/