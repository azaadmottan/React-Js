import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfo } from '@fortawesome/free-solid-svg-icons';

const Toast = ({ message, type, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {

            setIsVisible(false);
            onClose();
        }, 3000); // Adjust the timeout as needed

        return () => clearTimeout(timer);
    }, [onClose]);

    const getBackgroundColor = () => {

        switch (type) {

            case 'success':
                return 'bg-green-500';

            case 'error':
                return 'bg-red-500';

            default:
                return 'bg-blue-500';
        }
    };

    const getIcon = () => {

        switch (type) {
            case 'success':
                return <FontAwesomeIcon icon={faCheck} className="mr-2" />;

            case 'error':
                return <FontAwesomeIcon icon={faTimes} className="mr-2" />;

            default:
                return <FontAwesomeIcon icon={faInfo} className="mr-2" />;
        }
    };

    return (
    <>
        {isVisible && (
            <div
            className={`fixed top-16 right-4 p-4 rounded-md text-white ${getBackgroundColor()} shadow-xl`}
            >
                <div className="flex items-center">
                    <span className='inline-block items-center justify-center border-2 px-1 py-1 text-center rounded-lg mr-3'>
                        {getIcon()}
                    </span>
                    <span>{message}</span>
                </div>
            </div>
        )}
    </>
    );
};

Toast.propTypes = {
    
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'info']),
    onClose: PropTypes.func.isRequired,
};

export default Toast;
