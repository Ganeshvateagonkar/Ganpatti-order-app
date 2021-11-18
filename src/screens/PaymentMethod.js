
import { Form, Button, Col, FormGroup, FormCheck } from 'react-bootstrap';
const PaymentMethod = ({ history }) => {

    const submitHandler = () => {
        history.push('/placeOrder')
    }

    return (
        <div >
            <h1>Payment Mathod</h1>
            <Form >
                <FormGroup>
                    <Form.Label as='legend'>
                        Select Method
                    </Form.Label>
                    <Col>
                        <FormCheck
                            type="radio"
                            label="Paypal or credit Card"
                            id="paypal"
                            name="paymentMethod"
                            value="PayPal"
                            checked

                        ></FormCheck>
                        <FormCheck
                            type="radio"
                            label="Phone pay"
                            id="phonePay"
                            name="paymentMethod"
                            value="PhonePay"


                        ></FormCheck>
                    </Col>
                </FormGroup>
                <Button onClick={submitHandler} type="submit" variant="primary" className="my-3"  >Continue</Button>
            </Form>
        </div>
    )

}

export default PaymentMethod;