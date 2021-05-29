import BeerItem from './BeerItem';
import classes from './Beers.module.css'
//import CardDeck from 'react-bootstrap/CardDeck';
import { CardDeck, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const DUMMY_PRODUCTS = [
    {
      id: 'p1',
      price: 6,
      title: 'My First Book',
      description: 'The first book I ever wrote',
    },
    {
      id: 'p2',
      price: 5,
      title: 'My Second Book',
      description: 'The second book I ever wrote',
    },
  ];


  const Beers = (props) => {
    const beerItems = useSelector((state) => state.beers.items);

    const styles = {
        cardeck: {
            marginleft: '-134px !important'
        }
      }

      return (
        // <section className={classes.products}>
        
            // <div className="grids">
            // <ul>
                <Container>
                <Row style={styles.cardeck}>
               
                <CardDeck >      
                {/* <div className="grid"> */}
                    {beerItems.map((beer) => (
                
                        <BeerItem item={beer} key={beer.id} />
                

                        // id={beer.id}
                        // title={beer.title}
                        // price={beer.price}
                        // description={beer.description}
                
                    ))}
            
            </CardDeck>
            </Row>

            
            </Container>
            // </ul>
       
        // </section>
      );
  }

  export default Beers;