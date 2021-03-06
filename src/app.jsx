import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: ''
    };

    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    this.handleAllChange = this.handleAllChange.bind(this);
  }

  handleAmountDue(event) {
    this.setState({ amountDue: event.target.value });
  }

  handleAmountReceived(event) {
    this.setState({ amountReceived: event.target.value });
  }

  handleAllChange() {
    const calculateChange = (this.state.amountReceived - this.state.amountDue).toFixed(2);
    this.setState({
      changeDue: calculateChange,
      twenties: Math.floor(calculateChange / 20),
      tens: Math.floor((calculateChange / 10) % 2),
      fives: Math.floor((calculateChange / 5) % 2),
      ones:Math.floor(calculateChange % 5),
      quarters: Math.floor(((calculateChange * 100) % 100) / 25),
      dimes: Math.floor((((calculateChange * 100) % 100) % 25) / 10),
      nickels: Math.floor(((((calculateChange * 100) % 100) % 25) % 10) / 5),
      pennies: Math.floor((calculateChange * 100) % 5 + 0.01)
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <h1 className='text-center'>Change Calculator</h1>
        <hr />

        <div className='row'>
          <div className='col-sm-4'>
            <div className='panel panel-default'>
              <div className='panel-heading panel-title'>Enter Information</div>
              <div className='panel-body'>
                <p>How much is due?</p>
                <input
                  className='form-control'
                  value={ this.state.amountDue }
                  onChange={ this.handleAmountDue }
                  placeholder='Enter amount due'
                  type='number'
                  name='amountDue'
                />
              </div>
              <div className='panel-body'>
                <p>How much was received?</p>
                <input
                  className='form-control'
                  value={ this.state.amountReceived }
                  onChange={ this.handleAmountReceived }
                  placeholder='Enter amount received'
                  type='number'
                  name='amountReceived'
                />
              </div>
              <div className='panel-footer'>
                <button className='btn btn-default btn-block' type='button' onClick={ this.handleAllChange }>
                  Calculate!
                </button>
              </div>
            </div>
          </div>

          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className='alert alert-success text-center lead' role='alert'>
                The total change due is ${this.state.changeDue}
                </div>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center lead'>
                      <p>
                        {this.state.twenties}
                        <hr />
                      </p>Twenties
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center lead'>
                      <p>
                        {this.state.tens}
                        <hr />
                      </p>Tens
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center lead'>
                      <p>
                        {this.state.fives}
                        <hr />
                      </p>Fives
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center lead'>
                      <p>
                        {this.state.ones}
                        <hr />
                      </p>Ones
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center lead'>
                      <p>
                        {this.state.quarters}
                        <hr />
                      </p>Quarters
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center lead'>
                      <p>
                        {this.state.dimes}
                        <hr />
                      </p>Dimes
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center lead'>
                      <p>
                        {this.state.nickels}
                        <hr />
                      </p>Nickels
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center lead'>
                      <p>
                        {this.state.pennies}
                        <hr />
                      </p>Pennies
                    </div>
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

export default App;