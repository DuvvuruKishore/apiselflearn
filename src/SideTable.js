import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


function SideTable({title,total}) {
    return (
        <div>
        <Card className="infoBox">
        <CardContent>
          <Typography className='infoBox__title' color="textSecondary" >
            {title}
          </Typography>
          <h2 className="infoBox_cases">{total}</h2>
          <Typography className='infoBox__deaths' color="textSecondary" >
            value
          </Typography>
          
        </CardContent>
        </Card>  
         
        </div>
    )
}

export default SideTable
