import React, { useState , useRef} from 'react';
 
import {Alert, Button} from 'react-bootstrap';
import {CustomCard} from './CustomCard';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import {fetchMovies} from '../helper/fetchhelper'

export const SearchForm = () => {
    const strRef = useRef("")
    const[searchMovie, setSearchMovie] = useState({})
    const [error, setError] = useState(false)
    const handleOnSubmit = async (e) =>{
        e.preventDefault();

        error && setError(false)
        const str = strRef.current.value;
        //call api and get the data
        const data = await fetchMovies(str)
        console.log(data)
        if(data.Response === "True"){
            setSearchMovie(data)
        }else{
            setError(true)
        }
        console.log(data)
    };
    return (
        <div className="bg-black p-5 rounded shadow-lg">
        <Form onSubmit={handleOnSubmit}>
          <Row className='gap-1'>
            <Col md="9">
              <Form.Control ref={strRef} placeholder="Search by title" />
            </Col>
            <Col>
            <div className="d-grid">
              <Button variant="warning" placeholder=""type="submit">Search Movie</Button>
              </div>
            </Col>
          </Row>
        </Form>
        <div className="d-flex justify-content-center mt-5">
            {error ? (
                <Alert variant="danger">Movie Not Found</Alert>
            ): (
                <CustomCard searchMovie={searchMovie} />
            )}
           
        </div>
        </div>
      );
}