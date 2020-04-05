import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
    render(){
        return(
            
            <div>
                <Grid>
                    <Cell col={4}>
            
                        <div style={{textAlign:'center'}}>
                         <img
                                src= "https://sdk.bitmoji.com/render/panel/096dffe0-3934-41db-842c-34c180d0615c-84bf0c7b-3e0a-4e27-8308-591730b2bbf9-v1.png?transparent=1&palette=1"
                                alt="avatar"
                                style={{height:'200px'}}/>

                        </div>
                        <h2 style={{paddingTop:'2em'}}>Ozge YILMAZ</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Adress</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h5>Phone</h5>
                        <p>(+90) 0555 000 00 00</p>
                        <h5>Email</h5>
                        <p>someone@example.com</p>
                        <h5>Web ste</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <br />
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>


                        <Education startYear={2012}
                                endYear={2016}
                                schoolName="My University"
                                schoolDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                        <Education startYear={2017}
                                endYear={2019}
                                schoolName="My University 2"
                                schoolDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        

                          <Experience startYear={2018}
                                endYear={2019}
                                jobName="First Job"
                                jobDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                                    
                            <Experience startYear={2019}
                                endYear={"-"}
                                jobName="Second Job"
                                jobDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                            <hr style={{borderTop:'3px solid #e22947'}}/>


                            <h2>Skills</h2>

                            <Skills 
                                skill="javascript"
                                progress="45"
                                />
                            <Skills 
                                skill="HMTL/CSS"
                                progress="100"
                                />
                            <Skills 
                                skill="react"
                                progress="40"
                                />
                            <Skills 
                                skill="django"
                                progress="50"
                                />
                    </Cell>
                </Grid>
            
            
            
            </div>
        
        
        );
    }  
}

export default Resume;