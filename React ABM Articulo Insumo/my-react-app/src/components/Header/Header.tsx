
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';



import { useNavigate } from 'react-router-dom';


const Header = () => {
    
   const navigate = useNavigate();
    return(
    <>
<Navbar className="nav">
        <Container className='container'>
          <Navbar.Brand href="#">
            <img
              src="src/assets/Componentes/Logo.svg"
              alt="Logo el buen sabor"
              id="LogoNavPrincipal"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav"/>
          <Navbar.Collapse id="navbar-nav" className="btn">
            <Nav className="col-6 list-unstyled d-inline-flex mt-0">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Stock</Nav.Link>
              <Nav.Link onClick={() => navigate('/Rubro')}>Articulo Insumo</Nav.Link>
            </Nav>

          
            <Nav className='col-4 mt-1 mb-0 gap-3'>
              <Form className="d-flex justify-content-start align-items-center me-4">
                <img src="src/assets/Componentes/Lupita.svg" alt="Lupa" />
                <Form.Control
                  type="search"
                  placeholder="Buscar..."
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>

            <Button variant="botonCampana" className="botonCampana me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 39" fill="none">
                        <path d="M32.6078 27.6999C30.3481 24.9342 28.7528 23.5264 28.7528 15.9017C28.7528 8.91942 25.1873 6.43184 22.2527 5.22369C21.8629 5.06354 21.496 4.69573 21.3772 4.29536C20.8624 2.54341 19.4193 1 17.5011 1C15.5828 1 14.1388 2.54429 13.6293 4.29712C13.5105 4.70189 13.1436 5.06354 12.7538 5.22369C9.81569 6.4336 6.25371 8.91238 6.25371 15.9017C6.24931 23.5264 4.65399 24.9342 2.39432 27.6999C1.45806 28.8456 2.27816 30.5658 3.91572 30.5658H31.0952C32.7239 30.5658 33.5388 28.8403 32.6078 27.6999Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23.1326 30.5659V31.9738C23.1326 33.4674 22.5392 34.8998 21.4831 35.9559C20.427 37.0121 18.9946 37.6054 17.501 37.6054C16.0074 37.6054 14.575 37.0121 13.5188 35.9559C12.4627 34.8998 11.8694 33.4674 11.8694 31.9738V30.5659" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
            </Button>
           
            <Dropdown>
      <Dropdown.Toggle variant="'Warning'" id="dropdown-basic">
        Cheff Rocco
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mis datos personales</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mis Pedidos</Dropdown.Item>
        <Dropdown.Item href="#/action-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 39" fill="none">
                              <path d="M6.75146 5.75C6.76055 4.11873 6.83288 3.23529 7.40917 2.65901C8.0682 2 9.12885 2 11.2502 2H12.0002C14.1215 2 15.1822 2 15.8411 2.65901C16.5002 3.31802 16.5002 4.37868 16.5002 6.5V12.5C16.5002 14.6213 16.5002 15.6819 15.8411 16.341C15.1822 17 14.1215 17 12.0002 17H11.2502C9.12885 17 8.0682 17 7.40917 16.341C6.83288 15.7647 6.76055 14.8812 6.75146 13.25" stroke="black" stroke-width="1.125" stroke-linecap="round"/>
                              <path d="M11.25 9.5H1.5M1.5 9.5L4.125 7.25M1.5 9.5L4.125 11.75" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
          Salir</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

 </>
    )
}

export default Header;
