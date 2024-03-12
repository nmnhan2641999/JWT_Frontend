import './Register.scss'
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';



const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);


    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    useEffect(() => {
        // axios.get("http://localhost:8080/api/v1/test-api").then(data => {
        //     console.log(">>>> Check data axios from reqres.in by userEffect", data)
        // })


    }, []);







    const isValidInputs = () => {
        setObjCheckInput(defaultValidInput)

        if (!email) {
            toast.error("Email is required!")
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false })
            return false
        }
        const regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email)) {
            toast.error("Please input valid email again")
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false })
            return false;
        }
        if (!phone) {
            toast.error("Phone is required!")
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false })
            return false
        }
        const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if (!regPhone.test(phone)) {
            toast.error("Please input valid phune number again")
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false })
            return false;
        }

        if (!password) {
            toast.error("Password is required!")
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false })
            return false
        }

        if (password !== confirmPassword) {
            toast.error("Your password is not the same")
            setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false })

            return false
        }
        return true;
    }

    const handleRegister = () => {
        let check = isValidInputs();
        if (check == true) {
            axios.post('http://localhost:8080/api/v1/register', {
                email, phone, username, password
            })
        }
    }


    return (
        <div className="register-container pt-3">
            <div className="container ">
                <div className="row px-3 px-sm-0 ">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block  ">
                        <div className='brand'>Nn99</div>
                        <div className='detail'>Nn99 helps you connect and share with the people in your life.</div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column py-3 gap-3 px-3 ">
                        <div className='brand d-block d-sm-none'>Register</div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input type='text' className={objCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)}

                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>PhomeNumber:</label>
                            <input type='text' className={objCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'} placeholder='Phome Number'
                                value={phone} onChange={(event) => setPhone(event.target.value)}

                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>UserName:</label>
                            <input type='text' className='form-control' placeholder='UserName'
                                value={username} onChange={(event) => setUserName(event.target.value)}

                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input type='text' className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'} placeholder='Password'
                                value={password} onChange={(envent) => setPassword(envent.target.value)}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>re-enter Password:</label>
                            <input type='text' className={objCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'} placeholder='re-enter Password'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                            ></input>
                        </div>
                        <button className='btn btn-primary' onClick={() => handleRegister()}>Register</button>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success py-3' onClick={() => handleLogin()}>Already have an account?</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Register