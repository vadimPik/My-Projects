
import BeerCard from '../ui/beerCard/BeerCard';
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
                  {beerItems.map((beer) => {
                      return  (beer.isFavorite) && <BeerCard item={beer} key={beer.id} isNeedRank={true}  />        
                  })}
          
              </CardDeck>
            </Row>
        </Container>

      );
  }

  export default Beers;