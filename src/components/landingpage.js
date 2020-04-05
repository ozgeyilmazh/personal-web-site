import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width:'100%' , margin:'auto'}}> 
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://www.nvsh.nl/wp-content/uploads/2018/09/porno-kijken.png"
                            alt="avatar"
                            className="avatar-img"
                            width="15%"
                        />
                     <div className="banner-text">
                        <h1>Jr. Developer</h1>
                        
                        <hr/>
                        <p>
                        HTML/CSS | Bootstrap | Javascript | jQuery | React | Django | Python | OpenCV
                        </p>
            
                        <div className="social-links">
                            {/* Linkedin */}
                            <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                             <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                             <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                             {/* FreecodeCamp */}
                            <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                             <i className="fa fa-free-code-camp" aria-hidden="true"/>
                            </a>
                            {/* Youtube */}
                            <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                             <i className="fa fa-youtube-square" aria-hidden="true"/>
                            </a>
                        </div>
                     </div>
                        
                    </Cell>
                </Grid>
            </div>
        );
    }  
}

export default Landing;