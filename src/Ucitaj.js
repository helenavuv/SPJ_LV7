import React from "react";
import axios from "axios";
import { useState, useEffect  } from "react";
import { Link,Outlet } from "react-router-dom";

const readUrl="http://localhost/Jerbic_spj_lv7/read.php";

function Ucitaj()
{
    const [artikli, setArtikli] = useState([]);
    useEffect(() => {
        axios.get(readUrl).then((response) => {
        setArtikli(response.data);
        });
        }, []);

    return(
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Naziv</th>
                    <th>Proizvodac</th>
                    <th>Model</th>
                    <th>Cijena</th>
                    <th>Kolicina</th>
                </tr>
            </thead>
            <tbody>
                {artikli.map(x =>{
                    return(
                        <tr key={x.Id}>
                    <td>{x.Id}</td>
                    <td>{x.Naziv}</td>
                    <td>{x.Proizvodac}</td>
                    <td>{x.Model}</td>
                    <td>{x.Cijena} kn</td>
                    <td>{x.Kolicina}</td>
                </tr>

                    )
                })}
            </tbody>
        </table>
    </>

    )

}

export default Ucitaj;
