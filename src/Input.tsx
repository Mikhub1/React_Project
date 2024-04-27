import React from 'react'

interface Props
{
    name: string
}

const input = ({name}: Props) => {
    return (
      <input>{name}</input>
    )
  }

  export default input

 