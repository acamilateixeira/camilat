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
import { MdClose, MdDownload } from 'react-icons/md';

import { Tabela } from './tabela';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCarreira({ isOpen, onClose }: ModalProps) {
  function handleDownload() {
    const element = document.createElement('a');
    element.setAttribute('href', 'https://acamilateixeira.github.io/camilat/files/cv.pdf');
    element.setAttribute('target', '_blank');
    element.click();
  }

  return (
    <Dialog fullScreen open={isOpen} onClose={onClose}>
      <DialogTitle
        style={{
          background: 'rgba(0,0,0,1)',
          padding: '10px',
        }}
      >
        <Grid container direction='row' justifyContent='space-between'>
          <Typography
            variant='h6'
            style={{
              color: '#fff',
            }}
          >
            Carreira
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
          Aqui você vai entender um pouco da minha carreira! Vamos lá!
        </DialogContentText>

        <Tabela />

        <Typography variant='h6' style={{ marginTop: '20px' }}>
          Fazendo o download do currículo você terá um arquivo detalhado sobre cada cargo em que
          trabalhei.
        </Typography>

        <Button
          onClick={handleDownload}
          startIcon={<MdDownload />}
          variant='contained'
          color='primary'
          style={{
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Download PDf CV
        </Button>
      </DialogContent>
    </Dialog>
  );
}
