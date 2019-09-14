import React, {Component} from 'react';

class History extends Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <nav className="navbar navbar-light navbar-expand-md">
                        <div className="container-fluid">
                            <h3 className="text-dark mb-0">История</h3><i className="fa fa-history" style={{fontSize: '37px'}} /></div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card shadow py-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col mr-2">
                                        <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Оплата услуг</span></div>
                                        <div className="text-dark font-weight-bold h5 mb-0"><span>242 руб</span></div>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-plus fa-2x text-gray-300" /></div>
                                </div>
                            </div>
                            <div className="card shadow py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col mr-2">
                                            <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Оплата услуг</span></div>
                                            <div className="text-dark font-weight-bold h5 mb-0"><span>312 руб</span></div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-plus fa-2x text-gray-300" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col mr-2">
                                            <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Оплата услуг</span></div>
                                            <div className="text-dark font-weight-bold h5 mb-0"><span>110 руб</span></div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-plus fa-2x text-gray-300" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col mr-2">
                                            <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Оплата услуг</span></div>
                                            <div className="text-dark font-weight-bold h5 mb-0"><span>600 руб</span></div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-plus fa-2x text-gray-300" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col mr-2">
                                            <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Оплата услуг</span></div>
                                            <div className="text-dark font-weight-bold h5 mb-0"><span>1100 руб</span></div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-plus fa-2x text-gray-300" /></div>
                                    </div>
                                </div>
                                <div className="card shadow border py-2">
                                    <div className="card-body">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col mr-2">
                                                <div className="text-uppercase text-success font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Заплатить Шаурмену</span></div>
                                                <div className="text-dark font-weight-bold h5 mb-0"><span>15,000</span></div>
                                            </div>
                                            <div className="col-auto"><i className="fas fa-minus fa-2x text-gray-300" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col mr-2">
                                            <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span style={{color: 'rgb(0,0,0)'}}>Оплата услуг</span></div>
                                            <div className="text-dark font-weight-bold h5 mb-0"><span>70 руб</span></div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-plus fa-2x text-gray-300" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default History;