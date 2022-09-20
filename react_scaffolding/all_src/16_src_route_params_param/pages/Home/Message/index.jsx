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
                                    {/* pass params to route comp*/}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* receive params  */}
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
            </div>
        );
    }
}
