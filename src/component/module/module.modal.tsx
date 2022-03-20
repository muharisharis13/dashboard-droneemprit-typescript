import './modal.css';
import React, {useEffect, useRef} from "react"

const ModuleModal = ({ onHide, show, children }:{onHide:Function,show:boolean, children:any}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const ref = useRef()

  useEffect(() => {
    const close = (e:any) => {
      if(e.keyCode === 27){
        onHide()
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
},[])




  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        
      </section>
    </div>
  );
};

export default ModuleModal;