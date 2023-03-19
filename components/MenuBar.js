import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import record from '../ethereum/record';
import web3 from '../ethereum/web3';
import { Link } from '../routes';
import { Router } from '../routes';
// import './MenuBar.css'

//Header that is used in all pages

export default class MenuBar extends Component {

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
    return (
      <Menu style={{
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
            <a className='item button'>Dashboard</a>
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
    );
  }
}