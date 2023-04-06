import { Props } from './@types/Props';
import { CheckboxMultiple, CheckboxSingle } from './components/Checkbox';
import { DatePickerRange, DatePickerSingle } from './components/DatePicker';
import { Input } from './components/Input';
import { Mentions } from './components/Mentions';
import { Number } from './components/Number';
import { Radio } from './components/Radio';
import { Rate } from './components/Rate';
import { SelectMultiple, SelectSingle, SelectTag } from './components/Select';
import { SliderRange, SliderSingle } from './components/Slider';
import { Switch } from './components/Switch';
import { Textarea } from './components/Textarea';
import { TimePickerRange, TimePickerSingle } from './components/TimePicker';

const Mapping: Record<Props['type'], (...args: any) => JSX.Element> = {
  CheckboxMultiple: CheckboxMultiple,
  CheckboxSingle: CheckboxSingle,
  DatePickerRange: DatePickerRange,
  DatePickerSingle: DatePickerSingle,
  Input: Input,
  Mentions: Mentions,
  Number: Number,
  Radio: Radio,
  Rate: Rate,
  SelectMultiple: SelectMultiple,
  SelectSingle: SelectSingle,
  SelectTag: SelectTag,
  SliderRange: SliderRange,
  SliderSingle: SliderSingle,
  Switch: Switch,
  Textarea: Textarea,
  TimePickerRange: TimePickerRange,
  TimePickerSingle: TimePickerSingle,
};

export const Control = ({ type, ...props }: Props) => {
  return Mapping[type](props);
};
