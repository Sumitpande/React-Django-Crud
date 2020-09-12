
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Student extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          
        active:{
            
            name:'',
            regno:'',
            address:'',
            mobile:'',
            completed:false
          },
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
  
    handleSubmit(event) {

        console.log(this.state.active);
        event.preventDefault();

        var url = 'http://localhost:8000/api/student/';
        fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
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
                    completed:false
                  }

            })
        }).catch(e => {
            console.log(e);
        })
    
      
    }
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input onChange={this.handleChange} type="text" name="name"  placeholder="Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Reg. No.</Label>
              <Input onChange={this.handleChange} type="text" name="regno"  placeholder="Registration Number" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input onChange={this.handleChange} type="text" name="address"  placeholder="1234 Main St"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Mobile No.</Label>
              <Input onChange={this.handleChange} type="text" name="mobile" />
            </FormGroup>
          </Col>
          {/* <Col md={2}>
            <FormGroup>
              <Label for="exampleCity">Physics Marks</Label>
              <Input type="text" name="physics" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleState">Maths Marks</Label>
              <Input type="text" name="maths" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Chemistry Marks</Label>
              <Input type="text" name="chemistry" id="exampleZip"/>
            </FormGroup>  
          </Col> */}
        </Row>
        
        
        
        <Button type='submit'>Submit</Button>
        
      </Form>
        
      );
    }
  }








// const Student = (props) => {
//   return (
//     <Form >
//       <Row form>
//         <Col md={6}>
//           <FormGroup>
//             <Label for="exampleEmail">Name</Label>
//             <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
//           </FormGroup>
//         </Col>
//         <Col md={6}>
//           <FormGroup>
//             <Label for="examplePassword">Reg. No.</Label>
//             <Input type="text" name="regno" id="examplePassword" placeholder="Registration Number" />
//           </FormGroup>
//         </Col>
//       </Row>
//       <FormGroup>
//         <Label for="exampleAddress">Address</Label>
//         <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
//       </FormGroup>
//       <Row form>
//         <Col md={6}>
//           <FormGroup>
//             <Label for="exampleCity">Mobile No.</Label>
//             <Input type="text" name="mobile" id="exampleCity"/>
//           </FormGroup>
//         </Col>
//         {/* <Col md={2}>
//           <FormGroup>
//             <Label for="exampleCity">Physics Marks</Label>
//             <Input type="text" name="physics" id="exampleCity"/>
//           </FormGroup>
//         </Col>
//         <Col md={2}>
//           <FormGroup>
//             <Label for="exampleState">Maths Marks</Label>
//             <Input type="text" name="maths" id="exampleState"/>
//           </FormGroup>
//         </Col>
//         <Col md={2}>
//           <FormGroup>
//             <Label for="exampleZip">Chemistry Marks</Label>
//             <Input type="text" name="chemistry" id="exampleZip"/>
//           </FormGroup>  
//         </Col> */}
//       </Row>
      
      
      
//       <Button>Submit</Button>
      
//     </Form>
//   );
// }

export default Student;