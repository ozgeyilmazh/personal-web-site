import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class AboutMe extends Component {
    render(){
        return(
            
          
                <Grid className="aboutme-grid">
            
                    <Cell col={12}>
                        <p className="aboutme">
                            <img
                            src= "https://sdk.bitmoji.com/render/panel/e7be203e-0f71-445a-a230-8191338a5642-84bf0c7b-3e0a-4e27-8308-591730b2bbf9-v1.png?transparent=1&palette=1"
                            alt="avatar"
                            width="20%"
                            />
                            <h1>Hakkımda</h1>
                            <h4>Yazar: Özge YILMAZ</h4>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
                            <br />
                            <br />
                             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                        </p>
            
            
                    </Cell>
            
                </Grid>        
        
        
        );
    }  
}

export default AboutMe;