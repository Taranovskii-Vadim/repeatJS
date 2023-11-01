import { memo, useCallback, useEffect, useState } from 'react';

const shuffle = (arr: string[]): string[] => {
  const result: string[] = [];

  while (arr.length > 0) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr.splice(randomIndex, 1)[0]);
  }

  return result;
};

type Props = { data: string[]; error: string; current: string; onClick: (item: string) => void };

const Column = memo(({ data, error, current, onClick }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data.map((item) => {
        const backgroundColor = item === error ? 'red' : item === current ? 'blue' : '';

        return (
          <button
            key={item}
            style={{
              cursor: 'pointer',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '8px',
              marginBottom: '8px',
              backgroundColor,
            }}
            onClick={() => onClick(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
});

type Selected = { key: string; value: string };

const CountryCapitalGame = ({ data }: { data: Record<string, string> }) => {
  const [keys, setKeys] = useState(() => shuffle(Object.keys(data)));
  const [values, setValues] = useState(() => shuffle(Object.values(data)));

  const [errors, setErrors] = useState<Selected>({ key: '', value: '' });
  const [selected, setSelected] = useState<Selected>({ key: '', value: '' });

  useEffect(() => {
    if (selected.key && selected.value) {
      const correctAnswer = data[selected.key];

      if (correctAnswer === selected.value) {
        setKeys((prev) => prev.filter((item) => item !== selected.key));
        setValues((prev) => prev.filter((item) => item !== selected.value));
      } else {
        setErrors(selected);
      }

      setSelected({ key: '', value: '' });
    }
  }, [selected]);

  useEffect(() => {
    if (!keys.length && !values.length) {
      console.log('Congratulations!!!');
    }
  }, [keys.length, values.length]);

  const handleSetSelected = (key: keyof Selected) =>
    useCallback((item: string) => {
      setErrors({ key: '', value: '' });
      setSelected((prev) => ({ ...prev, [key]: item }));
    }, []);

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
      <Column data={keys} error={errors.key} current={selected.key} onClick={handleSetSelected('key')} />
      <Column data={values} error={errors.value} current={selected.value} onClick={handleSetSelected('value')} />
    </div>
  );
};

export default CountryCapitalGame;
