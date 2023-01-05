import React from "react"
import { Box, Button, Typography, Link, Grid } from '@mui/material'
import './style.css'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProImg1 from '../../assets/img/portfolio/portfolio-1.jpg'
import ProImg2 from '../../assets/img/portfolio/portfolio-2.jpg'
import ProImg3 from '../../assets/img/portfolio/portfolio-3.jpg'
import ProImg4 from '../../assets/img/portfolio/portfolio-4.jpg'
import ProImg5 from '../../assets/img/portfolio/portfolio-5.jpg'
import ProImg6 from '../../assets/img/portfolio/portfolio-6.jpg'
import ProImg7 from '../../assets/img/portfolio/portfolio-7.jpg'
import ProImg8 from '../../assets/img/portfolio/portfolio-8.jpg'
import ProImg9 from '../../assets/img/portfolio/portfolio-9.jpg'
import { AiOutlinePlus } from "react-icons/ai";
import { FiLink } from "react-icons/fi";


function Portfolio() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{
            p: "50px 0"
            }} id='portfolio'>
                <Box>
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <Typography sx={{ fontSize: "32px ", fontWeight: "bold", textTransform: "uppercase", mb: "15px", position: "relative" }}>
                            PORTFOLIO
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: "30px" }}>

                        <Typography sx={{ width: "120px", height: "2px", background: "#ddd", display: "flex", justifyContent: "center" }}> <Typography sx={{ width: "50px", height: "2px", background: "green", }}></Typography> </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                        <Box sx={{ width: "87%", height: "auto", }}>
                            <Typography>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Box>
                <Box id="ProjectZZZ">
                    <Box sx={{ width: '100%', typography: 'body1', paddingBottom: '60px' }}>
                        <TabContext value={value}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="ALL" value="1" sx={{
                                        minWidth: "55px",
                                        minHeight: "32px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fff",
                                        color: "#444",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        borderRadius: '3px',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#3b4ef8 !important'
                                        }
                                    }} />
                                    <Tab label="APP" value="2" sx={{
                                        minWidth: "57px",
                                        minHeight: "32px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fff",
                                        color: "#444",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        borderRadius: '3px',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#5cb874 !important'
                                        }
                                    }} />
                                    <Tab label="CARD" value="3" sx={{
                                        minWidth: "68px",
                                        minHeight: "32px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fff",
                                        color: "#444",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        borderRadius: '3px',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#5cb874 !important'
                                        }
                                    }} />
                                    <Tab label="WEB" value="4" sx={{
                                        minWidth: "61px",
                                        minHeight: "32px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fff",
                                        color: "#444",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        borderRadius: '3px',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#5cb874 !important'
                                        }
                                    }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Box>
                                    <Box sx={{
                                        padding: { xl: "10px 100px !important", lg: "10px 70px !important", md: "10px 35px !important", sm: "10px 25px !important", xs: "10px 10px " },
                                    }}>
                                        <Box>
                                            <Box sx={{
                                                display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none', }
                                            }}>
                                                <Box sx={{
                                                    width: '100%'
                                                }}>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: { xl: "91%", lg: "90%", md: "86%" },
                                                            height: { xl: "89%", lg: "89%", md: "85%" },
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    App 1
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    App
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg1} className="img-hover-zoom" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: { xl: "91%", lg: "90%", md: "86%" },
                                                            height: { xl: "92%", lg: "93%", md: "90%" },
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    App 3
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic',
                                                                }}>
                                                                    App
                                                                </Typography>
                                                                <Box>
                                                                    <Link sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer',
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box className="img-hover-zoom">
                                                            <img src={ProImg6} alt="This zooms-in really well and smooth" />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    margin: '0px 24px',
                                                    width: '100%'
                                                }}>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: { xl: "91%", lg: "90%", md: "86%" },
                                                            height: { xl: "84%", lg: "84%", md: "78%" },
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Web 3
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Web
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg2} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: { xl: "90%", lg: "90%", md: "86%" },
                                                            height: { xl: "93%", lg: "93%", md: "90%" },
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Web 2
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Web
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg5} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box className="immm" sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: { xl: "91%", lg: "90%", md: "86%" },
                                                            height: { xl: "84%", lg: "84%", md: "78%" },
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Web 3
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Web
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg9} alt="" />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    width: '100%'
                                                }}>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: { xl: "91%", lg: "90%", md: "86%" },
                                                            height: { xl: "84%", lg: "84%", md: "78%" },
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    App 2
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    App
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg3} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: { xl: "91%", lg: "90%", md: "86%" },
                                                            height: { xl: "84%", lg: "84%", md: "78%" },
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Card 2
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Card
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg4} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: { xl: "91%", lg: "90%", md: "86%" },
                                                            height: { xl: "84%", lg: "84%", md: "78%" },
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Card 1
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Card
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg7} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: { xl: "91%", lg: "90%", md: "86%" },
                                                            height: { xl: "84%", lg: "84%", md: "78%" },
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Card 3
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Card
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg8} alt="" />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box>

                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            display: { xl: 'none', lg: 'none', md: 'none', sm: 'flex', xs: 'none', }
                                        }}>
                                            <Box sx={{
                                                width: '100%',
                                                marginRight: '12px'
                                            }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { sm: "88%" },
                                                        height: { sm: "87%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg1} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { sm: "88%" },
                                                        height: { sm: "80%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg4} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { sm: "88%" },
                                                        height: { sm: "91%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg6} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { sm: "88%" },
                                                        height: { sm: "80%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg8} alt="" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box sx={{
                                                width: '100%',
                                                marginLeft: '12px'
                                            }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { sm: "88%" },
                                                        height: { sm: "80%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg2} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { sm: "88%" },
                                                        height: { sm: "80%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg3} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { sm: "88%" },
                                                        height: { sm: "91%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg5} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { sm: "88%" },
                                                        height: { sm: "80%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg7} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { sm: "88%" },
                                                        height: { sm: "80%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg9} alt="" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            display: { xl: 'none', lg: 'none', md: 'none', sm: 'none', xs: 'flex', }
                                        }}>
                                            <Box sx={{
                                                width: '100%',
                                            }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '90%',
                                                        height: '90%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg1} alt="" />
                                                    </Box>

                                                </Box>                                                    <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '90%',
                                                        height: '83%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg2} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '90%',
                                                        height: '83%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg3} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '90%',
                                                        height: '83%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg4} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '90%',
                                                        height: '92%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg5} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '90%',
                                                        height: '92%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg6} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '90%',
                                                        height: '83%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg7} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '90%',
                                                        height: '83%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg8} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '90%',
                                                        height: '83%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg9} alt="" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value="2">
                                <Box sx={{
                                    padding: { xl: "10px 100px !important", lg: "10px 70px !important", md: "10px 35px !important", sm: "10px 25px !important", xs: "10px 10px " },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 3, md: 3, lg: 3, xl: 3 }} >
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{
                                                position: 'relative',
                                                transition: 'transform .5s ease'
                                            }}>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    padding: '20px',
                                                    width: { xl: "90%", lg: "90%", md: "86%", sm: "88%", xs: "90%" },
                                                    height: { xl: "90%", lg: "90%", md: "85%", sm: "87%" },
                                                    alignItems: 'end',
                                                    display: 'flex',
                                                    background: 'rgba(45, 64, 95, 0.6)',
                                                    opacity: '0',
                                                    transition: '.5s',
                                                    "&:hover": {
                                                        opacity: '1'
                                                    }
                                                }}>
                                                    <Box>
                                                        <Typography sx={{
                                                            fontSize: '20px',
                                                            color: '#fff',
                                                            fontWeight: '600',
                                                            fontFamily: '"Krub", sans-serif',
                                                            marginBottom: '8px'
                                                        }}>
                                                            App 1
                                                        </Typography>
                                                        <Typography sx={{
                                                            color: 'rgba(255, 255, 255, 0.7)',
                                                            fontSize: '14px',
                                                            textTransform: 'uppercase',
                                                            fontStyle: 'italic'
                                                        }}>
                                                            App
                                                        </Typography>
                                                        <Box>
                                                            <Link href="#" sx={{
                                                                fontSize: '22px',
                                                                color: '#fff',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <AiOutlinePlus />
                                                            </Link>
                                                            <Link href="details" sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                marginLeft: '5px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <FiLink />
                                                            </Link>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <img src={ProImg1} alt="" width={'100%'} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { xl: "90%", lg: "90%", md: "86%", sm: "88%", xs: "90%" },
                                                        height: { xl: "80%", lg: "80%", md: "74%", sm: "76%", xs: "79%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg3} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        {/* <Grid item xs={0} sm={6} md={0} lg={0} xl={0}>
                                        </Grid> */}
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { xl: "90%", lg: "90%", md: "86%", sm: "30%", xs: "90%" },
                                                        height: { xl: "93%", lg: "93%", md: "90%", sm: "87%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        marginLeft: { xl: "0%", lg: "0%", md: "0%", sm: "1%" },
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        marginLeft: { xl: '0%', lg: '0%', md: '0%', sm: '52%', xs: '0%' },
                                                        width: { xl: '100%', lg: '100%', md: '100%', sm: '48%', xs: '100%' },
                                                        marginTop: { xl: '0%', lg: '0%', md: '0%', sm: '-150px', xs: '0%' }
                                                    }}>
                                                        <img src={ProImg6} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </TabPanel>
                            <TabPanel value="3">
                                <Box sx={{
                                    padding: { xl: "10px 100px !important", lg: "10px 70px !important", md: "10px 35px !important", sm: "10px 25px !important", xs: "10px 10px " },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 3, md: 3, lg: 3, xl: 3 }} >
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{
                                                position: 'relative',
                                                transition: 'transform .5s ease'
                                            }}>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    padding: '20px',
                                                    width: { xl: "90%", lg: "90%", md: "86%", sm: "88%", xs: "90%" },
                                                    height: { xl: "83%", lg: "83%", md: "77%", sm: "79%", xs: "82%" },
                                                    alignItems: 'end',
                                                    display: 'flex',
                                                    background: 'rgba(45, 64, 95, 0.6)',
                                                    opacity: '0',
                                                    transition: '.5s',
                                                    "&:hover": {
                                                        opacity: '1'
                                                    }
                                                }}>
                                                    <Box>
                                                        <Typography sx={{
                                                            fontSize: '20px',
                                                            color: '#fff',
                                                            fontWeight: '600',
                                                            fontFamily: '"Krub", sans-serif',
                                                            marginBottom: '8px'
                                                        }}>
                                                            Card 1
                                                        </Typography>
                                                        <Typography sx={{
                                                            color: 'rgba(255, 255, 255, 0.7)',
                                                            fontSize: '14px',
                                                            textTransform: 'uppercase',
                                                            fontStyle: 'italic'
                                                        }}>
                                                            Card
                                                        </Typography>
                                                        <Box>
                                                            <Link href="#" sx={{
                                                                fontSize: '22px',
                                                                color: '#fff',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <AiOutlinePlus />
                                                            </Link>
                                                            <Link href="details" sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                marginLeft: '5px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <FiLink />
                                                            </Link>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <img src={ProImg4} alt="" width={'100%'} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { xl: "90%", lg: "90%", md: "86%", sm: "88%", xs: "90%" },
                                                        height: { xl: "83%", lg: "83%", md: "77%", sm: "79%", xs: "82%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg7} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { xl: "90%", lg: "90%", md: "86%", sm: "42%", xs: "90%" },
                                                        height: { xl: "83%", lg: "83%", md: "77%", sm: "79%", xs: "82%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        marginLeft: { xl: "0%", lg: "0%", md: "0%", sm: "52%" },
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        marginLeft: { xl: '0%', lg: '0%', md: '0%', sm: '52%', xs: '0%' },
                                                        width: { xl: '100%', lg: '100%', md: '100%', sm: '48%', xs: '100%' },
                                                    }}>
                                                        <img src={ProImg8} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </TabPanel>
                            <TabPanel value="4">
                                <Box sx={{
                                    padding: { xl: "10px 100px !important", lg: "10px 70px !important", md: "10px 35px !important", sm: "10px 25px !important", xs: "10px 10px " },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 3, md: 3, lg: 3, xl: 3 }} >
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{
                                                position: 'relative',
                                                transition: 'transform .5s ease'
                                            }}>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    padding: '20px',
                                                    width: { xl: "90%", lg: "90%", md: "86%", sm: "88%", xs: "90%" },
                                                    height: { xl: "83%", lg: "83%", md: "77%", sm: "79%", xs: "82%" },
                                                    alignItems: 'end',
                                                    display: 'flex',
                                                    background: 'rgba(45, 64, 95, 0.6)',
                                                    opacity: '0',
                                                    transition: '.5s',
                                                    "&:hover": {
                                                        opacity: '1'
                                                    }
                                                }}>
                                                    <Box>
                                                        <Typography sx={{
                                                            fontSize: '20px',
                                                            color: '#fff',
                                                            fontWeight: '600',
                                                            fontFamily: '"Krub", sans-serif',
                                                            marginBottom: '8px'
                                                        }}>
                                                            Web 3
                                                        </Typography>
                                                        <Typography sx={{
                                                            color: 'rgba(255, 255, 255, 0.7)',
                                                            fontSize: '14px',
                                                            textTransform: 'uppercase',
                                                            fontStyle: 'italic'
                                                        }}>
                                                            Web
                                                        </Typography>
                                                        <Box>
                                                            <Link href="#" sx={{
                                                                fontSize: '22px',
                                                                color: '#fff',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <AiOutlinePlus />
                                                            </Link>
                                                            <Link href="details" sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                marginLeft: '5px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <FiLink />
                                                            </Link>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <img src={ProImg2} alt="" width={'100%'} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { xl: "90%", lg: "90%", md: "86%", sm: "88%", xs: "90%" },
                                                        height: { xl: "92%", lg: "92%", md: "90%", sm: "91%", xs: "92%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg5} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: { xl: "90%", lg: "90%", md: "86%", sm: "88%", xs: "90%" },
                                                        height: { xl: "83%", lg: "83%", md: "77%", sm: "79%", xs: "82%" },
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        width: '100%',
                                                        marginTop: { xl: '0%', lg: '0%', md: '0%', sm: '-240px', xs: '0%' }
                                                    }}>
                                                        <img src={ProImg9} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Portfolio