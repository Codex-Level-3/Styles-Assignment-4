"use client";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { motion } from "framer-motion";

export default function RecipeCards({
  recipeName,
  description,
  img,
  category,
  time,
  calories,
}) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Card
        className="shadow-md shadow-zinc-400 hover:shadow-rose-400"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">{recipeName}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{category}</ListGroup.Item>
          <ListGroup.Item>{time}</ListGroup.Item>
          <ListGroup.Item>{calories}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="text-center ">
          <Card.Link
            className="no-underline text-rose-400 font-semibold"
            href="#"
          >
            View More
          </Card.Link>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
