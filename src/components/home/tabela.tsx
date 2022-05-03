import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

export function Tabela() {
  return (
    <TableContainer
      component={Paper}
      style={{ margin: '30px', maxWidth: '200px', maxHeight: '300px' }}
    >
      <Table size='small'>
        <TableBody>
          <TableRow>
            <TableCell align='center'>JavaScript</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align='center'>React</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align='center'>Node.js</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align='center'>PHP</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align='center'>Laravel</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align='center'>Git</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align='center'>SQLSERVER</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align='center'>Metodologias Ágeis</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
