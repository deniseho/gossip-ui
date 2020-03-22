import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Node IP</th>
        <th>State</th>
        <th>Revision</th>
        <th>Heartbeat</th>
        <th>data</th>
      </tr>
    </thead>
  )
}

const TableRow = ({node}) => {
  return (
  <tr>
    <td>{node.ip}</td>
    <td>{node.state}</td>
    <td>{node.revision}</td>
    <td>{node.heartbeat}</td>
  </tr>
  )
}

const Table = ({data}) => {
  return (
    <table>
      <TableHeader/>
      <tbody>
        {data.map((node, index) => (
          <TableRow key={index} index={index} node={node} />
        ))}
      </tbody>
    </table>
  )
}

export default Table;
