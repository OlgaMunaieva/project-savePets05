import Logout from 'components/user/Logout/Logout';
import PetsData from 'components/user/petsData/PetsData';
import UserData from 'components/user/userData/UserData';
import variables from '../settings/variables';

import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState, useEffect } from 'react';
import ModalCongrats from 'components/modalCongrats/ModalCongrats';

export default function UserPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // congrat Modal
  useEffect(() => {
    const redirectPath = localStorage.getItem('redirectPath');
    if (redirectPath === '/register') {
      setIsModalOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            repudiandae nostrum reiciendis ullam? Voluptatibus, autem illo
            delectus numquam asperiores animi, sint eum placeat amet eius ipsam
            laboriosam, nostrum quia magnam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Molestiae veniam laboriosam pariatur
            vitae corrupti laudantium reiciendis. Numquam, voluptate totam,
            earum fuga distinctio iure officiis ipsam tempora quia modi dicta ex
            expedita similique minus cupiditate ipsa minima repellendus soluta
            aperiam perspiciatis nisi ipsum. Pariatur deserunt quod autem quo
            nulla perspiciatis necessitatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cumque doloremque praesentium nam eius
            doloribus inventore, minima, facere at temporibus distinctio labore
            nobis reprehenderit porro, consequatur ipsam ipsum sapiente
            asperiores quasi modi repellendus laudantium est quaerat veniam
            unde. Minus, deserunt distinctio quae modi mollitia minima, ullam
            labore accusamus recusandae facilis ratione cum voluptas enim,
            excepturi reiciendis beatae incidunt veniam numquam! Delectus id
            velit laborum, tempora nostrum mollitia aliquid quis facilis! Ipsa
            laborum ex hic, sit adipisci earum aperiam ea exercitationem
            mollitia nemo eius dignissimos delectus sed distinctio dolore
            maiores dolorum praesentium quo necessitatibus numquam voluptas ad
            consequatur esse beatae? Quas quibusdam consequuntur voluptatum
            reprehenderit nemo dolore enim esse est illo eius a pariatur
            perspiciatis, optio dolorum consequatur suscipit laborum facere quia
            facilis, repudiandae excepturi ratione. Minima ea assumenda amet
            labore. Tempore, ipsum harum rerum cumque impedit reprehenderit
            itaque corporis quae, soluta nulla magni quis perferendis. Quae,
            ipsum fuga tempore quia expedita quasi vel eligendi fugit
            voluptatibus non. Beatae provident iure, mollitia quos aspernatur
            aliquid eum officia id. Consequuntur voluptatum non minima provident
            quam quibusdam sed obcaecati. Tempore, sapiente pariatur maxime ut
            quisquam possimus nemo et quasi sunt itaque voluptates explicabo
            est. Voluptate eum soluta nesciunt dolorem accusantium nobis! Ullam
            minima totam explicabo, perferendis provident eaque ea ut! Vitae
            assumenda officia veritatis fugit iure consectetur consequuntur
            aliquam libero facilis, deleniti labore voluptates amet dolorem quas
            expedita tempore facere dignissimos. Ducimus nobis totam voluptatum
            expedita. In unde omnis cum voluptas perferendis aperiam numquam
            autem atque eveniet, perspiciatis quos ab iste excepturi consequatur
            repellendus obcaecati mollitia blanditiis? Ipsa tempora cum ullam
            fugit laboriosam, corrupti doloremque molestias quis sequi doloribus
            atque sint cupiditate magni nemo voluptas non est dolor repellendus
            quisquam repudiandae eligendi ducimus consectetur! Corrupti ex
            saepe, repellat autem qui aliquid asperiores rerum, repellendus
            incidunt accusamus voluptates explicabo similique, sunt cupiditate
            nobis. Non, vitae voluptates optio quam suscipit nostrum
            exercitationem consequatur facilis iure laboriosam amet accusantium
            tempore quasi nemo explicabo enim architecto reprehenderit ullam
            ipsam! Sunt modi repellat libero voluptatibus odio, consequuntur
            numquam facilis? Eligendi, architecto ducimus. Suscipit, doloremque
            odio qui atque amet sed libero minima minus dolorum autem illo nam,
            ex, architecto nesciunt quos nihil voluptates quo esse quas natus.
            Blanditiis, numquam? Iusto tenetur pariatur porro aliquid aperiam
            eius voluptas nulla beatae sed praesentium eos, voluptatem
            consequuntur quos doloribus ab adipisci molestiae officia repellat
            suscipit iure earum deserunt! Ab cumque dolorum tempora voluptatem
            qui quaerat, aliquam veniam inventore magnam rem ad accusamus,
            explicabo doloribus saepe suscipit dolore provident harum voluptate
            consectetur similique maiores eos reiciendis at. Exercitationem iste
            quo error aspernatur dolorum maxime veritatis animi? Ex sunt
            possimus iste sequi aliquam dignissimos maxime veritatis dolores
            error optio ratione quasi eligendi quisquam adipisci minima,
            voluptatem corporis facilis itaque dolore praesentium neque
            similique non porro? Cupiditate velit saepe, explicabo labore
            nostrum modi repellendus eum beatae vitae laboriosam quod voluptatem
            eius assumenda iste fuga maiores eligendi consequuntur? A itaque
            sunt voluptatibus quasi ut impedit iure, magni eveniet numquam
            dolores nulla ipsum vel, similique et, odit reprehenderit eaque
            fugit neque. Accusantium accusamus, repellat perspiciatis nemo odit
            ducimus!
          </p>
          <Logout />
        </div>
        <PetsData />
      </div>

      {isLoggedIn && isModalOpen && (
        <ModalCongrats closeModal={closeModal} isOpenedModal={isModalOpen} />
      )}
    </main>
  );
}
