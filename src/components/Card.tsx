import React from 'react'

type Props = {
    name: string
}

export default function Card({name}: Props) {
  return (
    <div>{name}</div>
  )
}
