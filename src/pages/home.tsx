import { createStyles, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { FaLaravel, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

import { Tabela } from '../components/home/tabela';

export function Home() {
  const css = makeStyles(theme =>
    createStyles({
      imagem: {
        borderRadius: '50%',
        padding: '10px',
        width: '50%',
        margin: '10px',
        textAlign: 'center',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        objectFit: 'cover',

        animationIterationCount: 'infinite',
        animation: `$girar 3000ms ${theme.transitions.easing.easeInOut}`,
        animationTimingFunction: 'linear',
      },

      '@keyframes girar': {
        '0%': {
          background: 'linear-gradient(100deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)',
        },
        '25%': {
          background: 'linear-gradient(50deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)',
        },
        '50%': {
          background: 'linear-gradient(25deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)',
        },
        '100%': {
          background: 'linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)',
        },
      },

      titulo: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '10px',
        marginBottom: '20px',
      },

      container: {
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255,0,0,0.1)',
        marginBottom: '20px',
      },
    })
  )();

  return (
    <>
      <Grid container justifyContent='center' alignItems='center' direction='row'>
        <Grid item sm={12} md={6} lg={6}>
          <img
            className={css.imagem}
            src='https://acamilateixeira.github.io/camilat/img/foto.png'
            alt='foto'
          />

          <Typography variant='h4' color='textSecondary'>
            Desenvolvedora Full Stack
          </Typography>

          <Typography variant='h5' color='textSecondary'>
            <MdLocationOn />
            Betim, MG
            <br />
            ______________________
            <br />
            <IconButton>
              <FaReact />
            </IconButton>
            <IconButton>
              <FaLaravel />
            </IconButton>
            <IconButton>
              <FaNodeJs />
            </IconButton>
            <IconButton>
              <FaPython />
            </IconButton>
          </Typography>
        </Grid>

        <Grid item sm={12} md={6} lg={6} className={css.container}>
          <Typography className={css.titulo} align='center'>
            Que bom ter você aqui!
          </Typography>

          <Typography variant='body1' align='center'>
            Meu nome é <b>Camila Teixeira</b>, tenho <b>22 anos</b> e sou{' '}
            <b>Desenvolvedora FullStack</b>
            <br />
            <br />
            Faz <b> 2 anos</b> que comecei a trabalhar com <b>HTML</b> e <b>CSS</b> em Portugal, lá
            costumava fazer sites com WordPress foi assim que conheci a <b>programação</b>.
            <br />
            <br />
            Acabei decidindo me tornar <b>desenvolvedora</b> e voltei ao Brasil para fazer faculdade
            de Análise e Desenvolvimento de Sistemas (Termina em 2023).
            <br />
            Hoje trabalho como <b>assistente de desenvolvimento - fullStack</b> no{' '}
            <b>Sicoob Central Cecremge - MG </b> aqui aprendi:
            <br />
          </Typography>

          <Grid container justifyContent='center' alignItems='center' direction='row'>
            <Grid item sm={12} md={4} lg={4}></Grid>
            <Tabela />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
