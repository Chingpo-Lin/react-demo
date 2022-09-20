import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {

    state = {
        messageArr: [
            {id:'01', title:'msg1'},
            {id:'02', title:'msg2'},
            {id:'03', title:'msg3'},
        ]
    }

    replaceShow = (id, title) => {
        // jump to detail component with replace jump
        // params param
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // query search param
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

        // state param
        this.props.history.replace('/home/message/detail', {id,title})
    }

    pushShow = (id, title) => {
         // jump to detail component with push jump
         // params param
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // query search param
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

        // state param
        this.props.history.push('/home/message/detail', {id,title})
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(-2)
    }

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* pass params param to route comp*/}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;

                                    &nbsp;<button onClick={() => this.pushShow(msgObj.id,msgObj.title)}>push check</button>&nbsp;
                                    &nbsp;<button onClick={() => this.replaceShow(msgObj.id,msgObj.title)}>replace check</button>&nbsp;

                                    {/* pass search param to route comp */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* pass params param to route comp*/}
                                    {/* <Link replace to={{pathname:'/home/message/detail', state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* receive params param*/}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

                {/* receive search param don't need declare accept*/}
                {/* <Route path="/home/message/detail" component={Detail}/> */}
                
                {/* receive state param don't need declare accept*/}
                <Route path="/home/message/detail" component={Detail}/>

                <button onClick={this.back}>back</button>
                <button onClick={this.forward}>forward</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}
