import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewVetForm extends Component {
  state = {
    name: "",
    logourl: "",
    streetAddress: "",
    cityStateZip: "",
    phoneNumber: "",
    hoursOfOperationOpen: "",
    hoursOfOperationClose: "",
    website: "",
  }



  handleChange = (event) => {
    const name = event.target.name
    const newState = { ...this.state }
    newState[name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      name: this.state.name,
      logourl: this.state.logourl,
      streetAddress: this.state.streetAddress,
      cityStateZip: this.state.cityStateZip,
      phoneNumber: this.state.phoneNumber,
      hoursOfOperationOpen: this.state.hoursOfOperationOpen,
      hoursOfOperationClose: this.state.hoursOfOperationClose,
      website: this.state.website,
    }


    await axios.post('/api/vet', payload)
    this.props.history.push("/")
  }

  render() {
    return (


      <div className="vetFormParentDiv">
        <div className="newVetHeaderDiv">
          <div className="headerDivInfo">
            <h1>Add A New Veterinarian</h1>
            <h3>Don't See Your Vet? Add a new vet, then add a review!</h3>
          </div>
        </div>


        <Link to="/"><button className="backToVetsButton">Back to Vets</button></Link>
        <Form className="newVetFormDiv" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name: </Label>
            <Input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="logourl">Logo URL: </Label>
            <Input onChange={this.handleChange} type="text" name="logourl" value={this.state.logourl} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="streetAddress">Street Address: </Label>
            <Input onChange={this.handleChange} type="text" name="streetAddress" value={this.state.streetAddress} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cityStateZip">City, State Zip: </Label>
            <Input onChange={this.handleChange} type="text" name="cityStateZip" value={this.state.cityStateZip} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phoneNumber">Phone Number: </Label>
            <Input onChange={this.handleChange} type="text" name="phoneNumber" value={this.state.phoneNumber} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hoursOfOperationOpen">Hours of Operation Open: </Label>
            <Input onChange={this.handleChange} type="text" name="hoursOfOperationOpen" value={this.state.hoursOfOperationOpen} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hoursOfOperationClose">Hours of Operation Close: </Label>
            <Input onChange={this.handleChange} type="text" name="hoursOfOperationClose" value={this.state.hoursOfOperationClose} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="website">Website: </Label>
            <Input onChange={this.handleChange} type="text" name="website" value={this.state.website} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }

}

export default NewVetForm