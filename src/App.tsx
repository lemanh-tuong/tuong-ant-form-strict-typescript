import { Number } from 'components/Number/Number';

export default function App() {
  return (
    <Number
      value={null}
      max={10}
      min={0}
      onChange={console.log}
      formatter={value => {
        return `${value}%`;
      }}
      parser={value => {
        const output = window.Number(value?.replaceAll('%', ''));
        return output;
      }}
    />
  );
}
