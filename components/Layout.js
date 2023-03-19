import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import Head from 'next/head';
import MenuBar from './MenuBar';

//Layout properly the Header at the top of every page and then the content come afterwards

export default props => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
            </Head>

            <Segment
            inverted
            textAlign='center'
            style={{
                // background: 'linear-gradient(to left top, rgba(0, 0, 0, 0.3) 20%, rgba(19, 227, 255, 0.45) 30%, rgba(255, 200, 221, 0.9) 60%)',
                background: 'linear-gradient(to left top, rgba(0, 180, 216, 0.4) 10%, rgba(202, 240, 248, 0.85) 70%, rgba(255, 255, 255, 0.3))',
                position:'relative',
                top:'35px',
                marginBottom:'35px',
                minHeight: 340
              }}
            >
            <MenuBar/>
                <Icon size='huge' name='hospital'/>
                <Header as='h2' color='blue' style={{ fontSize:'3em', fontWeight:'normal'}} content='Electronic Health Record System'/>
                <Header as='h3' style={{ color :'black' ,fontSize:'1.5em', fontWeight:'normal'}} content='Ensure that your records are safe and sound'/>
            </Segment>
            
            <Container
            style={{
                // background: 'linear-gradient(to left top, rgba(0, 0, 0, 0.3) 20%, rgba(19, 227, 255, 0.45) 30%, rgba(255, 200, 221, 0.9) 60%)',
                background: 'linear-gradient(to left top, rgba(0, 180, 216, 0.4) 10%, rgba(202, 240, 248, 0.85) 70%, rgba(255, 255, 255, 0.3))',
                minHeight: 340
              }}
              >
                {props.children}
            </Container>
        </>
    );
};