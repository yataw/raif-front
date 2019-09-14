import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Payment extends Component {
    render() {
        return (

            <div className="newsletter-subscribe">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Демо оплата</h2>
                        <p className="text-center">Введите нужную сумму и нажмите "Оплатить"</p>
                    </div>
                    <form className="form-inline" method="post" >
                        <div className="form-group"><input id="input-summ" className="form-control" placeholder="Сумма" /></div>
                        <div className="form-group"><button className="btn btn-primary" onClick={this.onClick}>Оплатить</button></div>
                    </form>
                </div>
            </div>
        );
    }

    onClick = e => {
        const xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        // TODO адрес бека в конфигурационный файл
        const theUrl = "http://10.91.6.2:8080/transaction";
        xmlhttp.open("POST", theUrl);
        xmlhttp.send(JSON.stringify({sender: '1', recipient: '2', cash: '' + document.getElementById('input-summ').value}));

        e.preventDefault()
        e.stopPropagation()
    }
}

export default Payment;