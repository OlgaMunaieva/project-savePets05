import Title from 'components/title/TitlePage';
import NotFound from 'components/notFound/NotFound';

export default function ErrorPage() {
  return (
    <>
      <Title>Ooops! This page not found :(</Title>
      <NotFound />
    </>
  );
}
