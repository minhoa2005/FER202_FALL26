import React from 'react'
import { Button, Card, Carousel, FormControl, InputGroup } from 'react-bootstrap';

export default function DemoWeb() {
    return (
        <div className="bg-dark text-white" style={{ paddingBottom: '100px' }}>
            <div className="d-flex justify-content-evenly align-items-center p-3 bg-dark text-white">
                <div className="d-flex align-items-center gap-3">
                    <h1 className="mb-0">Car Home</h1>
                    <p className="mb-0">Home</p>
                    <p className="mb-0">News</p>
                    <p className="mb-0">About</p>
                </div>
                <div className="w-25">
                    <InputGroup>
                        <FormControl />
                        <Button variant="primary">Search</Button>
                    </InputGroup>
                </div>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Nice Car</h3>
                        </Carousel.Caption>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/23cc1afc-c03c-4f77-868f-f44144d4167c.jpg?w=768&width=768&q=75&format=webp"
                            alt="First slide" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Nice Car</h3>
                        </Carousel.Caption>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cov7p820SF6f62yIe3sJjv3SZGWeFYZE3df0bQzcvBDeJDcU-omlMOS6&s=10"
                            alt="First slide"
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Nice Car</h3>
                        </Carousel.Caption>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/23cc1afc-c03c-4f77-868f-f44144d4167c.jpg?w=768&width=768&q=75&format=webp"
                            alt="First slide"
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container mt-5">
                <h1>Our Menu</h1>
                <div className="d-flex gap-4">
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0h4-_fsR7mQnyKqnUZ4ri3TgcliCLplljIcyuT5PYlVIyLpp513tmlo4n&s=10" />
                        <Card.Body>
                            <Card.Title>Hanoi Pizza</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="primary" className="w-75">Order Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0h4-_fsR7mQnyKqnUZ4ri3TgcliCLplljIcyuT5PYlVIyLpp513tmlo4n&s=10" />
                        <Card.Body>
                            <Card.Title>Hanoi Pizza</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="primary" className="w-75">Order Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0h4-_fsR7mQnyKqnUZ4ri3TgcliCLplljIcyuT5PYlVIyLpp513tmlo4n&s=10" />
                        <Card.Body>
                            <Card.Title>Hanoi Pizza</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="primary" className="w-75">Order Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0h4-_fsR7mQnyKqnUZ4ri3TgcliCLplljIcyuT5PYlVIyLpp513tmlo4n&s=10" />
                        <Card.Body>
                            <Card.Title>Hanoi Pizza</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="primary" className="w-75">Order Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <h1 className="text-center">Book your table</h1>
                    <div className="d-flex gap-3">
                        <FormControl placeholder="Name" className="mb-3" />
                        <FormControl placeholder="Email" className="mb-3" />
                        <FormControl placeholder="Phone" className="mb-3" />
                    </div>
                    <FormControl as={"textarea"} style={{ height: '150px' }} placeholder="Message" />
                    <Button className="mt-3 w-25">Book</Button>
                </div>
            </div>
        </div>
    )
}
