import moment from 'moment';
import { GetServerSideProps } from 'next';
import { Launch } from '../types/launch';
import RocketCard from '../src/components/cards/RocketCard';
import Footer from '../src/components/Footer';
import Button from '../src/components/buttons/Button';
import Head from 'next/head'
import Header from '../src/components/Header';

type Props = {
  launches: Launch[];
};

const HomePage = ({ launches }: Props) => {

  const onClickDiscover = () => {
    const element = document.getElementById('target');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Head>
        <title>SpaceX - API</title>
      </Head>
      <Header title="SpaceX" />

      <section className="h-screen min-h-full bg-black">
        <div className="container mx-auto flex flex-col h-full justify-around px-10 md:px-0">
          <div className="flex flex-col mt-48">
            <h1 className="text-3xl md:text-6xl mt-16 font-AbrilFatface text-white md:w-4/12 leading-none">
              What is SpaceX ?
            </h1>
            <p className="font-Rajdhani text-white text-base md:w-4/12 mt-10">
              SpaceX is a private space company founded by Elon Musk in 2002 that designs, manufactures, and launches rockets and spacecraft.
            </p>
            <Button
              variant="solid"
              title="Discover Rockets"
              onClick={onClickDiscover}
            />
          </div>
          <div className="flex flex-col md:flex-row mt-16">
            <div className="flex flex-row items-center">
              <h4 className="text-white font-AbrilFatface text-3xl md:text-6xl mr-4">10</h4>
              <h4 className="text-white font-AbrilFatface text-3xl md:w-3/12 leading-none">Top Launches</h4>
            </div>
          </div>
          <img src="/images/planet.png" className="hidden md:flex md:absolute md:right-0 md:top-0 md:z-0 md:bottom-0 select-none" alt="" />
        </div>
      </section>

      <section className="py-20 bg-black" id="target">
        <div className="container mx-auto flex flex-col h-full px-10 md:px-0">
          <h1 className="font-AbrilFatface text-4xl text-white mt-20">List Of Launches</h1>
          <hr className="bg-white h-1 w-3/12 mt-6 mb-10" />
          {launches.map((launch, index) => (
            <RocketCard
              key={launch.id}
              number={`${index + 1}`}
              name={launch.name}
              cores={launch.cores[0].core}
              date_utc={moment(launch.date_utc).format('LLLL')}
              id={launch.id}
              image={launch.links.patch.small ?? ''}
              isSuccess={launch.success}
              payloads={launch.payloads.join().toString()}
              onClick={() => { }}
              failure={launch.failures}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch('http://localhost:3000/api/launches');
  const launches: Launch[] = await res.json();
  const sort = launches.sort((a, b) => moment(b.date_utc).diff(moment(a.date_utc))).slice(0, 10);

  return {
    props: {
      launches: sort,
    },
  };
};

export default HomePage;
