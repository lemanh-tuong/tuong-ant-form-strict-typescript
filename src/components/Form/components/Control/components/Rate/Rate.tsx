import { Rate as AntRate, RateProps as AntRateProps, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals, isNil } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Props } from './@types/Props';
import { Loading } from './components/Loading';
import './styles/main.css';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const Rate = ({
  onChange,
  value,
  allowHalf,
  character,
  className = '',
  count,
  description,
  disabled,
  status,
  tooltips,
  id,
  loading,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleChange: AntRateProps['onChange'] = value => {
    const nextState = getValueOnChange(value);
    setValueState(nextState);
    onChange?.(nextState);
  };

  const handleToggleTooltip: AntRateProps['onHoverChange'] = value => {
    if (value === undefined) {
      setTooltipVisible(false);
    } else {
      setTooltipVisible(true);
    }
  };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaProps(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Tooltip title={description} open={tooltipVisible}>
      <div
        id={id}
        className={classNames({
          Rate__container: true,
          'Rate__container--error': status === 'error',
          'Rate__container--warning': status === 'warning',
          [className]: true,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
        <AntRate
          onHoverChange={description && isNil(valueState) ? handleToggleTooltip : undefined}
          allowClear
          value={valueState ?? undefined}
          onChange={handleChange}
          allowHalf={allowHalf}
          character={character}
          count={count}
          disabled={disabled}
          tooltips={tooltips}
        />
        {loading && <Loading />}
      </div>
    </Tooltip>
  );
};
