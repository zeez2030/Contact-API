import React,{useContext} from 'react'
import AlertContext from '../../context/alert/alertCotnext';
const Alerts = () => {
    const alertContext = useContext(AlertContext);
    const {
        setAlert,
        alerts
    }=alertContext;
    return (
       alerts.length>0 && alerts.map(alert=>(
        <div key={alert.id} className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle"></i>      {alert.msg}
        </div>
       ))
    )
}

export default Alerts
