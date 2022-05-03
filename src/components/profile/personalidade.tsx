import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

export function Personalidade() {
  return (
    <Card>
      <CardHeader title='Personalidade' />

      <CardContent>
        <Typography variant='body1'>
          Eu me tenho uma personalide (dita pelos meus colegas de equipe) como muito{' '}
          <strong>dedicada</strong>.
          <br />
          <br />
          <img
            src='https://media3.giphy.com/media/FFb9yZK6t0oDu/giphy.gif?cid=de9bf95e4rt06bgy3plo1dawo25vkl525lkugb0k397yulqc&amp;rid=giphy.gif&amp;ct=g'
            width='200px'
            style={{ borderRadius: '10%' }}
            alt='cachorro dedicado'
          />
          <br />
          Gosto muito de estudar, <strong>aprender</strong> com outras pessoas e ensinar se eu
          puder.
          <br />
          <br />
          Costumo sempre dar ideias de melhoria. Não gosto de perder tempo com o problema, mas sim
          com a solução.
          <br />
          Sou <strong>comunicativa</strong> , mas também sei que preciso melhorar.
          <br />
          <br />
          Minha maior vantagem é a <strong>criatividade</strong>
          , sempre estou trabalhando em algo novo.
          <br />
          Gosto de colocar em prática o conhecimento e correr para o desafio.
          <br />
          <br />
          <img
            src='https://media1.giphy.com/media/7kn27lnYSAE9O/giphy.gif?cid=de9bf95edusteep49wpjgeyvehbvs63bkwdvcekcwenrv36a&amp;rid=giphy.gif&amp;ct=g'
            width='200px'
            style={{ borderRadius: '10%' }}
            alt='correndo'
          ></img>
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
