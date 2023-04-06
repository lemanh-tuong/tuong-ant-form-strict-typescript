import { InputNumber, InputNumberProps, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Props } from './@types/Props';
import { Result } from './@types/Result';
import { Loading } from './components/Loading';
import './styles/main.css';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const Number = ({
  onChange,
  value,
  after,
  before,
  className = '',
  controls,
  defaultFocus = false,
  description,
  disabled = false,
  formatter,
  id,
  loading = false,
  max,
  min,
  parser,
  prefix,
  readonly = false,
  size = 'large',
  status,
  step,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState<Result>(() => setStateViaProps(value));

  const handleChange: InputNumberProps<number>['onChange'] = event => {
    if (readonly) {
      return;
    }
    const nextState = getValueOnChange(event);
    setValueState(nextState);
    onChange?.(nextState);
  };

  useEffect(() => {
    if (!equals(valueState, value)) {
      setValueState(() => setStateViaProps(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Tooltip title={description}>
      <div
        id={id}
        className={classNames({
          Number__container: true,
          Number__readonly: readonly,
          [className]: true,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
        <InputNumber
          keyboard
          value={valueState}
          onChange={handleChange}
          addonAfter={after}
          addonBefore={before}
          autoFocus={defaultFocus && !readonly}
          controls={controls}
          disabled={disabled || loading}
          formatter={formatter}
          max={max}
          min={min}
          parser={parser}
          prefix={prefix}
          readOnly={readonly}
          size={size}
          status={status}
          step={step}
          tabIndex={readonly ? -1 : undefined}
        />
        {loading && <Loading />}
      </div>
    </Tooltip>
  );
};
