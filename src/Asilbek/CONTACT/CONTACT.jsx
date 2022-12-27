import { Box, Grid, Link, Typography } from '@mui/material'
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";
import './CONTACT.css'

function CONTACT() {
    return (
        <Box>
            <Box sx={{
                padding: { xl: '60px 100px', lg: '60px 65px', md: '60px 35px', sm: '60px 25px', xs: '60px 0' }
            }}>
                <Box>
                    <Box>
                        <Typography id='SerBoshYoz1'>
                            CONTACT
                        </Typography>
                        <Box id='SerBoshYoz2'>
                            <Typography id='SerBoshYoz3'></Typography>
                            <Typography id='SerBoshYoz4'></Typography>
                            <Typography id='SerBoshYoz5'></Typography>
                        </Box>
                        <Typography id='SerBoshYoz6'>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Grid container >
                            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={{ padding: '12px' }}>
                                <Box id='ConHarBosh'>
                                    <Box>
                                        <Box sx={{ display: 'flex' }} id='ConHovHarYon1'>
                                            <Typography id='ConHarTepYoz1'>
                                                <BsGeoAlt />
                                            </Typography>
                                            <Box>
                                                <Typography id='ConHarTepYoz2'>
                                                    Location:
                                                </Typography>
                                                <Typography id='ConHarTepYoz3'>
                                                    A108 Adam Street, New York, NY 535022
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex' }} id='ConHovHarYon1'>
                                            <Typography id='ConHarTepYoz1'>
                                                <BsEnvelope />
                                            </Typography>
                                            <Box>
                                                <Typography id='ConHarTepYoz2'>
                                                    Email:
                                                </Typography>
                                                <Typography id='ConHarTepYoz3'>
                                                    info@example.com
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex' }} id='ConHovHarYon1'>
                                            <Typography id='ConHarTepYoz1'>
                                                <BsPhone />
                                            </Typography>
                                            <Box>
                                                <Typography id='ConHarTepYoz2'>
                                                    Call:
                                                </Typography>
                                                <Typography id='ConHarTepYoz3'>
                                                    +1 5589 55488 55s
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        width:'100%',
                                        height:{xl:'280px',lg:'280px',md:'280px',sm:'280px',xs:'240px'}
                                    }}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47955.529859584916!2d69.26172159999999!3d41.304064000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1665154251123!5m2!1sru!2s"
                                            width="100%" height="100%" style={{ border: 0 }} 
                                            loading="lazy" ></iframe>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={{ padding: '12px' }}>
                                <Box id='ConInpBoshBox'>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Box sx={{ width: '100%', padding: '0 12px 8px 0' }}>
                                            <Typography id='ConInpTepYoz'>
                                                Your Name
                                            </Typography>
                                            <input type="text" id='ConInpSty1' />
                                        </Box>
                                        <Box sx={{ width: '100%', padding: '0 0 8px  12px' }}>
                                            <Typography id='ConInpTepYoz'>
                                                Your Email
                                            </Typography>
                                            <input type="text" id='ConInpSty2' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ padding: '16px  0 8px 0' }}>
                                        <Typography id='ConInpTepYoz'>
                                            Subject
                                        </Typography>
                                        <input type="text" id='ConInpSty3' />
                                    </Box>
                                    <Box sx={{ padding: '16px  0 8px 0' }}>
                                        <Typography id='ConInpTepYoz'>
                                            Message
                                        </Typography>
                                        <textarea rows="10" id='ConInpSty4' />
                                    </Box>
                                    <Box sx={{
                                        display:'flex',
                                        justifyContent:'center'
                                    }}>
                                    <Link id='ConInpSty5'>
                                        Send Message
                                    </Link>
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
export default CONTACT;