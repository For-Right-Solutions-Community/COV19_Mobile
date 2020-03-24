import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import Step from './Step';

class Wizard extends Component {

    static Step = Step;

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    };

    nextHandler = () => {
        if (this.state.index !== this.props.children.length - 1) {
            this.setState(prevState => ({
                index: prevState.index + 1,
            }), () => {
				if(this.props.onNext) {
					this.props.onNext(this.state.index);
				}
			});
        }
    };

    prevHandler = () => {
        if (this.state.index !== 0) {
            this.setState(prevState => ({
                index: prevState.index - 1,
            }), () => {
				if(this.props.onPrev) {
					this.props.onPrev(this.state.index);
				}
			});
        }
    };

    endHandler = () => {
        if (this.props.onEnd) {
            this.props.onEnd();
        }
    };

    render = () => {
        return (
            <View style={{flex: 1}}>
                {
                    React.Children.map(this.props.children, (el, index) => {
                        if (index == this.state.index) {
                            return React.cloneElement(el, {
                              index: this.state.index ,
                              onNext: this.nextHandler,
                              onPrev: this.prevHandler,
                              onEnd: this.endHandler,
                              isLast: this.state.index === this.props.children.length - 1,
                            })
                        } 

                        return null
                    })
                }
            </View>
        )
    }
}

export default Wizard;
