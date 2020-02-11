import React from 'react';

// import Comment from './comment';
// import Clock from './clock';

import ToggleOne from './toggleOne';
import ToggleTwo from './toggleTwo';

import './component.css';

// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'https://placekitten.com/g/200/200',
//     },
// };





class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClockShow: false,
            isShowText: true,
            isToggleOne: true,
            isToggleTwo: false
        }
    }

    // hideShowClock = () => {
    //     this.setState({
    //         isClockShow: !this.state.isClockShow,
    //         isShowText: !this.state.isShowText
    //     });
    // }

    handleToggle = () => {
        this.setState({
            isToggleOne: !this.state.isToggleOne,
            isToggleTwo: !this.state.isToggleTwo
        });
    }

    render() {
        return (
            <div className='content-place'>
                {/* <button onClick={this.hideShowClock} className='btn'>
                    {this.state.isShowText === true ? 'Show Clock' : 'Show Comment'}
                </button>
                {
                    this.state.isClockShow === true ? <Clock /> : <Comment user={comment} />
                } */}
                <ToggleOne isToggleOne={this.state.isToggleOne} toggle={this.handleToggle} />
                <ToggleTwo isToggleTwo={this.state.isToggleTwo} toggle={this.handleToggle} />
            </div>
        )
    }
}
export default Content;
