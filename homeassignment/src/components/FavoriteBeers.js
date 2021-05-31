import BeerItem from './BeerItem';
import BeerCard from './ui/BeerCard';
import classes from './FavoriteBeers.module.css'
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
        // <section className={classes.products}>
        
            // <div className="grids">
            // <ul>
                <Container>
                <Row style={styles.cardeck}>
               
                <CardDeck >      
                {/* <div className="grid"> */}
                    {beerItems.map((beer) => {
                        
                        return beer.isFavorite ? 
                          // <BeerItem item={beer} key={beer.id} isNeedRank={true} />
                          // <BeerCard item={props.item} key={props.item.id} />
                          <BeerCard item={beer} key={beer.id} isNeedRank={true} />
                        :
                          <div></div>


                        
                

                        // id={beer.id}
                        // title={beer.title}
                        // price={beer.price}
                        // description={beer.description}
                
                      })}
            
            </CardDeck>
            </Row>

            
            </Container>
            // </ul>
       
        // </section>
      );
  }

  export default Beers;