import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import fruits from './fruitsData'; // 과일 데이터는 별도의 파일로 분리

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (name) => {
    navigate(`/fruit/${name}`);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" align="center" gutterBottom>
        과일 백과사전
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {fruits.map((fruit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{ width: 400, height: 500, cursor: 'pointer' }}
                onClick={() => handleCardClick(fruit.name)}
              >
                  <CardMedia
                    component="img"
                    height="300"
                    image={fruit.imageUrl}
                    alt={fruit.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                        {fruit.displayName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {fruit.description}
                    </Typography>
                  </CardContent>
              </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;