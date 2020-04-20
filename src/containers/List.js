import React from 'react';
import Card from '../components/Card/Card.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
const API='http://www.omdbapi.com/?i=tt3896198&apikey=a36addca';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            searchTerm:'',
            error:'',
            loading:true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
      // const res= await fetch('../../assets/data.json')
       const res= await fetch(`${API}&s=joker`)
       const resJSON= await res.json()
       //this.setState({data:resJSON})
       this.setState({data:resJSON.Search, loading: false})
    }

    async handleSubmit(e){
        e.preventDefault();
       if(!this.state.searchTerm){
            return this.setState({error:'Por favor ingresa un texto válido'})
       }else{ 
            const res= await fetch(`${API}&s=${this.state.searchTerm}`)
            const data= await res.json()
            if(!data.Search){
                return  this.setState({error:'No hay resultados'})
            }else{
                return this.setState({data:data.Search, error: '', searchTerm: ''})
            }    
       }
      
    }

    render(){
        const {data, loading}=this.state;
        if(loading){
            return <h3 className="text-dark">Loading...</h3>
        }else{
            return(
            <Container fluid="md">
                <Row className="justify-content-sm-center">
                    <Col md={4}>
                        <Form onSubmit={this.handleSubmit}>
                            <InputGroup size="sm" className="mb-3">
                                <Form.Label>Buscar Película: </Form.Label>
                                <Col>
                                <Form.Control 
                                type="text" 
                                placeholder="Search..." 
                                onChange={e=>this.setState({searchTerm: e.target.value})} 
                                value={this.state.searchTerm}/>
                                </Col>
                            </InputGroup>
                        </Form>
                        <div>{this.state.error?<Alert variant='danger'>{this.state.error}</Alert>:''}</div>
                    </Col>
                </Row>
                
                <Row>
                    {
                    data.map((movie)=>{
                        return <Card key={movie.imdbID} movie={movie}/>
                    }) 
                    }
                </Row>
            </Container>
            )  
        }  
    }

}

export default List;