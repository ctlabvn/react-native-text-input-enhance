import React from 'react';
import { TextInput as T, TextInputProps } from 'react-native';

type Props = {
  hasRef?: () => void,
  onChangeText?: () => void
};
export default class TextInput extends React.Component<TextInputProps, Props> {
  componentDidMount() {
    this.props.hasRef && this.props.hasRef(this.unputRef);
  }

  render() {
    return <T ref={ref => (this.unputRef = ref)} {...this.props} />;
  }
}
