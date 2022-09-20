import React, { Component } from 'react'
import {nanoid} from 'nanoid'
// import connect for connect UI component&redux
import {connect} from 'react-redux'

import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addPerson(personObj)
    }

    render() {
        return (
        <div>
            <h2>I am person component, above sum is {this.props.sum}</h2>
            <input ref={c=>this.nameNode=c} type='text' placeholder="enter name"/>
            <input ref={c=>this.ageNode=c} type='text' placeholder="enter age"/>
            <button onClick={this.addPerson}>add</button>
            <ul>
                {
                    this.props.people.map((p) => {
                        return <li key={p.id}>{p.name} -- {p.age}</li>
                    })
                }
            </ul>
        </div>
        )
  }
}

export default connect(
    state => ({people:state.people,sum:state.sum}),
    {addPerson:createAddPersonAction}// method to operate state
)(Person)