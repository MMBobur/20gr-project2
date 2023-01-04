import './BANNER.css';
import { Box, Typography, Link, Grid } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel';
import { BsLaptop, BsBriefcase, BsCalendar4Week } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

function BANNER() {
    return (
        <Box>
            <Carousel fade>
                <Carousel.Item>
                    <Box id='BanCarImg1'>
                        <Box sx={{
                            backgroundColor: "rgba(45, 103, 60, 0.8)",
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Box>
                                <Typography id='BanCarYoz1'>
                                    Welcome to Green
                                </Typography>
                                <Typography id='BanCarYoz2'>
                                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                </Typography>
                                <Link id='BanCarYoz3'>Read More</Link>
                            </Box>
                        </Box>
                    </Box>
                </Carousel.Item>
                <Carousel.Item>
                    <Box id='BanCarImg2'>
                        <Box sx={{
                            backgroundColor: "rgba(45, 103, 60, 0.8)",
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Box>
                                <Typography id='BanCarYoz1'>
                                    Lorem Ipsum Dolor
                                </Typography>
                                <Typography id='BanCarYoz2'>
                                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                </Typography>
                                <Link id='BanCarYoz3'>Read More</Link>
                            </Box>
                        </Box>
                    </Box>
                </Carousel.Item>
                <Carousel.Item>
                    <Box id='BanCarImg3'>
                        <Box sx={{
                            backgroundColor: "rgba(45, 103, 60, 0.8)",
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Box>
                                <Typography id='BanCarYoz1'>
                                    Sequi ea ut et est quaerat
                                </Typography>
                                <Typography id='BanCarYoz2'>
                                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                </Typography>
                                <Link id='BanCarYoz3'>Read More</Link>
                            </Box>
                        </Box>
                    </Box>
                </Carousel.Item>
            </Carousel>
            <Box sx={{
                padding: '20px 0',
                backgroundColor: '#f8fcf9'
            }}>
                <Box>
                    <Box sx={{
                        padding: { xl: '0 100px', lg: '0 65px', md: '0 35px', sm: '25px' }
                    }}>
                        <Grid container >
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} sx={{ padding: '0 12px' }}>
                                <Box sx={{
                                     padding: '20px',
                                     '&:hover':{
                                        color:'#5cb874'
                                    }
                                      }}>
                                    <Box>
                                        <Typography id='BanPasYoz1'>
                                            <BsLaptop />
                                        </Typography>
                                        <Typography id='BanPasYoz2'>
                                            Lorem Ipsum
                                        </Typography>
                                        <Typography id='BanPasYoz3'>
                                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} sx={{ padding: '0 12px' }}>
                            <Box sx={{
                                     padding: '20px',
                                     '&:hover':{
                                        color:'#5cb874'
                                    }
                                      }}>
                                    <Box>
                                        <Typography id='BanPasYoz1'>
                                            <BsBriefcase />
                                        </Typography>
                                        <Typography id='BanPasYoz2'>
                                        Dolor Sitema
                                        </Typography>
                                        <Typography id='BanPasYoz3'>
                                        Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} sx={{ padding: '0 12px' }}>
                            <Box sx={{
                                     padding: '20px',
                                     '&:hover':{
                                        color:'#5cb874'
                                    }
                                      }}>
                                    <Box>
                                        <Typography id='BanPasYoz1'>
                                            <BsCalendar4Week />
                                        </Typography>
                                        <Typography id='BanPasYoz2'>
                                        Sed ut perspiciatis
                                        </Typography>
                                        <Typography id='BanPasYoz3'>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trade stravi
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default BANNER;