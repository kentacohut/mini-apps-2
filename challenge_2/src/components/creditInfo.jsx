import React from 'react';
import {Row, Input, Button} from 'react-materialize';
import months from './months';
import years from './years';

const CreditInfo = ({handleClick, handleChange}) => {
  return (
    <div className="creditInfo">
      <h2>Billing Information</h2>
      <Row>
        <Input 
          s={12} 
          label="Credit Card #" 
          icon="credit_card"
          name="creditNum" 
          onChange={(e) => handleChange(e)}
        />
        <Input 
          s={3} 
          type="select" 
          label="Expiration Month" 
          defaultValue="1"
          name="expMonth" 
          onChange={(e) => handleChange(e)}
        >
        {months.map((month, index)=><option key={index} value={month}>{month}</option>)}
        </Input>
        <Input 
          s={3} 
          type="select" 
          label="Expiration Year" 
          defaultValue="18"
          name="expYear" 
          onChange={(e) => handleChange(e)}
        >
        {years.map((year, index)=><option key={index} value={year}>{year}</option>)}
        </Input>
        <Input 
          s={3} 
          label="CVV" 
          type="password"
          name="CVV" 
          onChange={(e) => handleChange(e)}
        />
        <Input 
          s={3} 
          label="Zip Code"
          name="billingZip" 
          onChange={(e) => handleChange(e)}
        />
      </Row>
      <Button 
        waves='light' 
        name="creditInfo" 
        onClick={(e) => handleClick(e)}
      >Next Page</Button>
    </div>
  )
}

export default CreditInfo;