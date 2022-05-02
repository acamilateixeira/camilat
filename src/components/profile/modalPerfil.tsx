import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { MdClose } from 'react-icons/md';

import { Graficos } from './graficos';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalPerfil({ isOpen, onClose }: ModalProps) {
  return (
    <Dialog fullScreen open={isOpen} onClose={onClose}>
      <DialogTitle
        style={{
          background: 'rgba(0,0,0,1)',
          padding: '10px',
        }}
      >
        <Grid container direction='row' justify='space-between'>
          <Typography
            variant='h6'
            style={{
              color: '#fff',
            }}
          >
            Perfil Profissional
          </Typography>

          <IconButton
            onClick={onClose}
            style={{
              color: '#fff',
              background: 'rgba(0,0,0,1)',
              backgroundColor: 'rgba(0,0,0,1)',
            }}
            aria-label='fechar'
          >
            <MdClose />
          </IconButton>
        </Grid>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Aqui é uma parte incríve do meu portfólio! Estou abrindo meu
          <span role='img' aria-label='coracao'>
            💖
          </span>
          para que possamos conversar sobre quem eu sou, a Profissional que me tornei ao longo
          desses anos.
          <br />
          Mais que isso quem estou meu tornando.
        </DialogContentText>

        <Typography variant='h6'>Personalidade "Protagonista"</Typography>

        <Graficos />

        <Typography variant='caption' color='textSecondary'>
          Teste realizado pelo site{' '}
          <a href='16personalities.com' target='_blank' rel='noopener noreferrer'>
            16 Personalities
          </a>
        </Typography>

        <Typography
          variant='h6'
          style={{
            textAlign: 'center',
          }}
        >
          <strong>O isso significa?</strong>
        </Typography>

        <Button
          variant='outlined'
          color='primary'
          fullWidth
          style={{
            marginTop: '10px',
            marginBottom: '30px',
          }}
          href='https://www.16personalities.com/br/personalidade-enfj'
        >
          Saiba mais
        </Button>
      </DialogContent>
    </Dialog>
  );
}
