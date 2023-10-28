import { useState } from 'react';

type Tree = { name: string; children?: Tree[] };

const tree: Tree = {
  name: 'repeatjs',
  children: [
    { name: 'node_modules', children: [{ name: 'debug', children: [{ name: 'package.json' }] }] },
    { name: 'src', children: [{ name: 'hooks' }, { name: 'pureJsTasks' }, { name: 'components' }] },
    { name: '.env' },
    { name: '.gitignore' },
    { name: 'index.html' },
    { name: 'package-lock.json' },
  ],
};

const Entry = ({ entry, depth }: { entry: Tree; depth: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ paddingLeft: `${depth * 10}px` }}>
      <div style={{ marginBottom: '8px' }}>
        {entry.children ? <button onClick={() => setOpen((prev) => !prev)}>{entry.name}</button> : <p>{entry.name}</p>}
      </div>
      {entry.children && open
        ? entry.children.map((item) => <Entry key={item.name} entry={item} depth={depth + 1} />)
        : null}
    </div>
  );
};

const CatalogTree = () => (
  <div style={{ maxWidth: '750px', margin: 'auto' }}>
    <Entry entry={tree} depth={0} />
  </div>
);

export default CatalogTree;
