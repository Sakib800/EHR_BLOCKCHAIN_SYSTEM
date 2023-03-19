import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from '../routes';
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


const HomepageHeading = ({ mobile }) => (
  <Container
    style={{
      // rgba(194, 242, 97)
      background: 'linear-gradient(to right top, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.6) 70%, rgba(202, 240, 248, 1))',
      backdropFilter: "blur('400px')",
      filter: 'drop-shadow(0px 0px 40px rgba(130, 55, 222, 0.8)) blur("0.7px")',
      boxShadow: '0 25px 45px rgba(0, 0, 0, 0.8), 0 25px 60px rgba(0, 0, 0)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRight: '1px solid rgba(255, 255, 255,0.5)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '25px',
      position: 'relative',
      top: '100px',

    }}

    text>



    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>

    <Header
      as='h1'
      content='Electronic Health Record System'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        fontFamily: 'Georgia',
        color: 'black',

        position: 'relative',
        top: '-77px'
      }}
    />
    <Header

      as='h2'
      content='Ensured that your records are safe with us'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        color: 'black',
        position: 'relative',
        top: '-77px'
        //added gradient
        // background: 'linear-gradient(to left top, rgba(0, 0, 0, 0.3) 60%, rgba(19, 227, 255, 0.7), rgba(142, 11, 229, 0.5))'
      }}
    />
    <Button
      style={{
        border: 'none',
        position: 'relative',
        top: '-50px',
        background: 'linear-gradient(to right top, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.6) 70%, rgba(202, 240, 248, 1))',

      backdropFilter: "blur('400px')",
      filter: 'drop-shadow(0px 0px 40px rgba(130, 55, 222, 0.8)) blur("0.7px")',
      boxShadow: '0 25px 45px rgba(0, 0, 0, 0.8), 0 25px 60px rgba(0, 0, 0)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRight: '1px solid rgba(255, 255, 255,0.5)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '25px',
      }} primary size='huge' inverted>
      <Link route='/dashboard'>
        <a className='item'>Get Started</a>
      </Link>
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  onClickedPatient = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  }

  onClickedDoctor = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            // main background block
            inverted
            textAlign='center'
            style={{
              minHeight: 700,
              position: 'relative',
              top: '40px',
              padding: '1em 0em',
              backgroundImage: 'url("http://i.huffpost.com/gen/2278278/images/o-BLONDE-DOCTOR-facebook.jpg")',

              // https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              zIndex: '50'

            }}
            vertical
          >
            <Menu
             style={{
              background: 'linear-gradient(to right top, rgba(33, 158, 188, 0.95), rgba(33, 158, 188, 0.7), rgba(33, 158, 188, 0.85))',
              position: 'fixed',
              top: '0',
              width: '100%',
              zIndex: '1000',
              backdropFilter: "blur('400px')",
              filter: 'drop-shadow(0px 0px 40px rgba(130, 55, 222, 0.8)) blur("0.7px")',
              // boxShadow: '0 25px 45px rgba(0, 0, 0, 0.8), 0 25px 60px rgba(0, 0, 0)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              borderRight: '1px solid rgba(255, 255, 255,0.5)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
            }}
              size='large' inverted>
              <Link route='/'>
                <a className='item'>Home</a>
              </Link>

              <Menu.Menu position='right'>
                <Link route='/dashboard'>
                  <a className='item'>Dashboard</a>
                </Link>

                <Link route='/list'>
                  <a className='item'>Records List</a>
                </Link>

                <Dropdown item text='Doctor'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link route='/'>
                        <a style={{ color: 'black' }} onClick={this.onClickedDoctor}>View Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/edit-doctor'>
                        <a style={{ color: 'black' }}>Edit Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/make-appointment'>
                        <a style={{ color: 'black' }}>Make Appointment</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/edit-appointment'>
                        <a style={{ color: 'black' }}>Update Appointment</a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text='Patient'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link route='/'>
                        <a style={{ color: 'black' }} onClick={this.onClickedPatient}>View Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/edit-patient'>
                        <a style={{ color: 'black' }}>Edit Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/approve-doctor'>
                        <a style={{ color: 'black' }}>Allow Access</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/revoke-doctor'>
                        <a style={{ color: 'black' }}>Revoke Access</a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text='Register'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link route='/register-patient'>
                        <a style={{ color: 'black' }}>Patient</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/register-doctor'>
                        <a style={{ color: 'black' }}>Doctor</a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Menu.Menu>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  onClickedPatient = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  }

  onClickedDoctor = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  }

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media style={{
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: "1000"
      }} as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            
          >
            <Link route='/'>
              <a className='item'>Home</a>
            </Link>

            <Link route='/dashboard'>
              <a className='item'>Dashboard</a>
            </Link>

            <Link route='/list'>
              <a className='item'>Records List</a>
            </Link>

            <Dropdown item text='Doctor'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/'>
                    <a style={{ color: 'black' }} onClick={this.onClickedDoctor}>View Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-doctor'>
                    <a style={{ color: 'black' }}>Edit Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/make-appointment'>
                    <a style={{ color: 'black' }}>Make Appointment</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-appointment'>
                    <a style={{ color: 'black' }}>Update Appointment</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Patient'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/'>
                    <a style={{ color: 'black' }} onClick={this.onClickedPatient}>View Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-patient'>
                    <a style={{ color: 'black' }}>Edit Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/approve-doctor'>
                    <a style={{ color: 'black' }}>Allow Access</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/revoke-doctor'>
                    <a style={{ color: 'black' }}>Revoke Access</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Register'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/register-patient'>
                    <a style={{ color: 'black' }}>Patient</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/register-doctor'>
                    <a style={{ color: 'black' }}>Doctor</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer
    style={{ padding: '8em 0em' }}
  >
    <Segment style={{
      padding: '8em 0em',
      background: 'linear-gradient(to bottom, rgba(0, 180, 216, 0.4) 10%, rgba(202, 240, 248, 0.85) 70%, rgba(255, 255, 255, 0.3))',
      overflow: 'hidden'
    }}
      vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Useful for Companies and Shareholders
            </Header>
            <p style={{ fontSize: '1.33em' }}>
             We can give your business superpowers to do things they never thought possible.
Let us delight your customers and fulfill your needs...with a reliable medical record system.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
            We Create a Medical Blockchain System 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, beautifully designed and easy to use medical record systems.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image  style={{
                backdropFilter: "blur('50px')",

                filter: 'drop-shadow(0px 0px 40px rgba(130, 55, 222, 0.8)) blur("0.7px")',
                boxShadow: '0 12px 27px rgba(0, 0, 0, 0.8), 0 12px 30px rgba(0, 0, 0)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRight: '1px solid rgba(255, 255, 255,0.5)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '15px',
                color: 'black',
                background: 'linear-gradient(to right top, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.6) 70%, rgba(255, 255, 255, 0.3))',
              }} bordered rounded size='large' src='https://www.desicomments.com/wp-content/uploads/2017/07/Baby-Doctor-Image.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button
              style={{
                backdropFilter: "blur('50px')",

                filter: 'drop-shadow(0px 0px 40px rgba(130, 55, 222, 0.8)) blur("0.7px")',
                boxShadow: '0 12px 27px rgba(0, 0, 0, 0.8), 0 12px 30px rgba(0, 0, 0)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRight: '1px solid rgba(255, 255, 255,0.5)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '25px',
                color: 'black',
                background: 'linear-gradient(to right top, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.6) 70%, rgba(255, 255, 255, 0.3))',
              }}
              size='huge'>Check Us Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{
      padding: '0.5em',
      // background: 'linear-gradient(to right top, rgba(194, 242, 97, 0.4), rgba(255, 255, 255, 0.6) 70%, rgba(194, 242, 97, 0.3))',
      background: 'linear-gradient(to bottom, rgba(0, 180, 216, 0.4) 10%, rgba(202, 240, 248, 0.85) 70%, rgba(255, 255, 255, 0.3))',
      overflow: 'hidden',
      backdropFilter: "blur('400px')",
      filter: 'drop-shadow(0px 0px 40px rgba(130, 55, 222, 0.8)) blur("0.7px")',
      boxShadow: '0 25px 45px rgba(0, 0, 0, 0.8), 0 25px 60px rgba(0, 0, 0)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRight: '1px solid rgba(255, 255, 255,0.5)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '2px',
    }}
      vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Easy to use, Reliable, Secure"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{
              fontSize: '2em',
            }}>
              "One of the Best Blockchain Medical Record Systems available."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://cdn-icons-png.flaticon.com/128/2785/2785482.png' />
              <b>Dr Rahman</b>, Surgeon at Mumbai Hospital
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{
      padding: '8em 0em',
      background: 'linear-gradient(to bottom, rgba(0, 180, 216, 0.4) 10%, rgba(202, 240, 248, 0.85) 70%, rgba(255, 255, 255, 0.3))'
    }}
      vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Major Issue with Medical Record Systems
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Hospital emergency department (ED) found that doctors spent 43% of their time on data entry.
          Only 28% of the doctors make direct patient contact.
        </p>
        <Button style={{
                backdropFilter: "blur('50px')",

                filter: 'drop-shadow(0px 0px 40px rgba(130, 55, 222, 0.8)) blur("0.7px")',
                boxShadow: '0 12px 27px rgba(0, 0, 0, 0.8), 0 12px 30px rgba(0, 0, 0)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRight: '1px solid rgba(255, 255, 255,0.5)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '25px',
                color: 'black',
                background: 'linear-gradient(to right top, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.6) 70%, rgba(255, 255, 255, 0.3))',
              }} as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Is Blockchain the best step forward for Medical Record Systems?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Blockchain technology has the potential to enable more secure, transparent, and equitable data management.
          In addition to securely managing data, blockchain has significant advantages in distributing data access, control, and ownership to end users.
        </p>
        <Button style={{
                backdropFilter: "blur('50px')",

                filter: 'drop-shadow(0px 0px 40px rgba(130, 55, 222, 0.8)) blur("0.7px")',
                boxShadow: '0 12px 27px rgba(0, 0, 0, 0.8), 0 12px 30px rgba(0, 0, 0)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRight: '1px solid rgba(255, 255, 255,0.5)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '25px',
                color: 'black',
                background: 'linear-gradient(to right top, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.6) 70%, rgba(255, 255, 255, 0.3))',
              }} as='a' size='large'>
          View Research
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{
      padding: '5em 0em',
      background: 'linear-gradient(to right top, rgba(202, 240, 248, 0.85), rgba(255, 255, 255, 0.6), rgba(202, 240, 248, 0.8))',
      overflow: 'hidden',
      backdropFilter: "blur('400px')",
      filter: 'drop-shadow(0px 0px 40px rgba(130, 55, 222, 0.8)) blur("0.7px")',
      boxShadow: '0 25px 45px rgba(0, 0, 0, 0.8), 0 25px 60px rgba(0, 0, 0)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRight: '1px solid rgba(255, 255, 255,0.5)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '2px',
    }}>

      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header style={{ color: 'black' }} inverted as='h4' content='About' />
              <List link inverted>
                <List.Item style={{ color: 'black' }} as='a'>Sitemap</List.Item>
                <List.Item style={{ color: 'black' }} as='a'>Contact Us</List.Item>
                <List.Item style={{ color: 'black' }} as='a'>Creator Info</List.Item>
                <List.Item style={{ color: 'black' }} as='a'>Site Details</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header style={{ color: 'black' }} inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item style={{ color: 'black' }} as='a'>Create Blockchain System</List.Item>
                <List.Item style={{ color: 'black' }} as='a'>Store Medical Record</List.Item>
                <List.Item style={{ color: 'black' }} as='a'>How To Access</List.Item>
                <List.Item style={{ color: 'black' }} as='a'>Favorite Ducks</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>

              <Header style={{ color: 'black' }} inverted as='h4' content='Team : 405 Found' />
              <p style={{ color: 'black' }}>
                ERR 404 (5.0) - M.H. Saboo Siddik College Of Engineering - Hackathon
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout