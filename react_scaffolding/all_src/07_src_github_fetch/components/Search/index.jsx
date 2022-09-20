// import axios from 'axios';
import PubSub from 'pubsub-js';
import React, { Component } from 'react'

export default class Search extends Component {

    search = async() => {
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
        // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
        //     response => {
        //         PubSub.publish('github_status', {isLoading:false,users:response.data.items})
        //         // this.props.updateAppState({isLoading:false,users:response.data.items})
        //     },
        //     error => {
        //         PubSub.publish('github_status', {isLoading:false,err:error.message})
        //         // this.props.updateAppState({isLoading:false,err:error.message})
        //     }
        // )

        // fetch requst
        // fetch(`https://api.github.com/search/users?q=${keyword}`).then(
        //     response => {
        //         console.log('connect server success', response)
        //         return response.json()},
        //     // error => {
        //     //     console.log('connect server fail', error)
        //     //     return new Promise(()=>{})
        //     // }
        // ).then(
        //     response => {
        //         console.log('get data success', response)
        //     },
        //     // error => {console.log('get data fail', error)}
        // ).catch (
        //     error=> {console.log('request error', error)}
        // )

        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
            const data = await response.json()
            PubSub.publish('github_status', {isLoading:false,users:data.items})
            console.log(data)
        } catch (error) {
            PubSub.publish('github_status', {isLoading:false,err:error.message})
            console.log('request error', error)
        }
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
