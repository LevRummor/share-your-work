import React, { Component } from 'react'
import './styles/header.css'
import { Row, Col, Icon } from 'react-materialize'

class Header extends Component {

    render(){
        return(
            <header id='header'>
                <div className="container">
                    <Row>
                        <Col s={12}>
                            <p>Share Your Work</p>
                        </Col>
                        <Col s={12}>
                            <img src='https://i.pinimg.com/736x/d8/d0/63/d8d063e52fcacca107fd26bcb9e42cc1--principles-of-art-art-elements.jpg' alt='' />
                        </Col>
                        <Col s={12}>
                            <div id='nav'>
                                <a href='#'>
                                    Home
                                </a>
                                <a href='#'>
                                <Icon className='icon'>dashboard</Icon>
                                    Creations
                                </a>
                                <a href='#'>
                                    People
                                </a>
                                <a href='#'>
                                    About
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
        )
    }
}

export default Header
