
import BeerCard from './ui/BeerCard';
import classes from './Beers.module.css'
//import CardDeck from 'react-bootstrap/CardDeck';
import { CardDeck, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';


  const Beers = (props) => {
    const beerItems = useSelector((state) => state.beers.items);

    const styles = {
        cardeck: {
            marginleft: '-134px !important'
        }
      }

      return (

            <Container>
              <Row style={styles.cardeck}>
                <CardDeck >      
                        {beerItems.map((beer) => (
                            <BeerCard item={beer} key={beer.id} isNeedRank={false} />
                        ))}
                </CardDeck>
              </Row>
            </Container>

      );
  }

  export default Beers;