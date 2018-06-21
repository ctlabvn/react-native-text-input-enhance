import React from 'react';
import { TextInput as T, TextInputProps } from 'react-native';

type Props = {
  hasRef?: () => void,
  onChangeText?: () => void
};
export default class TextInput extends React.Component<TextInputProps, Props> {
  state = {
    text: ''
  };

  componentDidMount() {
    this.unputRef.clear = this.clear;
    this.props.hasRef && this.props.hasRef(this.unputRef);
  }

  clear = () => {
    this.setState({ text: '' });
  };

  render() {
    const { onChangeText, inputRef } = this.props;
    let props = this.props;
    let arrProps = {};
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        if (key !== 'onChangeText') {
          arrProps = { ...arrProps, [key]: props[key] };
        }
      }
    }
    return (
      <T
        ref={ref => (this.unputRef = ref)}
        value={this.state.text}
        onChangeText={val => {
          onChangeText && onChangeText(val);
          this.setState({ text: val });
        }}
        {...arrProps}
      />
    );
  }
}
