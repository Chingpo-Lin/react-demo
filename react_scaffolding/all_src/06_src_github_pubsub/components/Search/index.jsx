import axios from 'axios';
import PubSub from 'pubsub-js';
import React, { Component } from 'react'

export default class Search extends Component {

    search = () => {
        console.log('start pulish')
        const {keyWordElement:{value:keyword}} = this
        PubSub.publish('github_status', {isFirst:false,isLoading:true})
        // // get user input
        // // console.log(this.keyWordElement.value)
        // // const {value} = this.keyWordElement
        // const {keyWordElement:{value}} = this
        // // notify list to update status
        // // this.props.updateAppState({isFirst:false,isLoading:true})
        // // send request
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                PubSub.publish('github_status', {isLoading:false,users:response.data.items})
                // this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error => {
                PubSub.publish('github_status', {isLoading:false,err:error.message})
                // this.props.updateAppState({isLoading:false,err:error.message})
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
