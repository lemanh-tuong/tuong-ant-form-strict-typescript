import { Rate as AntRate, RateProps as AntRateProps, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals, isNil, nth, update } from 'ramda';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Props } from './@types/Props';
import { Loading } from './components/Loading';
import './styles/main.css';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const Rate = ({
  onChange,
  value,
  allowHalf = false,
  character,
  className = '',
  count,
  description,
  disabled = false,
  id = '',
  loading = false,
  readonly = false,
  status,
  tooltips,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const prevTabIndexes = useRef<Array<string | undefined>>([]);

  const handleChange: AntRateProps['onChange'] = value => {
    if (readonly) {
      return;
    }
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

  // Set tabIndex cho input
  useEffect(() => {
    if (readonly && containerRef.current) {
      containerRef.current.querySelectorAll('.ant-rate-star > div[role="radio"]').forEach(($el, index) => {
        update(index, $el.getAttribute('tabindex'), prevTabIndexes.current);
        $el.setAttribute('tabindex', '-1');
      });
    } else if (!readonly) {
      containerRef.current?.querySelectorAll('.ant-rate-star > div[role="radio"]').forEach(($el, index) => {
        const prevTabIndexValue = nth(index, prevTabIndexes.current);
        if (prevTabIndexValue) {
          $el.setAttribute('tabindex', prevTabIndexValue);
        }
      });
    }
  }, [readonly]);

  return (
    <Tooltip title={description} open={tooltipVisible}>
      <div
        id={id}
        ref={containerRef}
        className={classNames({
          Rate__container: true,
          Rate__readonly: readonly,
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
          tabIndex={readonly ? -1 : undefined}
        />
        {loading && <Loading />}
      </div>
    </Tooltip>
  );
};
