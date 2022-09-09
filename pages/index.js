// import components
import Hero from '../components/Hero';
import About from '../components/About';
import How from '../components/How';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

// import data
import {
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
  testimonialData,
  footerData,
} from '../data.json';

export default function Home({ headerData, heroData, navData }) {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero
        heroData={heroData}
        headerData={headerData}
        navData={navData}
      />
    </div>
  );
}

//get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
    },
  };
};
