import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

export function Tabela() {
  const data = [
    {
      id: 1,
      empresa: 'Sicoob Central Cecremge',
      cargo: 'Assistente de Desenvolvimento',
      inicio: 'Julho de 2021',
      fim: '-',
    },

    {
      id: 2,
      empresa: 'Construtora Você',
      cargo: 'Analista de Crédito',
      inicio: 'Março de 2018',
      fim: 'Novembro de 2020',
    },

    {
      id: 3,
      empresa: 'Caixa Econômica Federal',
      cargo: 'Estagiária',
      inicio: 'Novembro de 2016',
      fim: 'Novembro de 2017',
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table size='small'>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: 'rgba(255,0,0,0.3)',
            }}
          >
            <TableCell>Empresa</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Data de Entrada</TableCell>
            <TableCell>Data de Saída</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.empresa}</TableCell>
              <TableCell>{row.cargo}</TableCell>
              <TableCell>{row.inicio}</TableCell>
              <TableCell>{row.fim}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
