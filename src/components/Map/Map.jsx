import React from 'react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from '@mui/material';
import useStyles from './styles';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            {/* Placeholder for the map, indicating it is disabled */}
            <div>
                <p>Map functionality is currently disabled. Please provide a valid API key to enable the map.</p>
            </div>

            {/* Render the places and weather data without the map */}
            {places.length && places.map((place, i) => (
                <div
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                >
                    {!matches
                        ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                        : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                                <img
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                    alt={place.name}
                                />
                                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        )}
                </div>
            ))}

            {weatherData?.list?.length && weatherData.list.map((data, i) => (
                <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" alt="Weather icon" />
                </div>
            ))}
        </div>
    );
};

export default Map;
