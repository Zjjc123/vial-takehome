import { useEffect, useState } from 'react';

import '@mantine/core/styles.css';
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

import './App.css';
import SubjectTable from './components/SubjectTable';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

function App() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const [dark, setDark] = useState(computedColorScheme === 'dark');

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://055d8281-4c59-4576-9474-9b4840b30078.mock.pstmn.io/subjects')
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <>
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => {
          setColorScheme(dark ? 'light' : 'dark');
          setDark(!dark);
        }}
        title="Toggle color scheme"
        style={{ position: 'absolute', top: 10, right: 10 }}
      >
        {dark ? <MoonIcon style={{ width: 18, height: 18 }} /> : <SunIcon style={{ width: 18, height: 18 }} />}
      </ActionIcon>
      <SubjectTable data={data} />
    </>
  );
}

export default App;
