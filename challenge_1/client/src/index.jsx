import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './Components/chart';
import Dates from './Components/dates'
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    let today = moment().format('YYYY-MM-DD');
    let lastMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');
    this.setState({
      startDate: lastMonth,
      endDate: today
    }, this.getCoinApiData(lastMonth, today));
  }

  handleSubmit(e, date){
    let name = e.target.name;
    let value = e.target.value;
    if(name === 'start'){
      this.setState({
        startDate: value
      })
      this.getCoinApiData(value, this.state.endDate);
    } else {
      this.setState({
        endDate: value
      })
      this.getCoinApiData(this.state.startDate, value);
    };
  }

  getCoinApiData(start, end) {
    axios.get('/api/btc', {
      params:{
        start: start,
        end: end
      }
    })
    .then((response) => {
      let dates = response.data.dates;
      let values = response.data.values;
      console.log(dates)
      this.setState({
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
        handleSubmit = { this.handleSubmit }
        max = { moment().format('YYYY-MM-DD') }
      />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
