import React, { Component } from 'react';
// import qs from 'query-string'

// let obj = {name:'tom', age:18} // name=tom&age=18 key=valye&key=value (urlencoded)
// console.log(qs.stringify(obj))

// let str = 'carName=bmw&price=199'
// console.log(qs.parse(str))

const data = [
    {id:'01', content:'hello React'},
    {id:'02', content:'hello Java'},
    {id:'03', content:'hello Offer'}
]

export default class Detail extends Component {
  render() {
    // receive params param
    // const {id, title} = this.props.match.params

    // receive search param
    // const {search} = this.props.location
    // const {id, title} = qs.parse(search.slice(1))

    // receive state param
    const {id, title} = this.props.location.state || {}

    const findResult = data.find((detailObj) => {
        return detailObj.id === id
    }) || {}

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
