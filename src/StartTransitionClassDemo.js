import React, { useState, useTransition, Component,
  // 用于class：与 useTransition 功能一样：
  startTransition, isPending
} from 'react'


export default class UseTransitionDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      list: []
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
    startTransition(()=> {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value)
      }
      this.setState({ list: l })
    })
  }

  render() {
    return <div>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      {
        isPending? 'Loading':
        this.state.list.map((item, index)=> <div key={index}>{item}</div>)
      }
    </div>
  }
}

