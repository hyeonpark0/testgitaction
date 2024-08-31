import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import fruits from './fruitsData'; // 과일 데이터는 별도의 파일로 분리

const FruitDetail = () => {
  const { name } = useParams();
  const fruit = fruits.find(fruit => fruit.name === name);

  if (!fruit) {
    return <Typography variant="h5">과일을 찾을 수 없습니다.</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: 5 }}>
        <CardMedia
          component="img"
          height="400"
          image={fruit.imageUrl}
          alt={fruit.name}
        />
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {fruit.displayName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {fruit.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FruitDetail;