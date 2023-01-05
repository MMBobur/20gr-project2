import React from 'react'
import { Box, Grid, Typography, Button, Link } from '@mui/material'
import Rasm from "../../assets/img/about.jpg"
import { AboutMap } from '../../assets/about';
function About() {
    return (
        <Box sx={{ p: "60px 0", justifyContent: "center" }} id='about'>
            <Box>
            <Box sx={{ textAlign: "center",  }} >
                <Typography sx={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    mb: "20px",
                    // pb:"20px",
                    fontFamily: '"Raleway", sans-serif'
                }}>
                    ABOUT US
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mb: "30px" }}>

                    <Typography sx={{ width: "120px", height: "2px", background: "#ddd", display: "flex", justifyContent: "center" }}> <Typography sx={{ width: "50px", height: "2px", background: "green", }}></Typography> </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center" }}>

                    <Box sx={{ width: "89%", height: "auto",}}>
                        <Typography>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </Typography>
                    </Box>
                </Box>
            </Box>
                <Box sx={{ justifyContent: "center", display: "flex", width: "100%" }}>
                    <Grid container spacing={2} sx={{ mt: "1.2%", width: "90%" }}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box>
                                <Typography sx={{ fontSize: "26px", fontWeight: "600", m: "0 0 8px", color: "#3A3A3A", lineHeight: "1.3" }}>
                                    Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                                </Typography>
                                <Typography sx={{ fontStyle: "italic", m: "0 0 16px", color: "#3A3A3A", lineHeight: "1.5" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                                <Typography sx={{ alignItems: "center", display: "flex", mb: "15px", color: "#3A3A3A", lineHeight: "1.5" }}>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                                <Typography sx={{ alignItems: "center", display: "flex", mb: "15px", color: "#3A3A3A", lineHeight: "1.5" }}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit.
                                </Typography>
                                <Typography sx={{ lineHeight: "1.5" }}>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </Typography>
                                <Typography sx={{ mt: "5%", color: "#3A3A3A", lineHeight: "1.5" }}>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} justifyContent="center">
                            <img src={Rasm} style={{ width: "100%", }} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ width: "100%", background: "#FFF", height: "auto", p: "60px 0", }}>
                <Box sx={{ m: { lg: "0 60px", md: "0 32px", sm: "0 24px", xs: '0px 12px' }, }}>
                    <Grid container spacing={0} >
                        {AboutMap.map((v,val) => (
                            <Grid key={val} item lg={4} md={4} sm={6} xs={12} sx={{
                                mt: "0%", p: { lg: "40px", md: "40px", },
                                borderLeft: { xl: (v.borderl), lg: (v.borderl), md: (v.borderl), sm: (v.borderlsm), xs: 'none' },
                                borderBottom: { xl: (v.borderb), lg: (v.borderb), md: (v.borbmd), sm: (v.borbsm), xs: (v.borderxs) },
                            }}>
                                <Box >
                                    <Typography sx={{ color: "#6ec083", fontSize: "24px", fontWeight: "400" }}>
                                        {v.number}
                                    </Typography >
                                    <Typography sx={{ fontSize: "26px", fontWeight: "300", m: "20px 0" }}>
                                        {v.name}
                                    </Typography>
                                    <Typography sx={{ fontSoze: "15px", color: "#aaaaaa" }}>
                                        {v.text}
                                    </Typography>
                                </Box>

                            </Grid>
                        ))}

                    </Grid>
                </Box>
            </Box>
        </Box>

    )
}

export default About