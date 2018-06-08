import React from 'react';
import { TextInput as T, TextInputProps } from 'react-native';

export default class TextInput extends React.Component<TextInputProps> {
  state = {
    text: ''
  };

  componentDidMount() {
    this.props.hasRef && this.props.hasRef(this);
  }

  clear() {
    this.setState({ text: '' });
  }

  render() {
    const { onChangeText } = this.props;
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
