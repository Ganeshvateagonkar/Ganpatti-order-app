import { Form, Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

const ShippingScreen = ({ history }) => {

    const submitHandler = () => {
        history.push('/payment')
    }

    return (
        <div >
            <h2>Shipping Address</h2>
            <Form style={{ width: '50%' }} >
                <FormGroup controlId='address'>
                    <FormLabel>Address</FormLabel>
                    <FormControl
                        type='text'
                        placeholder='enter full address'

                        required

                    ></FormControl>
                </FormGroup>

                <FormGroup controlId='city'>
                    <FormLabel>City</FormLabel>
                    <FormControl
                        type='text'
                        placeholder='enter city'

                        required

                    ></FormControl>
                </FormGroup>

                <FormGroup controlId='postalCode'>
                    <FormLabel>PostalCode</FormLabel>
                    <FormControl
                        type='text'
                        placeholder='enter postal code'

                        required

                    ></FormControl>
                </FormGroup>

                <FormGroup controlId='country'>
                    <FormLabel>Country</FormLabel>
                    <FormControl
                        type='text'
                        placeholder='enter country'

                        required

                    ></FormControl>
                </FormGroup>
                <Button onClick={submitHandler} type="submit" variant="primary" className="my-3"  >Continue</Button>
            </Form>
        </div>
    );
}

export default ShippingScreen;