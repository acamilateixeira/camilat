import { Divider, Typography } from '@material-ui/core';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

// criar graficos

export function Graficos() {
  const mente = [
    { name: 'Extrovetido', value: 61 },
    { name: 'Introvertido', value: 39 },
  ];

  const energia = [
    { name: 'Intuitivo', value: 77 },
    { name: 'Observador', value: 23 },
  ];

  const natureza = [
    { name: 'Pensante', value: 49 },
    { name: 'Sentimentos', value: 51 },
  ];

  const taticas = [
    { name: 'Julgador', value: 57 },
    { name: 'Explorador', value: 43 },
  ];

  const identidade = [
    { name: 'Assertivo', value: 75 },
    { name: 'Cauteloso', value: 25 },
  ];

  const COLORS = ['#0088FE', 'rgba(255,0,0,1)'];

  return (
    <>
      <Typography variant='h4' align='center' gutterBottom>
        Mente
      </Typography>

      <ResponsiveContainer width='50%' height='50%'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={mente}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
          >
            {mente.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>

      <Divider variant='middle' />
      <Typography variant='h4' align='center' gutterBottom>
        Energia
      </Typography>

      <ResponsiveContainer width='50%' height='50%'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={energia}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {energia.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>

      <Divider variant='middle' />
      <Typography variant='h4' align='center' gutterBottom>
        Natureza
      </Typography>

      <ResponsiveContainer width='50%' height='50%'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={natureza}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {natureza.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>

      <Divider variant='middle' />
      <Typography variant='h4' align='center' gutterBottom>
        Táticas
      </Typography>

      <ResponsiveContainer width='50%' height='50%'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={taticas}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {taticas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>

      <Divider variant='middle' />
      <Typography variant='h4' align='center' gutterBottom>
        Identidade
      </Typography>

      <ResponsiveContainer width='50%' height='50%'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={identidade}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {identidade.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
