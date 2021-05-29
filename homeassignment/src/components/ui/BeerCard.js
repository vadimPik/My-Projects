import classes from './BeerCard.module.css';
// import { Card, Col} from 'react-bootstrap';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

const BeerCard = (props) => {
    
    const styles = {
        card: {
          backgroundColor: '#B7E0F2',
          borderRadius: 40,
          padding: '3rem',

         // backgroundcolor: '#ffffff',
         // borderradius: '10px 10px 10px 100x',
          overflow: 'hidden',
          webkitboxshadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
          boxshadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
          margin: '15px',
         // marginbottom: '10px',

          height: '350px',
          maxheight: '40vh'
        },
        cardImage: {
          objectFit: 'cover',
          //borderRadius: 40,
          height: '12rem',
          width: '3.5rem'
        
        //   height: '100',
        //   width: '100'
        },
        cardParent: {
            height: '25rem',
            width: '25rem'
        }
      }

    return (
        //<div className="grid">
        <section
            className={`${classes.card} ${props.className ? props.className : ''}`}
        >
   {/* <Container fluid>
      <CardGroup className="m-5 d-block">
        <div style={styles.cardParent }>
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={props.item.image_url} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h1">{props.item.name}</Card.Title>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        </div>
      </CardGroup>
    </Container> */}



{/* <div style={styles.cardParent }>
            
            <Col col-sm-12 col-md-6 offset-md-3 >
              
                <Card  key={props.item.id} className="m-5 border-0 shadow" style={styles.card}>
                <Card.Img variant="top" src={props.item.image_url}  style={styles.cardImage}/>
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            </div> */}

            <div style={styles.cardParent }>
            
            <Col col-sm-12 col-md-6 offset-md-3 >
              
                <Card  key={props.item.id} className="box" style={styles.card}>
                <Card.Img variant="top" src={props.item.image_url}  style={styles.cardImage}/>
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            </div>

            {props.children}
        </section>
    //   <section
    //     className={`${classes.card} ${props.className ? props.className : ''}`}
    //   >
    //     {props.children}
    //   </section>
    );
  };
  
  export default BeerCard;