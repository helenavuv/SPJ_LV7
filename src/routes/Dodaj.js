import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';




export default function Dodaj(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('naziv', inputs.naziv)
        formData.append('proizvodac', inputs.proizvodac)
        formData.append('model', inputs.model)
        formData.append('cijena', inputs.cijena)
        formData.append('kolicina', inputs.kolicina)

        axios({
            method: 'post',
            url: 'http://localhost/Jerbic_spj_lv7/add.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response);
            navigate('/pocetna');

        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
        
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label>Unesite naziv:
                <input
                type="text"
                name="naziv"
                value={inputs.naziv || ""}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <label>Unesite proizvodaca:
                <input
                type="text"
                name="proizvodac"
                value={inputs.proizvodac || ""}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <label>Unesite model:
                <input
                type="text"
                name="model"
                value={inputs.model || ""}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <label>Unesite cijenu:
                <input
                type="text"
                name="cijena"
                value={inputs.cijena || ""}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <label>Unesite kolicinu:
                <input
                type="text"
                name="kolicina"
                value={inputs.kolicina || ""}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <input type="submit" />
        </form>

)}