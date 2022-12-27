import React from "react"
import { Box, Typography, Link, Grid } from '@mui/material'
import { Futlink } from "../../assets/footer"

function Footer() {
    return (
        <>
            <Box sx={{
                background: "#090909",
                color: "#fff",
                fontSize: "14px",
                textAlign: "center",
                padding: "30px 0",
            }}>
                <Typography variant="h3" sx={{
                    fontSize: "36px",
                    fontWeight: 900,
                    color: "#fff",
                    position: "relative",
                    fontFamily: "'Poppins', sans-serif",
                    padding: 0,
                    margin: "0 0 15px 0",
                }}>
                    Green
                </Typography>
                <Typography sx={{
                    fontStyle: "italic",
                    padding: 0,
                    margin: "0 0 40px 0",
                }}>
                    Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
                </Typography>
                <Box sx={{
                    margin: "0 0 40px 0",
                }}>
                    <Grid container justifyContent="center">
                        {Futlink.map((val,v) => (
                            <Grid item key={v} >
                                <Link href="#" sx={{
                                    fontSize: "18px",
                                    background: "#5cb874",
                                    color: "#fff",
                                    lineHeight: 1,
                                    padding: "8px ",
                                    paddingTop: "10px",
                                    marginRight: "8px",
                                    borderRadius: "50%",
                                    textAlign: "center",
                                    width: "36px",
                                    height: "36px",
                                    transition: "0.3s",
                                    "&:hover": {
                                        background: "#449d5b",
                                        color: "#fff"
                                    }
                                }}>
                                    {val.icon}
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Typography sx={{
                    margin: "0 0 5px 0", color: "#fff",
                    fontSize: "14px",
                    textAlign: "center",
                }}>
                    © Copyright <strong ><span style={{ fontWeight: "bold" }}>Green</span></strong>. All Rights Reserved
                </Typography>
                <Typography sx={{fontSize: "13px", color:"#fff",textAlign:"center"}}>
                    Designed by <a href="#" style={{
                        textDecoration: "none",
                        color: "#5cb874",
                    }}>BootstrapMade</a>
                </Typography>

            </Box>
        </>
    )
}
export default Footer