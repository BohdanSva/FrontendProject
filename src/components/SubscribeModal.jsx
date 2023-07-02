import React from 'react';
import { useDispatch } from "react-redux";
import { 
    setSubcriberName, setSubcriberEmail, 
} from '../features/contact/contactSlice';

const SubscribeModal = () => {
    // Define hooks
    const dispatch = useDispatch();

    const setName = (keystroke) => {
        dispatch(setSubcriberName(keystroke.target.value)); 
    }
    const setEmail = (keystroke) => {
        dispatch(setSubcriberEmail(keystroke.target.value)); 
    }

return (    
    <>

    <div className="modal fade" id="subscriptionModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true" data-tor-parent="show">
        <div className="modal-dialog modal-dialog-centered no-transform" role="document">
            {/* <!--Content--> */}
            <div className="modal-content" data-tor="show(p):{rotateX.from(90) pull.down(half)} bounce perspective-self(4000px)">
            
                {/* <!--Header--> */}
                <div className="modal-header text-center">
                    <h4 className="modal-title white-text w-100 font-weight-bold py-2">Subscribe to our Newsletter</h4>
                    <button type="button" className="close" data-bs-toggle="modal" data-bs-target="#subscriptionModal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="white-text">&times;</span>
                    </button>
                </div>

                {/* <!--Body--> */}
                <div className="modal-body">
                    <div className="md-form mb-5">
                        <i className="fas fa-user prefix grey-text"></i>
                        <input type="text" onInput={setName} id="SubscriberName" className="form-control validate"/>
                        <label data-error="wrong" data-success="right" htmlFor="SubscriberName">Your name</label>
                    </div>

                    <div className="md-form">
                        <i className="fas fa-envelope prefix grey-text"></i>
                        <input type="email" onInput={setEmail} id="SubscriberEmail" className="form-control validate"/>
                        <label data-error="wrong" data-success="right" htmlFor="SubscriberEmail">Your email</label>
                    </div>
                </div>

                {/* <!--Footer--> */}
                <div className="modal-footer justify-content-center">
                    <a type="button" className="btn mb-2 btn-primary"> Send <i className="fas fa-paper-plane-o ml-1"></i></a>
                </div>

            </div>
        </div>
    </div>

    </>
);

}
export default SubscribeModal