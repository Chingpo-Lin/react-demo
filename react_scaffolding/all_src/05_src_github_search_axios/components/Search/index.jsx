import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {

    search = () => {
        // get user input
        // console.log(this.keyWordElement.value)
        // const {value} = this.keyWordElement
        const {keyWordElement:{value}} = this
        // update app stateus
        this.props.updateAppState({isFirst:false,isLoading:true})
        // send request
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error => {
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
