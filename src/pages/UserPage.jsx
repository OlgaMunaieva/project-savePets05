import Logout from 'components/user/Logout/Logout';
import PetsData from 'components/user/petsData/PetsData';
import UserData from 'components/user/userData/UserData';
import variables from '../settings/variables';

export default function UserPage() {
  return (
    <main>
      <h1 style={variables.visualHidden}>User Page</h1>

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
