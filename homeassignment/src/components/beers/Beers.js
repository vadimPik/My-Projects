
import BeerCard from '../ui/beerCard/BeerCard';
import { CardDeck, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useCallback } from 'react';
import useBeerFatch from '../../hooks/useBeerFatch';
import { paginationActions } from '../../store/pagination-slice';


  const Beers = (props) => {
    const beerItems = useSelector((state) => state.beers.items);
    const pageNumber = useSelector((state) => state.pagination.pageNumber);
    const isLoading = useSelector((state) => state.pagination.loading);
    const isHasMore = useSelector((state) => state.pagination.hasMore);

    const dispatch = useDispatch();

    const styles = {
        cardeck: {
            marginleft: '-134px !important'
        }
      }

      useBeerFatch(pageNumber);

      const observer = useRef();
      const lastBeerElementRef = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && isHasMore) {
            dispatch(paginationActions.setPage());
          }
        })
        if (node) observer.current.observe(node);
      }, [isLoading, isHasMore]);

      

      return (

            <Container>
              <Row style={styles.cardeck}>
                <CardDeck >      
                    {beerItems.map((beer, index) => {
                        if (beerItems.length === index + 1) {
                          return <div ref={lastBeerElementRef} key={beer.id}><BeerCard  item={beer} key={beer.id} isNeedRank={false} /> </div>
                        } else {
                          return <BeerCard item={beer} key={beer.id} isNeedRank={false} />
                        }
                      })}
                </CardDeck>
              </Row>
            </Container>

      );
  }

  export default Beers;