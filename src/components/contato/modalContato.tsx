import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography } from '@material-ui/core';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdClose, MdEmail } from 'react-icons/md';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalContato({ isOpen, onClose }: ModalProps) {
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
            Contato
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
          Relaxa! Ainda não sou famosa...
          <br />
          <img
            height='227.4774774774775px'
            src='https://media3.giphy.com/media/3o6YgrDPMg1pa2kV0s/giphy.gif?cid=de9bf95ebnkhr7ncx6vucp4nbghznrvlmslr47m7enngdoag&amp;rid=giphy.gif&amp;ct=g'
            width='200px'
            style={{
              borderRadius: '10px',
            }}
            alt='beyonce gif'
          />
          <br />
          você pode me encontrar nas redes sociais ou mandar um e-mail, também tem meu WhatsApp.
        </DialogContentText>

        <Box mt={2}>
          <Grid container direction='row' justifyContent='center' spacing={2} alignItems='center'>
            <Grid item xs={12}>
              <IconButton
                href='mailto:camila.texeira42@hotmail.com'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: '#fff',
                  background: 'rgba(0,0,0,1)',
                  backgroundColor: 'rgba(255,0,0,1)',
                }}
              >
                <MdEmail />
              </IconButton>

              <Typography
                variant='caption'
                color='textSecondary'
                style={{
                  marginLeft: '10px',
                }}
              >
                camila.teixeira42@hotmail.com
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <IconButton
                href='https://wa.me/5531989658128'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: '#fff',
                  background: 'rgba(0,0,0,1)',
                  backgroundColor: 'rgba(255,0,0,1)',
                }}
                aria-label='whatsapp'
              >
                <FaWhatsapp />
              </IconButton>

              <Typography
                variant='caption'
                color='textSecondary'
                style={{
                  marginLeft: '10px',
                }}
              >
                (31) 98965-8128
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <IconButton
                href='https://www.instagram.com/acamilateixeiraa/'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: '#fff',
                  background: 'rgba(0,0,0,1)',
                  backgroundColor: 'rgba(255,0,0,1)',
                }}
                aria-label='instagram'
              >
                <FaInstagram />
              </IconButton>

              <Typography
                variant='caption'
                color='textSecondary'
                style={{
                  marginLeft: '10px',
                }}
              >
                @acamilateixeiraa
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <IconButton
                // linkedin
                href='https://www.linkedin.com/in/acamilateixeira/'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: '#fff',
                  background: 'rgba(0,0,0,1)',
                  backgroundColor: 'rgba(255,0,0,1)',
                }}
                aria-label='linkedin'
              >
                <FaLinkedinIn />
              </IconButton>

              <Typography
                variant='caption'
                color='textSecondary'
                style={{
                  marginLeft: '10px',
                }}
              >
                linkedin.com/in/acamilateixeira/
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
