import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => console.log(data);

    console.log(watch("example")); 

    return (
        
        <form className="custom" onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} />
            {errors.name && <span className="error">This field is required</span>}
            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input name="address" ref={register({ required: true })} />
            {errors.address && <span className="error">This field is required</span>}
            <input name="number" ref={register({ required: true })} />
            {errors.number && <span className="error">This field is required</span>}
            <input type="submit" />
        </form>
    );
};

export default Shipment;