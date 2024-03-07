import './Login.scss'
const Login = (props) => {
    return (
        <div className="login-container mt-3">
            <div className="container ">
                <div className="row">
                    <div className="content-left col-7">
                        <div className='Brand'>Nn99</div>
                        <div className='detail'>Nn99 helps you connect and share with the people in your life.</div>
                    </div>
                    <div className="content-right col-5 d-flex flex-column py-3 gap-3">
                        <input type='text' className='form-control' placeholder='Email address or phone number'></input>
                        <input type='text' className='form-control' placeholder='Password'></input>
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'>Forgotten password?</span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success'>Create new account</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login