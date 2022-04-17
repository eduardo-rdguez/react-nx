// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';

import './app.scss';

import { Header } from '@react-nx/store/ui-shared';

import { Card } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { formatRating } from '@react-nx/store/util-formatters';

import { Route, useHistory } from 'react-router-dom';

import { StoreFeatureGameDetail } from '@react-nx/store/feature-game-detail';
import { Game } from '@react-nx/api/util-interfaces';

export function App() {
  const history = useHistory();
  const [state, setState] = useState<{
    data: Game[];
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: [],
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    fetch('/api/games')
      .then((res) => res.json())
      .then((res) => {
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="games-layout">
          {state.data.map((g) => (
            <Card
              key={g.id}
              className="game-card"
              onClick={() => history.push(`/game/${g.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  className="game-card-media"
                  image={g.image}
                  title={g.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {g.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {g.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="game-rating"
                  >
                    <strong>Rating:</strong> {formatRating(g.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>

      <Route path="/game/:id" component={StoreFeatureGameDetail} />
    </>
  );
}

export default App;
