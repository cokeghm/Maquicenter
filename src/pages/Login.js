import {Container} from 'react-bootstrap';

function Login() {
  return (
    <div className="login"> 
    <Container fluid>
        <br></br>
        <br></br>
        <br></br>
        <form className="formulario" action="/" method="">
        {/* <div><img className="mb-4" src="" alt="" width="200" height="200 "></div> */}
        <h1 className="h3 mb-3 font-weight-normal">Iniciar Sesión</h1>
        <input type="email"  className="form-control bottom" name= "Email" placeholder="Email" required=""></input>
        <input type="text" className="form-control middle" name="Password" placeholder="Password" required=""></input>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
        <p className="mt-5 mb-3 text-muted">© 2023 Cokeright</p>
        
      </form>
      </Container>
      </div>
  )
}
      export default Login
