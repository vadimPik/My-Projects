import classes from './BeerCard.module.css';
// import { Card, Col} from 'react-bootstrap';
import { Container, CardGroup, Card, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const BeerCard = (props) => {
    
    const styles = {
        card: {
          backgroundColor: '#B7E0F2',
          borderRadius: 30,
          padding: '3rem',

         // backgroundcolor: '#ffffff',
         // borderradius: '20px 20px 20px 100x',
          overflow: 'hidden',
          webkitboxshadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
          boxshadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
          margin: '15px',
         // marginbottom: '10px',

          width: '280px',
          height: '350px',
          maxheight: '40vh'
        },
        cardImage: {
          objectFit: 'cover',
          //borderRadius: 40,
          height: '12rem',
          width: '3.5rem',
        
          display: 'block',
          margin: '0 auto'
        },
        cardParent: {
            height: '25rem',
            width: '23rem'
        },
        // cardTitle: {
        //     textalign: 'center'
        // }
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

                {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button"  size="sm">
 
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
               
                </DropdownButton> */}

                <Card.Img variant="top" src={props.item.image_url}  style={styles.cardImage}/>
                <Card.Body>
                    <Card.Title>{props.item.name} </Card.Title>
                    {/* <Card.Title style={styles.cardImage}>{props.item.name} </Card.Title> */}
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