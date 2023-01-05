import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from "react-elastic-carousel";
import { Client } from './map';
function Our() {


    const breakPoints = [
        { width: 100, itemsToShow: 2, showArrows: false },
        { width: 550, itemsToShow: 4, showArrows: false },
        { width: 768, itemsToShow: 6, showArrows: false },
        // { width: 1024, itemsToShow: 5, showArrows: false },


    ];
    return (
        <Box sx={{marginBottom:"80px"}}>
            <Box sx={{ textAlign: "center",  }} >
                <Typography sx={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    mb: "20px",
                    // pb:"20px",
                    fontFamily: '"Raleway", sans-serif'
                }}>
                    OUR CLIENTS
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mb: "30px" }}>

                    <Typography sx={{ width: "120px", height: "2px", background: "#ddd", display: "flex", justifyContent: "center" }}> <Typography sx={{ width: "50px", height: "2px", background: "green", }}></Typography> </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center" }}>

                    <Box sx={{ width: "87%", height: "auto",}}>
                        <Typography>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center"}}>

                <Box sx={{ mt: "50px", width: "95%" }}>
                    <Carousel breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={3500}  >
                        {Client.map((v,val) => (
                            <Box key={val} sx={{ width: "120px", }}>
                                <img src={v.rasm} alt="" style={{ width: "100%" }} />
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Box>
        </Box>
    )
}

export default Our