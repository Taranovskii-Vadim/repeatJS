import { useState } from 'react';

const Star = ({ checked, onClick }: { checked: boolean; onClick: () => void }) => (
  <div
    style={{
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      borderRadius: '50%',
      border: '1px solid black',
      backgroundColor: checked ? 'yellow' : '',
    }}
    onClick={onClick}
  />
);

const Rating = ({ value, size, onChange }: { size: number; value?: number; onChange?: (value: number) => void }) => {
  const [current, setCurrent] = useState(value || 0);
  const values: number[] = new Array(size).fill(0).map((i, index) => index + 1);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {values.map((item) => (
        <Star
          key={item}
          checked={current >= item}
          onClick={() => {
            setCurrent(item);

            if (onChange) {
              onChange(item);
            }
          }}
        />
      ))}
    </div>
  );
};

const Form = () => {
  const [value, setValue] = useState(4);

  return (
    <form
      style={{ maxWidth: '500px' }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(value);
      }}
    >
      <Rating value={value} size={10} onChange={(value) => setValue(value)} />
      <textarea rows={5} style={{ marginTop: '16px', width: '100%' }} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
