import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './Components/chart';
import Dates from './Components/dates'
import apiKey from '../../config/api';
import axios from 'axios';
import moment from 'moment';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      startDate: '',
      endDate: '',
      chartData: {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [],
            borderColor: []
        }]
      }
    }

    this.getCoinApiData = this.getCoinApiData.bind(this);
  }

  componentDidMount(){
    this.getCoinApiData();
  }

  getCoinApiData() {
    let today = moment().format('YYYY-MM-DD');
    let lastMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');
    axios.get('/api/btc', {
      params:{
        today: today,
        lastMonth: lastMonth
      }
    })
    .then((response) => {
      let dates = response.data.dates;
      let values = response.data.values;
      this.setState({
        startDate: lastMonth,
        endDate: today,
        chartData: {
          labels: dates,
          datasets: [{
              label: 'Price of BTC',
              data: values,
              backgroundColor: [],
              borderColor: []
          }]
        }
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
  const { chartData, startDate, endDate } = this.state;
  return (
    <div>
      <Chart 
        chartData = { chartData }
      />
      <Dates 
        startDate = { startDate } 
        endDate = { endDate }
      />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
