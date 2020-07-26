import PropTypes from 'prop-types';
import React from 'react';
import {Animated, TextInput, View} from 'react-native';
import {compose, lifecycle, withStateHandlers} from 'recompose';

import {
  getContainerStyle,
  getInputStyle,
  getLabelStyle,
  styles,
} from './styles';
import {NrmText} from '../../../Components';

const _Text = ({
  isFocused,
  hasError,
  deactive,
  label,
  preText,
  value,
  onChangeText,
  onFocus,
  onBlur,
  autoCapitalize,
  keyboardType,
  returnKeyType,
  blurOnSubmit,
  onSubmitEditing,
  anim,
  setInputRef,
  autoFocus,
}) => {
  const containerStyle = getContainerStyle(hasError, isFocused, value, anim);
  const labelStyle = getLabelStyle(anim, deactive);
  const inputStyle = getInputStyle(preText, value);

  return (
    <Animated.View style={containerStyle}>
      <View style={styles.labelContainer}>
        <NrmText.T5G bold style={labelStyle}>
          {label}
        </NrmText.T5G>
      </View>
      <TextInput
        style={inputStyle}
        ref={setInputRef}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
        onSubmitEditing={onSubmitEditing}
        editable={!deactive}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {preText && (isFocused || value) ? (
        <NrmText.T3D type="book" style={styles.preText}>
          {preText}
        </NrmText.T3D>
      ) : null}
    </Animated.View>
  );
};

export default compose(
  withStateHandlers(
    props => ({
      anim: new Animated.Value(props.value ? 1 : 0),
      inputRef: null,
    }),
    {
      setInputRef: () => inputRef => ({inputRef}),
    },
  ),
  lifecycle({
    componentDidUpdate(prevProps) {
      const prevTo = prevProps.isFocused || prevProps.value !== '';
      const currentTo = this.props.isFocused || this.props.value !== '';

      if (prevTo !== currentTo) {
        Animated.timing(this.props.anim, {
          toValue: this.props.isFocused || this.props.value !== '' ? 1 : 0,
          duration: 200,
        }).start();
      }
      if (prevProps.isFocused && !this.props.isFocused)
        this.props.inputRef.blur();
    },
  }),
)(_Text);

_Text.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  deactive: PropTypes.bool.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  keyboardType: PropTypes.string.isRequired,
  blurOnSubmit: PropTypes.bool.isRequired,
  onSubmitEditing: PropTypes.func,
  anim: PropTypes.instanceOf(Animated.Value).isRequired,
  preText: PropTypes.string,
};

_Text.defaultProps = {
  isFocused: false,
  hasError: false,
  deactive: false,
  value: '',
  autoFocus: false,
  onChangeText: () => {},
  onFocus: () => {},
  onBlur: () => {},
  autoCapitalize: 'sentences',
  keyboardType: 'default',
  blurOnSubmit: true,
};
