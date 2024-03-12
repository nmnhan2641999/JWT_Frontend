import './Register.scss'
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    const handleRegister = () => {
        let userData = {
            email: email,
            phone: phone,
            userName: userName,
            password: password
        }
        console.log(">>>>>check userData", userData)
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
                            <input type='text' className='form-control' placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)}

                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>PhomeNumber:</label>
                            <input type='text' className='form-control' placeholder='Phome Number'
                                value={phone} onChange={(event) => setPhone(event.target.value)}

                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>UserName:</label>
                            <input type='text' className='form-control' placeholder='User Name'
                                value={userName} onChange={(event) => setUserName(event.target.value)}

                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input type='text' className='form-control' placeholder='Password'
                                value={password} onChange={(envent) => setPassword(envent.target.value)}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>re-enter Password:</label>
                            <input type='text' className='form-control' placeholder='re-enter Password'
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
        </div >
    )
}
export default Register