import { Text, Link, Container, Avatar } from '@nextui-org/react';
import KleeCute from '../assets/images/klee-avatar.jpg';

const Copyright = () => (
  <Container
    fluid
    display="flex"
    justify="center"
    direction="column"
    alignItems="center"
    css={{
      padding: '60px 0 30px 0',
    }}
  >
    <Avatar alt="Klee Cute" src={KleeCute} css={{ size: '$20' }} />
    <Text>
      {'© '}
      <Link href="https://remix-watchmovie.vercel.app/">Remix Movie</Link>{' '}
    </Text>
  </Container>
);

export default Copyright;
