import React, { useState } from 'react';
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import './Form.css'
import { FaFirstdraft } from 'react-icons/fa';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
            <div className='form-container'>
                <a href='/' className='close-btn'>x</a>
                <div className='form-content-left'>
                    <h1>EPIC<FaFirstdraft /></h1>
                </div>
                {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
            </div>
        </>
    );
}

export default Form;
