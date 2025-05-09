import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star'; // ⭐ Import star icon
import { Link } from 'react-router-dom';

export default function MovieCard({ allMovies }) {
    return (
        <>
            {allMovies?.map((movie) => (
                <Card key={movie.id} sx={{ maxWidth: 225, m: 1 }}>
                    <Link to="/movies">
                        <CardMedia
                            component="img"
                            height="194"
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        />
                    </Link>
                    <CardHeader
                        title={movie.original_title}
                        subheader={movie.release_date}
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {movie.overview.length > 100
                                ? `${movie.overview.slice(0, 100)}...`
                                : movie.overview}
                        </Typography>
                        {/* ⭐ Add rating here */}
                        <Typography variant="body2" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                            <StarIcon sx={{ color: '#FFD700', mr: 0.5 }} />
                            {movie.vote_average?.toFixed(1)} / 10
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}
