import { colors } from 'settings/variables';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    paddingTop: '40px',
    alignItems: 'start',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: `${colors.success}`,
  },
};

export default function MainPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
