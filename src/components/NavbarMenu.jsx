import { Container, Navbar } from "react-bootstrap";


export default function NavbarMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#!">
                Dynamic <b>Form</b>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text> 
                    Signed in as: {" "}
                    <a href="https://videoplayer-rosy.vercel.app/" target="_blank" rel="noreferrer">User Name</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
