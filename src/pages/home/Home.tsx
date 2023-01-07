import Accordion from '../../components/accordion/Accordion';
// import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer'
import CombiBlock from '../../components/combi-block/CombiBlock';
import VideoHero from '../../components/hero/VideoHero';
import DoGoodImageSrc from '../../images/doGood.png'
import OwnItImageSrc from '../../images/ownIt.png'
import TravelTogetherImageSrc from '../../images/travelTogether.png'
import HeroVideoSrc from '../../images/trainVideo.mp4'

const Home = () => {

  return (
    <>
        {/* <Hero title='Welcome'/> */}
        
        <VideoHero title='Welcome' vid vidSrc={HeroVideoSrc}/>

        <CombiBlock id={1} imageSrc={DoGoodImageSrc} title="Purpose" text="
          Welcome to About Trains & Transport, a website dedicated to providing information about the train and transport industry. If you are interested in trains and the transport industry, then you have come to the right place! Here, you will find simple, quick and easy information about the industry to get you started."/>

        <CombiBlock right id={2} imageSrc={OwnItImageSrc} title="Why us?" text="
         'Why us, you ask?' Well, our goal is to keep things simple and deliver information about the train and transport industry in a way that is easy for you to understand. We believe that this is important because understanding the various aspects of the train and transport industry can be complex and overwhelming, and we want to provide a resource that makes it easier for people to learn about and understand this important sector. 
        "/>

        <CombiBlock  id={2} imageSrc={TravelTogetherImageSrc} title="Who are we?" text="
         A group of a apprentices keen to start learning and developing technology that will be used across the transport industry & our goal through this site is to bring awareness to others on the the importance of traveling by train and why its a space you should be curious about. 
        "/>

        <Accordion />
        <Footer />
    
    </>
    
    
  );
};

export default Home;
