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

type OmitKeyForControlOfField<T extends any> = Omit<T, 'value' | 'onChange' | 'id'>;

interface CheckboxMultiple extends OmitKeyForControlOfField<CheckboxMultipleProps<any>> {
  type: 'CheckboxMultiple';
}
interface CheckboxSingle extends OmitKeyForControlOfField<CheckboxSingleProps<any>> {
  type: 'CheckboxSingle';
}

interface DatePickerRange extends OmitKeyForControlOfField<DatePickerRangeProps> {
  type: 'DatePickerRange';
}
interface DatePickerSingle extends OmitKeyForControlOfField<DatePickerSingleProps> {
  type: 'DatePickerSingle';
}

interface Input extends OmitKeyForControlOfField<InputProps> {
  type: 'Input';
}

interface Mentions extends OmitKeyForControlOfField<MentionsProps> {
  type: 'Mentions';
}

interface Number extends OmitKeyForControlOfField<NumberProps> {
  type: 'Number';
}

interface Radio extends OmitKeyForControlOfField<RadioProps<any>> {
  type: 'Radio';
}

interface Rate extends OmitKeyForControlOfField<RateProps> {
  type: 'Rate';
}

interface SelectMultiple extends OmitKeyForControlOfField<SelectMultipleProps<any>> {
  type: 'SelectMultiple';
}
interface SelectSingle extends OmitKeyForControlOfField<SelectSingleProps<any>> {
  type: 'SelectSingle';
}
interface SelectTag extends OmitKeyForControlOfField<SelectTagProps> {
  type: 'SelectTag';
}

interface SliderRange extends OmitKeyForControlOfField<SliderRangeProps> {
  type: 'SliderRange';
}
interface SliderSingle extends OmitKeyForControlOfField<SliderSingleProps> {
  type: 'SliderSingle';
}

interface Switch extends OmitKeyForControlOfField<SwitchProps> {
  type: 'Switch';
}

interface Textarea extends OmitKeyForControlOfField<TextareaProps> {
  type: 'Textarea';
}

interface TimePickerRange extends OmitKeyForControlOfField<TimePickerRangeProps> {
  type: 'TimePickerRange';
}
interface TimePickerSingle extends OmitKeyForControlOfField<TimePickerSingleProps> {
  type: 'TimePickerSingle';
}

export type Props =
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
