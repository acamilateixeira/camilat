import {
  AppBar,
  FormHelperText,
  Grid,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme as useThemeMaterialUI,
} from '@material-ui/core';
import { useState } from 'react';
import { MdBadge, MdContacts, MdNextWeek, MdTipsAndUpdates } from 'react-icons/md';

import { ModalPerfil } from './profile/modalPerfil';

interface NavbarProps {
  toggleHiddenSidebar: () => void;
}

export function Navbar({ toggleHiddenSidebar }: NavbarProps) {
  const theme = useThemeMaterialUI();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [abrirModalPerfil, setAbrirModalPerfil] = useState(false);

  function handleAbrirModalPerfil() {
    setAbrirModalPerfil(true);
  }

  return (
    <>
      <AppBar
        color='inherit'
        position='fixed'
        style={{
          marginTop: 0,
          bottom: 0,
          top: 'auto',
          background: 'rgba(255,0,0,1)',
          boxShadow: '1 0px 8px 5px rgba(0, 0, 0, 0.1)',
          borderRadius: '16px 16px 0px 0px',
          width: isMobile ? '100%' : '50%',
          transform: isMobile ? 'translateX(0%)' : 'translateX(-50%)',
        }}
      >
        <Toolbar>
          <Grid
            container
            justifyContent='space-between'
            direction='row'
            spacing={3}
            style={{
              padding: 2,
            }}
          >
            <Grid item>
              <IconButton
                onClick={handleAbrirModalPerfil}
                style={{
                  color: '#fff',
                }}
                aria-label='perfil'
              >
                <MdBadge />
              </IconButton>

              <FormHelperText style={{ color: '#fff', textAlign: 'center' }}>
                Perfil Profissional
              </FormHelperText>
            </Grid>

            <Grid item>
              <IconButton
                style={{
                  color: '#fff',
                }}
                aria-label='carreira'
              >
                <MdNextWeek />
              </IconButton>

              <FormHelperText style={{ color: '#fff', textAlign: 'center' }}>
                Carreira
              </FormHelperText>
            </Grid>

            <Grid item>
              <IconButton
                onClick={toggleHiddenSidebar}
                style={{
                  color: '#fff',
                }}
                aria-label='contato'
              >
                <MdContacts />
              </IconButton>

              <FormHelperText style={{ color: '#fff', textAlign: 'center' }}>
                Contato
              </FormHelperText>
            </Grid>

            <Grid item>
              <IconButton
                style={{
                  color: '#fff',
                }}
                aria-label='projetos'
              >
                <MdTipsAndUpdates />
              </IconButton>

              <FormHelperText style={{ color: '#fff', textAlign: 'center' }}>
                Projetos
              </FormHelperText>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <ModalPerfil isOpen={abrirModalPerfil} onClose={() => setAbrirModalPerfil(false)} />
    </>
  );
}
