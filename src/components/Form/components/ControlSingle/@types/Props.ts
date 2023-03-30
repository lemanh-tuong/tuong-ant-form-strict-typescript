import { CheckboxMultipleProps, CheckboxSingleProps } from '../components/Checkbox';
import { DatePickerRangeProps, DatePickerSingleProps } from '../components/DatePicker';
import { InputProps } from '../components/Input';
import { MentionsProps } from '../components/Mentions';
import { NumberProps } from '../components/Number';
import { RadioProps } from '../components/Radio';
import { RateProps } from '../components/Rate';
import { SelectMultipleProps, SelectSingleProps, SelectTagProps } from '../components/Select';
import { SliderRangeProps, SliderSingleProps } from '../components/Slider';
import { SwitchProps } from '../components/Switch';
import { TextareaProps } from '../components/Textarea';
import { TimePickerRangeProps, TimePickerSingleProps } from '../components/TimePicker';

interface CheckboxMultiple extends CheckboxMultipleProps<any> {
  type: 'CheckboxMultiple';
}
interface CheckboxSingle extends CheckboxSingleProps<any> {
  type: 'CheckboxSingle';
}

interface DatePickerRange extends DatePickerRangeProps {
  type: 'DatePickerRange';
}
interface DatePickerSingle extends DatePickerSingleProps {
  type: 'DatePickerSingle';
}

interface Input extends InputProps {
  type: 'Input';
}

interface Mentions extends MentionsProps {
  type: 'Mentions';
}

interface Number extends NumberProps {
  type: 'Number';
}

interface Radio extends RadioProps<any> {
  type: 'Radio';
}

interface Rate extends RateProps {
  type: 'Rate';
}

interface SelectMultiple extends SelectMultipleProps<any> {
  type: 'SelectMultiple';
}
interface SelectSingle extends SelectSingleProps<any> {
  type: 'SelectSingle';
}
interface SelectTag extends SelectTagProps {
  type: 'SelectTag';
}

interface SliderRange extends SliderRangeProps {
  type: 'SliderRange';
}
interface SliderSingle extends SliderSingleProps {
  type: 'SliderSingle';
}

interface Switch extends SwitchProps {
  type: 'Switch';
}

interface Textarea extends TextareaProps {
  type: 'Textarea';
}

interface TimePickerRange extends TimePickerRangeProps {
  type: 'TimePickerRange';
}
interface TimePickerSingle extends TimePickerSingleProps {
  type: 'TimePickerSingle';
}

export type ControlProps =
  | CheckboxSingle
  | CheckboxMultiple
  | DatePickerRange
  | DatePickerSingle
  | Input
  | Mentions
  | Number
  | Radio
  | Rate
  | SelectMultiple
  | SelectSingle
  | SelectTag
  | SliderRange
  | SliderSingle
  | Switch
  | Textarea
  | TimePickerRange
  | TimePickerSingle;
