import Logout from 'components/user/Logout/Logout';
import PetsData from 'components/user/petsData/PetsData';
import UserData from 'components/user/userData/UserData';

const visualHidden = {
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
  height: 1,
  overflow: 'hidden',
  border: 0,
  padding: 0,
  clip: 'rect(0 0 0 0)',
  WebkitClipPath: 'inset(50%)',
  clipPath: 'inset(50%)',
  margin: -1,
};

export default function UserPage() {
  return (
    <main>
      <h1 style={visualHidden}>User Page</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <UserData />
          <Logout />
        </div>
        <PetsData />
      </div>
    </main>
  );
}
