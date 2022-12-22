import Accordion from '../../components/accordion/Accordion';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
// import Todo from '../../components/toDo/Todo';

const Home = () => {

  return (
    <div>
        <Hero title='Welcome' />
        <Accordion />
      
        {/* <Todo /> */}
       
     <Footer /> 
    </div>
   
    
  );
};

export default Home;
