import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const BookCard = ({ title, coverImage, onClick }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="300"
        image={coverImage}
        title={title}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={onClick}
        >
          Ver más
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
