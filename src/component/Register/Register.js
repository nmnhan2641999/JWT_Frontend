import './Register.scss'
import { useHistory } from "react-router-dom";

const Register = (props) => {
    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    return (
        <div className="register-container pt-3">
            <div className="container ">
                <div className="row px-3 px-sm-0 ">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block align-self-center ">
                        <div className='brand'>Nn99</div>
                        <div className='detail'>Nn99 helps you connect and share with the people in your life.</div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column py-3 gap-3 px-3 ">
                        <div className='brand d-block d-sm-none'>Nn99</div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input type='text' className='form-control' placeholder='Email address'></input>
                        </div>
                        <div className='form-group'>
                            <label>PhomeNumber:</label>
                            <input type='text' className='form-control' placeholder='Phome Number'></input>
                        </div>
                        <div className='form-group'>
                            <label>UserName:</label>
                            <input type='text' className='form-control' placeholder='User Name'></input>
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input type='text' className='form-control' placeholder='Password'></input>
                        </div>
                        <div className='form-group'>
                            <label>re-enter Password:</label>
                            <input type='text' className='form-control' placeholder='re-enter Password'></input>
                        </div>




                        <button className='btn btn-primary'>Register</button>
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