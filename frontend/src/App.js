import React from 'react';
import { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import {
  Table
} from "reactstrap";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import Student from './components/student'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      marks: [],
      active:{
        id:null,  
        name:'',
        regno:'',
        address:'',
        mobile:'',
        scores:{},
        completed:false
      },
      
      editing:false,
    };
    this.fetchStudents = this.fetchStudents.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCookie = this.getCookie.bind(this);
    

  }
  componentWillMount(){
    this.fetchStudents()
  }

  fetchStudents(){
    console.log('fetching');
    fetch('http://localhost:8000/student/')
    .then(res => res.json())
    .then(x => {
        console.log((x));
        
        

        this.setState({ marks: x })
      
      }
      
      )
  }

  handleChange(event) {
      
    var v = event.target.value
    
    console.log(` name:${v} `);
    this.setState({
        active:{
            ...this.state.active,
            [event.target.name]:v
           


        }
    });

  }

  startedit(obj){
    this.setState({
      editing:true,
      active:obj,

    })

  }

  getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

  handleSubmit(event) {

    console.log(this.state.active);
    event.preventDefault();
    var csrf = this.getCookie('csrftoken')

    var url = 'http://localhost:8000/student/';
    var method = 'POST'

    if(this.state.editing === true){
      method = 'PUT'
      url = `http://localhost:8000/student/${this.state.active.id}/`;
      this.setState({
        editing:false
      })
    }




    fetch(url,{
        method:method,
        headers:{
            'Content-type':'application/json',
            'X-CSRFToken':csrf,
        },
        body: JSON.stringify(this.state.active)
    }).then(res => {
        this.fetchStudents();
        this.setState({
            active:{
        
                name:'',
                regno:'',
                address:'',
                mobile:'',
                scores:[],
                completed:false
              }

        })
    }).catch(e => {
        console.log(e);
    })

  
  }


  render(){
    var data = this.state.marks;
    var self = this
    

   
    return(
      <div className='container'>
        <h1 className="text-center">Student Information</h1>
        
        <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input onChange={this.handleChange} value={this.state.active.name} type="text" name="name"  placeholder="Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Reg. No.</Label>
              <Input onChange={this.handleChange} value={this.state.active.regno} type="text" name="regno"  placeholder="Registration Number" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input onChange={this.handleChange} value={this.state.active.address} type="text" name="address"  placeholder="Address"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Mobile No.</Label>
              <Input onChange={this.handleChange} value={this.state.active.mobile} type="text" name="mobile" />
            </FormGroup>
          </Col>
          {/* <Col md={2}>
            <FormGroup>
              <Label for="exampleCity">Physics Marks</Label>
              <Input type="text" onChange={this.handleChange} value={this.state.active.scores.physics} name="physics" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleState">Maths Marks</Label>
              <Input type="text" onChange={this.handleChange} value={this.state.active.scores.chemistry} name="maths" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Chemistry Marks</Label>
              <Input type="text" onChange={this.handleChange} value={this.state.active.scores.maths} name="chemistry" id="exampleZip"/>
            </FormGroup>  
          </Col> */}
        </Row>
        
        
        
        <Button type='submit'>Submit</Button>
        
      </Form>

        
        
        <div className='mt-2'>
          
        <Table  bordered hover dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Reg. No.</th>
            <th>Address</th>
            <th>Mobile No.</th>
            
            <th>Phy Marks</th>
            <th>Chem Marks</th>
            <th>Maths Marks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s,i) => {
            return(
              <tr key={i}>
                <td onClick={() => self.startedit(s)} >{s.id} </td>
                {/* <td>{s.student.name} </td>
                <td>{s.student.regno}</td>
                <td>{s.student.address}</td>
                <td>{s.student.mobile}</td>
                <td>{s.physics} </td>
                <td>{s.chemistry} </td>
                <td>{s.maths} </td> */}
                <td>{s.name} </td>
                <td>{s.regno} </td>
                <td>{s.address} </td>
                <td>{s.mobile} </td> 
             
                <td>{s.marks.physics} </td>
                <td>{s.marks.chemistry} </td>
                <td>{s.marks.maths} </td>
                
                
                                  
              </tr>  
            )          
          })}
    
    
        </tbody>
        </Table>
          
          
        </div>


      </div>
      
    );
  }
}

export default App;
