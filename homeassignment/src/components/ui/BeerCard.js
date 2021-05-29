import classes from './BeerCard.module.css';
// import { Card, Col} from 'react-bootstrap';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

const BeerCard = (props) => {
    
    const styles = {
        card: {
          backgroundColor: '#B7E0F2',
          borderRadius: 40,
          padding: '3rem'
        },
        cardImage: {
          objectFit: 'cover',
          borderRadius: 40,
          height: '20rem',
          width: '10rem'
        //   height: '100',
        //   width: '100'
        },
        cardParent: {
            height: '30rem',
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

<div style={styles.cardParent }>
            <Col className="container-fluid content-row">
                {/* <Card key={props.item.id} className="box" style={styles.card}> */}
                <Card key={props.item.id} className="m-5 border-0 shadow" style={styles.card}>
                <Card.Img variant="top" src={props.item.image_url} style={styles.cardImage}/>
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    {/* <Card.Text>{props.item.price}</Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
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