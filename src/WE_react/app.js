import ReactWEditor from 'wangeditor-for-react'
import React, { Component } from 'react'

export class WEReact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                {/* <input onChange={e=>{this.setState({value: e.target.value})}}/> */}
                <ReactWEditor
                    value={this.state.value}
                    placeholder="请输入正文"
                    // defaultValue={'<h1>标题</h1>'}
                    onChange={(html) => {console.log('html:', html)}}
                    height='700'
                />
                {/* <ReactWEditor
                    placeholder="自定义 placeholder"
                    config={{
                        fontSizes: {
                            'x-small': { name: '10px', value: '1' },
                            small: { name: '12px', value: '2' },
                            normal: { name: '16px', value: '3' },
                            large: { name: '18px', value: '4' },
                            'x-large': { name: '24px', value: '5' },
                            'xx-large': { name: '32px', value: '6' },
                            'xxx-large': { name: '48px', value: '7' },
                        },
                    }}
                /> */}
            </div>
        )
    }
}

export default WEReact
