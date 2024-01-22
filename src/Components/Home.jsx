import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Carousell from './Carousell';
import Footer from './Footer';
function Home() {
    const cardData = [
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Lucky_One_Mall.jpg',
            title: 'Fashion Design',
            description: 'Description for Card 1',
        },
        {
            image: 'https://c8.alamy.com/comp/TBNY8D/indoor-landscape-shopping-escalator-and-glass-roof-of-modern-shopping-mall-in-vientiane-city-zhengzhou-henan-province-TBNY8D.jpg',
            title: 'New Data Comming from mY life',
            description: 'Description for Card 2',
        },
        {
            image: 'https://www.pymnts.com/wp-content/uploads/2019/08/malls-tenants-innovation-Simon-retail.jpg',
            title: 'Hello from Media',
            description: 'Description for Card 3',
        },
    ];
    const steps = [
        {
            label: 'Select campaign settings',
            description: `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`,
        },
        {
            label: 'Create an ad group',
            description:
                'An ad group contains one or more ads which target a shared set of keywords.',
        },
        {
            label: 'Create an ad',
            description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
        },
    ];
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
               <Carousell />
            <h1 style={{ textAlign: "center", margin: "40px" }}>Check Our New Market Design</h1>
            <Box sx={{ flexGrow: 0 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {cardData.map((card, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={card.image}
                                    title={card.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <h1 style={{ textAlign: "center", margin: "60px" }}>Available Fashion Design and Cataory</h1>
            <Stack spacing={2} direction="row" style={{ position: "relative", textAlign: "center", alignItems: "center" }}>
                <Button variant="outlined">Men Design</Button>
                <Button variant="outlined">Women Design</Button>
                <Button variant="outlined">Child Design</Button>
                <Button variant="outlined">Fashion Design</Button>
            </Stack>
            <Box sx={{ flexGrow: 0 }} style={{ margin: "40px" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {cardData.map((card, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={card.image}
                                    title={card.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <h1>Review About Our Design</h1>
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{steps[activeStep].label}</Typography>
                </Paper>
                <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
                    {steps[activeStep].description}
                </Box>
                <MobileStepper
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
            <Footer/>
        </div>
    );
}

export default Home;
