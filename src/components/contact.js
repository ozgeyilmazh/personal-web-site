import React , {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ozge YILMAZ</h2>
                        <img
                            src= "https://sdk.bitmoji.com/render/panel/e7be203e-0f71-445a-a230-8191338a5642-84bf0c7b-3e0a-4e27-8308-591730b2bbf9-v1.png?transparent=1&palette=1"
                            alt="avatar"
                            className="contact-avatar"
                            width="50%"/>
            
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </Cell>
                    <Cell col={6}>
            
                         <h2>Contact me</h2>
                         <hr />
            
                        <div className="contact-list">
                            <List>
                              <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontWeight:'bold', fontFamily: 'Baloo Thambi 2'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                     (+90) 0555 000 00 00</ListItemContent>
                              </ListItem>
                              <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontWeight:'bold', fontFamily: 'Baloo Thambi 2'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                     (+90) 0555 000 00 00</ListItemContent>
                              </ListItem>
                              <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontWeight:'bold', fontFamily: 'Baloo Thambi 2'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                     someone@example.com</ListItemContent>
                              </ListItem>
                              <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontWeight:'bold', fontFamily: 'Baloo Thambi 2'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                     MySkypeID</ListItemContent>
                              </ListItem>
                            </List>
            
            
                        </div>

                    </Cell>
                </Grid>
            </div>
        
        );
    }  
}

export default Contact;