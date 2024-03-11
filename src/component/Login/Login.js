import './Login.scss'
import { useHistory } from "react-router-dom";

const Login = (props) => {
    let history = useHistory();
    const handleCreateNuewAccount = () => {
        history.push("/register");
    }

    return (
        <div className="login-container pt-3">
            <div className="container ">
                <div className="row px-3 px-sm-0 ">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block align-self-center ">
                        <div className='brand'>Nn99</div>
                        <div className='detail'>Nn99 helps you connect and share with the people in your life.</div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column py-3 gap-3 px-3 ">
                        <div className='brand d-block d-sm-none'>Nn99</div>
                        <input type='text' className='form-control' placeholder='Email address or phone number'></input>
                        <input type='text' className='form-control' placeholder='Password'></input>
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'><a className='forgot_password' href='#'>Forgotten password?</a></span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success py-3' onClick={() => handleCreateNuewAccount()}>Create new account</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login