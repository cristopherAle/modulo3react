import React from 'react'

const ListadoRow = ({user}) => {
const {name, email} = user
  return (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
    </tr>
  )
}

export default ListadoRow