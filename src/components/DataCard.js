import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ItemModel } from '../model/ItemModel';
import PropTypes from "prop-types";
import '../styles/DashBoard.css';

const DataCard = ({item}) => {
    const { title, total, increase, picture } = item;
    const INCREASE= !!increase;

    return (
        <Card className={`card-container${INCREASE ? '-increase' : ''}`}>
            <CardContent className="card-content">
                <Typography className={`card-title${INCREASE ? '-increase' : ''}`}>{title}</Typography>

                <Typography className={`card-stats${INCREASE ? '-increase' : ''}`}>{total.toLocaleString('en-US').replace(/,/g, ' ')}</Typography>

                {
                    INCREASE
                        &&
                    <Typography className={`card-increase${INCREASE ? '' : '-invisible'}`}>
                        {`+${increase}`}
                    </Typography>
                }
            </CardContent>

            {
                picture
                    &&
                <img className="card-image" src={picture} alt={title} />
            }
        </Card>
    );
};

DataCard.propTypes = {
    item: PropTypes.instanceOf(ItemModel).isRequired
};

export default DataCard;