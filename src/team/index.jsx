import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Teammap } from './mapp'

function Team() {
    return (
        <Box sx={{ background: "#f8fcf9" }}>
            <Box sx={{ textAlign: "center", mt: "60px" }} >
                <Typography sx={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    mb: "20px",
                    // pb:"20px",
                    fontFamily: '"Raleway", sans-serif'
                }}>
                    TEAM
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mb: "30px" }}>

                    <Typography sx={{ width: "120px", height: "2px", background: "#ddd", display: "flex", justifyContent: "center" }}> <Typography sx={{ width: "50px", height: "2px", background: "green", }}></Typography> </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center" }}>

                    <Box sx={{ width: "87%", height: "auto", }}>
                        <Typography>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", }}>
                <Box sx={{ width: "87%", height: "auto", mt: "50px", }}>
                    <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, }} >
                        {Teammap.map((v,val) => (
                            <Grid key={val} item xs={4} gap={2} >
                                <Box sx={{ width: "97%", height: "100%", background: "white", boxShadow: "0px 0px 12px 0px rgb(34 34 34 / 7%)", display: "flex", }}  >
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        padding: "15px"
                                    }}>
                                        <Box >
                                            <Box sx={{ display: "flex", justifyContent: "center", }}>
                                                <Typography sx={{ width: "200px", pt: "10px" }}>

                                                    <img src={v.rasm} alt="" style={{ width: "100%", borderRadius: "50%" }} />
                                                </Typography>
                                            </Box>
                                            <Typography sx={{ fontSize: "18px", mb: "2px", fontWeight: "700", fontFamily: '"Raleway", sans-serif', pt: "15px" }}>
                                                {v.name}
                                            </Typography>
                                            <Typography sx={{ fontStyle: "italic", fontSize: "13px", pb: "15px" }}>
                                                {v.last}
                                            </Typography>
                                            <Typography sx={{ fontSize: "14px", pt: "15px", fontStyle: "italic", color: "#aaa", padding: "0 15px" }}>
                                                {v.text}
                                            </Typography>

                                            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>

                                                <Typography sx={{ fontSize: "28px", mr: "10px", color: "#aaa", cursor: "pointer" }}>
                                                    {v.twitter}
                                                </Typography>
                                                <Typography sx={{ fontSize: "25px", mr: "10px", color: "#aaa", cursor: "pointer" }}>
                                                    {v.face}
                                                </Typography>
                                                <Typography sx={{ fontSize: "25px", mr: "10px", color: "#aaa", cursor: "pointer" }}>
                                                    {v.ins}
                                                </Typography>
                                                <Typography sx={{ fontSize: "25px", p: "1", color: "#aaa", cursor: "pointer" }}>
                                                    {v.link}
                                                </Typography>

                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Box>
        </Box>
    )
}

export default Team