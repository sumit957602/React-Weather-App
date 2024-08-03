import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./InfoBox.css";


function InfoBox () {
    return <div className="InfoBox"> 
    <h1>WeatherInfo - {Info.weather}</h1>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1542669334-9f30f4af1266?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {Info.temp}&deg;C</p>
            <p>Humidity = {Info.humidity}</p>
            <p>Min Temp = {Info.yempMin}&deg;C</p>
            <p>Max Temp = {Info.tempMax}&deg;C</p>
            <p>Feels Like = {Info.feelslike}&deg;C</p>
            <p>Weather description = {Info.weather}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
};

export default InfoBox;