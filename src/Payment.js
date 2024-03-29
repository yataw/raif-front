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
                        <div className="form-group"><input id="input-summ" className="form-control" placeholder="Сумма" autoFocus/></div>
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
        const el = document.getElementById('input-summ');
        const summ = el.value;
        xmlhttp.open("POST", theUrl);
        xmlhttp.send(JSON.stringify({field: '1'.repeat(2000), operation: 'transaction', sender: '1', recipient: '2', cash: '' + summ}));
        el.value = '';

        xmlhttp.onload = function() {
            const error = this.responseText.indexOf('error');

            window.$.notify({
                title: '',
                message: (error !== -1) ? `<strong>Некорректное значение или недостаточно средств.</strong>` : `Операция выполнена успешно<br> Ваш кешбэк ${summ*0.13}`,
            }, {
                placement: {
                    from: "bottom",
                    align: "right",
                    timer: 100,
                },
            });
        }

        e.preventDefault()
        e.stopPropagation()
    }
}

export default Payment;