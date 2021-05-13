import React from 'react';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        if (!this.props.modal) return null;

        let modalForm;

        switch (this.props.modal) {
            case 'Sign In':
                modalForm = <LoginContainer />
                break
            case 'Sign Up':
                modalForm = <SignupContainer />
                break
            default:
                return null
        }
        
        return (
            <div>
                <div className='modal-background' onClick={this.props.hideModal}>
                    <div className='modal-content' onClick={e => e.stopPropagation()}>
                        { modalForm }
                    </div>
                </div>
            </div>
        )
    }
};

export default Modal;