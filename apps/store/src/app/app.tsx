// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { getAllGames } from '../fake-api';
import { Card } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export function App() {
  return (
    <div className="container">
      <div className="games-layout">
        {getAllGames().map((g) => (
          <Card key={g.id} className="game-card">
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
                <Typography variant="body2" color="textSecondary" component="p">
                  {g.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="game-rating"
                >
                  <strong>Rating:</strong> {g.rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
