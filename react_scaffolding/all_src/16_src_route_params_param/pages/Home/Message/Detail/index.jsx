import React, { Component } from 'react';

const data = [
    {id:'01', content:'hello React'},
    {id:'02', content:'hello Java'},
    {id:'03', content:'hello Offer'}
]

export default class Detail extends Component {
  render() {
    const {id, title} = this.props.match.params
    const findResult = data.find((detailObj) => {
        return detailObj.id === id
    })
    console.log(this.props)
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    );
  }
}
