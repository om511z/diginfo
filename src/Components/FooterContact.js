import React,{useState} from 'react';
import {DigiTechAlert} from './DigiTechAlert';
import {DigiTech_Basic_Contact_Api} from '../Service/api.js';
import {get_base_url} from '../Service/CommonFunction.js';

function FooterContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const onInputChange = (event) => {
        const newData = { ...formData };
        newData[event.target.name] = event.target.value;
        setFormData(newData);
    };
    const submitForm = (e) => {
        e.preventDefault();
        if (!formData.name) {
            DigiTechAlert("Please Enter Your Name", "error");
        }
        else if (!formData.email) {
            DigiTechAlert("Please Enter Your Email", "error");
        }
        else {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(formData),
                mode: 'cors'
            };
            fetch(get_base_url() + DigiTech_Basic_Contact_Api, requestOptions)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    // throw error here
                    return response.json().then(e => { throw new Error(e.message) });
                })
                .then((data) => {
                    if (data) {
                        console.log("message sent");
                        window.location.reload();
                        DigiTechAlert("Subscribed Successfully", "success");
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                    DigiTechAlert(error.message, "error");

                });
        }
    }
    return (
        <>
            <div className='w-75 mx-auto p-5' style={{background:'white',marginBottom:-130,position:'relative',boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'}}>
                <p style={{fontWeight:500,fontSize:27,fontFamily:'Comfortaa'}}>Let's craft brilliance together!</p>
                <div className='d-flex justify-content-between'>
                    <input className="form-control" value={formData.name && formData.name} type='text' name="name" placeholder='Name:' required style={{width:450}} onChange={(event) => onInputChange(event)} />&nbsp;&nbsp;
                    <input className="form-control" value={formData.email && formData.email} type='email' name="email" placeholder='Email:' required style={{width:450}} onChange={(event) => onInputChange(event)} />&nbsp;&nbsp;
                    <button className='btn btn-primary' style={{width:400}} onClick={(e) => submitForm(e)}>Submit</button>
                </div>
            </div>
        </>
    )
}

export { FooterContact };