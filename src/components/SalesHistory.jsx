import './style/SalesHistory.css'
import axios from 'axios';
import React, { Component } from 'react';
import ProfileMenu from '../containers/ProfileMenu';
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class SalesHistory extends Component {
    constructor() {
        super();
        this.state = {
            invoices: [],
            totalYear: '',
            totalDay: '',
            totalMonth: '',
            salesByYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            salesByMonth: [],
            dataBar: {},
            graphOn: false,
            // -----------------  

        }
    }

    componentDidMount() {

        axios.get(`http://localhost:3001/inv/invoices`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(item => {

                this.setState({

                    invoices: item.data

                })

            })
            .catch(err => { console.log(err) })


    }
    findMonthTotal() {

        var total = 0
        var inputDate = this.month.value
        this.state.invoices.map(element => {

            var date = new Date(element.createdAt)
            if (date.getMonth() < 10) {
                var dateFormated = `${date.getFullYear()}-0${date.getMonth() + 1}`
            } else {
                var dateFormated = `${date.getFullYear()}-${date.getMonth() + 1}`
            }

            if (dateFormated === inputDate) {
                total = total + element.totalAmount
            }
        })

        this.setState({
            totalMonth: total
        })
    }
    findDayTotal() {

        if (this.state.graphOn === true) {
            this.setState({
                graphOn: false
            })
        }
        var total = 0
        var inputDate = this.day.value
        var totalMonthSalesByDay = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.state.invoices.map(element => {

            var date = new Date(element.createdAt)
            var inputYearMonth
            var yearMonth = `${inputDate.split("-")[0]}-${inputDate.split("-")[1]}`
            if (date.getMonth() < 10) {
                inputYearMonth = `${date.getFullYear()}-0${date.getMonth() + 1}`

            } else {
                inputYearMonth = `${date.getFullYear()}-${date.getMonth() + 1}`
            }

            if (inputYearMonth === yearMonth) {

                totalMonthSalesByDay[date.getDate() - 1] = totalMonthSalesByDay[date.getDate() - 1] + element.totalAmount

            }

            if (date.getMonth() < 10) {
                var dateFormated = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
            } else {
                var dateFormated = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            }

            if (dateFormated === inputDate) {
                total = total + element.totalAmount
            }
        })


        this.setState({

            totalDay: total,
            salesByMonth: totalMonthSalesByDay
        })


    }
    findYearTotal() {

        // if (this.state.graphOn === true) {
        //     this.setState({
        //         graphOn: false
        //     })
        // }
        var total = 0
        var totalMonthSalesByYear = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        var inputYear = `${this.number1.value}${this.number2.value}${this.number3.value}${this.number4.value}`

        this.state.invoices.map(element => {

            var date = new Date(element.createdAt)
            var year = date.getFullYear()

            if (parseInt(inputYear) === year) {
                total = total + element.totalAmount

                totalMonthSalesByYear[date.getMonth()] = totalMonthSalesByYear[date.getMonth()] + element.totalAmount

            }


        })

        this.setState({
            totalYear: total,
            graphOn: true,
            dataBar: {
                labels: ["January", "February", "March", "April", "May", "Jun", "July", "Agost", "September", "October", "November", "Dicember"],
                datasets: [
                    {
                        label: "Total of sales " + inputYear,
                        data: totalMonthSalesByYear,
                        borderWidth: 2,
                    }
                ]
            },
            barChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            barPercentage: 1,
                            gridLines: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.1)"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.1)"
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }

            }
        })
        console.log(totalMonthSalesByYear)

    }
    render() {

        const invoicesArray = this.state.invoices
        console.log(invoicesArray)
        console.log(this.state.dataBar)
        if (invoicesArray !== []) {
            if (this.state.graphOn === false) {

                return (
                    <div >
                        <ProfileMenu />
                        <div className="salesHistoryContainer">
                            <h4 className="salesHistoryTitle">SALE'S HISTORY</h4>
                            <div className="yearMonthContainer">
                                <div className="dayContainer">
                                    <input className="historyItems" name="day" ref={input => this.day = input} type="date" placeholder="Find Product by Id" />
                                    <button className="historyItems" onClick={() => this.findDayTotal()}>Find</button>
                                    <h4>Totale sales by day: {this.state.totalDay}€</h4>
                                </div>
                                <div className="monthContainer">
                                    <input className="historyItems" name="month" ref={input => this.month = input} type="month" placeholder="Find Product by Id" />
                                    <button className="historyItems" onClick={() => this.findMonthTotal()}>Find</button>
                                    <h4>Totale sales by Month: {this.state.totalMonth}€</h4>
                                </div>
                            </div>
                            <div className="yearHistoryContainer">
                                <div className="yearItemsContainer">
                                <h5>Check sales by year</h5>
                                <div>
                                    <input className="yearNumber" value="2" name="number1" min="0" max="9" ref={input => this.number1 = input} type="number" placeholder="2" />
                                    <input className="yearNumber" value="0" name="number2" min="0" max="9" ref={input => this.number2 = input} type="number" placeholder="0" />
                                    <input className="yearNumber" name="number3" min="0" max="9" ref={input => this.number3 = input} type="number" placeholder="1" />
                                    <input className="yearNumber" name="number4" min="0" max="9" ref={input => this.number4 = input} type="number" placeholder="9" />
                                </div>
                                <button className="historyItems" onClick={() => this.findYearTotal()}>Find</button>
                                </div>
                            </div>

                        </div>
                    </div>
                )

            } else {

                return (
                    <div >
                        <ProfileMenu />
                        <div className="salesHistoryContainer">
                        <h4 className="salesHistoryTitle">SALE'S HISTORY</h4>

                            <div className="yearMonthContainer">
                                <div className="dayContainer">
                                    <input className="historyItems" name="day" ref={input => this.day = input} type="date" placeholder="Find Product by Id" />
                                    <button className="historyItems" onClick={() => this.findDayTotal()}>Find</button>
                                    <h4>Totale sales by day: {this.state.totalDay}€</h4>
                                </div>
                                <div className="monthContainer">
                                    <input className="historyItems" name="month" ref={input => this.month = input} type="month" placeholder="Find Product by Id" />
                                    <button className="historyItems" onClick={() => this.findMonthTotal()}>Find</button>
                                    <h4>Totale sales by Month: {this.state.totalMonth}€</h4>
                                </div>
                            </div>
                            <div className="yearHistoryContainer">
                                <div>
                                    <h5>Check sales by year</h5>
                                    <input className="yearNumber" value="2" name="number1" min="0" max="9" ref={input => this.number1 = input} type="number" placeholder="2" />
                                    <input className="yearNumber" value="0" name="number2" min="0" max="9" ref={input => this.number2 = input} type="number" placeholder="0" />
                                    <input className="yearNumber"  name="number3" min="0" max="9" ref={input => this.number3 = input} type="number" placeholder="1" />
                                    <input className="yearNumber"  name="number4" min="0" max="9" ref={input => this.number4 = input} type="number" placeholder="9" />
                                </div>

                                <button className="historyItems" onClick={() => this.findYearTotal()}>Find</button>
                                <h4>Totale sales by year: {this.state.totalYear}€</h4>
                                <MDBContainer id="graph" className="graphContainer">
                                    <h3 className="mt-5">SALES BY YEAR</h3>
                                    <Bar id="graph" data={this.state.dataBar} options={this.state.barChartOptions} />
                                </MDBContainer>
                                
                            </div>

                        </div>
                    </div>
                )
            }

        }
        else {
            return (
                <div>
                    <ProfileMenu />
                    <div className="invoiceSection">
                        <h4>Not sales available at the moment</h4>
                    </div>
                </div>
            )
        }
    }
}
export default SalesHistory;