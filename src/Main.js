import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">

                        <div className="container-fluid">
                            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                                <h3 className="text-dark mb-0">ООО "Кебаб Про"</h3><a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#" style={{backgroundColor: '#faeb00', filter: 'brightness(101%)', color: '#000000'}}><i className="fas fa-download fa-sm text-white-50" style={{filter: 'blur(0px) brightness(0%)'}} />&nbsp;Выгрузить
                                аналитику</a></div>
                            <div className="row">
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col mr-2">
                                                    <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Баланс</span></div>
                                                    <div className="text-dark font-weight-bold h5 mb-0"><span id="id-balance"></span></div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-ruble-sign fa-2x text-gray-300" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col mr-2">
                                                    <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Доходы за месяц</span></div>
                                                    <div className="text-dark font-weight-bold h5 mb-0"><span>300 000 руб</span></div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-plus fa-2x text-gray-300" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col mr-2">
                                                    <div className="text-uppercase text-success font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Расходы за месяц</span></div>
                                                    <div className="text-dark font-weight-bold h5 mb-0"><span>215,000</span></div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-minus fa-2x text-gray-300" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-xl-8">
                                    <div className="card shadow mb-4">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h6 className="text-primary font-weight-bold m-0" style={{color: 'rgb(0,0,0) !important'}}>
                                                Анализ Доходов за продажу шаурмы</h6>
                                            <div className="dropdown no-arrow">
                                                <button className="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i className="fas fa-ellipsis-v text-gray-400" /></button>
                                                <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in" role="menu">
                                                    <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" role="presentation" href="#">&nbsp;Action</a><a className="dropdown-item" role="presentation" href="#">&nbsp;Another action</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" role="presentation" href="#">&nbsp;Something else
                                                        here</a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="chart-area">
                                                <canvas data-bs-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-xl-4">
                                    <div className="card shadow mb-4">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h6 className="text-primary font-weight-bold m-0" style={{color: 'rgb(0,0,0) !important'}}>
                                                Источники Дохода</h6>
                                            <div className="dropdown no-arrow">
                                                <button className="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i className="fas fa-ellipsis-v text-gray-400" /></button>
                                                <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in" role="menu">
                                                    <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" role="presentation" href="#">&nbsp;Action</a><a className="dropdown-item" role="presentation" href="#">&nbsp;Another action</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" role="presentation" href="#">&nbsp;Something else
                                                        here</a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="chart-area">
                                                <canvas data-bs-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{}}}" />
                                            </div>
                                            <div className="text-center small mt-4"><span className="mr-2"><i className="fas fa-circle text-primary" />&nbsp;Продажа Шаурмы</span><span className="mr-2"><i className="fas fa-circle text-success" />Продажа воды</span><span className="mr-2"><i className="fas fa-circle text-info" />&nbsp;Продажа франчайзи</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow mb-4" />
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="text-primary font-weight-bold m-0">Todo List</h6>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <div className="row align-items-center no-gutters">
                                                    <div className="col mr-2">
                                                        <h6 className="mb-0"><strong>Сходить на встечу</strong></h6><span className="text-xs">10:30 AM</span></div>
                                                    <div className="col-auto">
                                                        <button className="btn btn-primary" type="button" style={{color: '#ffffff'}}><i className="fa fa-check" /></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row align-items-center no-gutters">
                                                    <div className="col mr-2">
                                                        <h6 className="mb-0"><strong>Заплатить за офис</strong></h6><span className="text-xs">11:30 AM</span></div>
                                                    <div className="col-auto">
                                                        <button className="btn btn-primary" type="button"><i className="fa fa-check" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row align-items-center no-gutters">
                                                    <div className="col mr-2">
                                                        <h6 className="mb-0"><strong>Выдать себе зарплату)</strong></h6><span className="text-xs">12:30 AM</span></div>
                                                    <div className="col-auto">
                                                        <button className="btn btn-primary" type="button"><i className="fa fa-check" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    };

    componentWillMount() {
            window.state.update();
    }

    componentDidMount() {
        const $ = window.$;

        $(document).ready(function(){

            $('[data-bs-chart]').each(function(index, elem) {
                var chart = new window.Chart($(elem), $(elem).data('bs-chart'));
            });
        });
    }
}

export default Main;


