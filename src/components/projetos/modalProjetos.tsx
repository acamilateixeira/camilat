import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography } from '@material-ui/core';
import { MdClose } from 'react-icons/md';

import { Projetos } from './projetos';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalProjetos({ isOpen, onClose }: ModalProps) {
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
            Projetos
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
          Esssa é a seção de projetos ela ainda está em desenvolvimento (be Patient)
          <span role='img' aria-label='triste'>
            😢
          </span>
        </DialogContentText>

        <Projetos />
      </DialogContent>
    </Dialog>
  );
}
