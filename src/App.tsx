import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

interface Subject {
  id: string
  name: string
  age: number
  gender: string
  diagnosisDate: string
  status: string
}

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://055d8281-4c59-4576-9474-9b4840b30078.mock.pstmn.io/subjects')
      .then(response => response.json())
      .then(data => setData(data.data))
  }, [])

  return (
    <>
      {data.map((item: Subject) => (
        <Card key={item.id} name={item.name} />
      ))}
    </>
  )
}

export default App
