import './App.css';
import { Button, Container, Row, Col} from 'react-bootstrap';
import { SearchForm } from './components/SearchForm';
import {Display} from './components/Display';

function App() {
  return(
   
  <div className='wrapper bg-dark'>
    <Container>
      {/* title */}
      <Row>
        <Col>
        <h1 className='mt-5 text-center wraning'>My Movie Collection</h1>
        </Col>
      </Row>
      <hr />
      {/* form */}
      <SearchForm />

      {/* Display */}
    <Display />
    </Container>
  
</div>
)
}


export default App;
