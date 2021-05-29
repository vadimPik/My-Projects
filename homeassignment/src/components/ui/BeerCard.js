import classes from './BeerCard.module.css';
import { Card, Col} from 'react-bootstrap';

const BeerCard = (props) => {
    
    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="box">
            <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
        );
    }

    return (
        //<div className="grid">
        <section
            className={`${classes.card} ${props.className ? props.className : ''}`}
        >
            <Col className="container-fluid content-row">
                <Card key={props.item.id} className="box">
                <Card.Img variant="top" src="holder.js/100px180" src={props.item.title}/>
                <Card.Body>
                    <Card.Title>{props.item.description}</Card.Title>
                    <Card.Text>{props.item.price}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
            </Col>

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