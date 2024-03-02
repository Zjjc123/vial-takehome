import { useEffect, useState } from 'react'

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import './App.css'
import SubjectCard, { SubjectCardProps } from './components/SubjectCard';


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://055d8281-4c59-4576-9474-9b4840b30078.mock.pstmn.io/subjects')
      .then(response => response.json())
      .then(data => setData(data.data))
  }, [])

  return (
    <MantineProvider>
      {data.map((item: SubjectCardProps) => (
        <SubjectCard key={item.id} {...item} />
      ))}
    </MantineProvider>
  )
}

export default App
