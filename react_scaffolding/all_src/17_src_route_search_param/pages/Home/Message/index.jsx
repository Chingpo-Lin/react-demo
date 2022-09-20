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
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                    {/* pass search param to route comp */}
                                    <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* receive params param*/}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

                {/* receive search param don't need declare accept*/}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        );
    }
}
