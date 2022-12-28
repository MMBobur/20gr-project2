import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "./style.css"
import { Navbar } from './nav/index';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { BsFillPhoneFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [age, setAge] = React.useState('');

  

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setAnchorElNav(null);
    };

    const [height, setHeight] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setHeight(window.pageYOffset);
        })
        return () => window.removeEventListener('scroll', () => { })
    })

    return (
        <Box sx={{mb:"85px"}}>
            <AppBar position="fixed" sx={{
                boxShadow: '0px 2px 15px rgb(0 0 0 / 10%)'
            }}>
                <Box sx={{
                    display: "flex",
                    background: "white",
                    height: height > 40 ? '0px' : '40px',
                    padding: { xl: "0px 110px", lg: "0px 80px", md: "0px 45px", sm: "0px 35px", xs: "0px" },
                    textAlign: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center" },
                    width: "100%",
                    justifyContent: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center" },
                    alignItems: "center",
                    width: height > 40 ? '0px' : '100%'
                }}>
                    <Box sx={{
                        display: "flex",
                        width: '100%',
                        justifyContent: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center" },
                    }}>
                        <Typography sx={{
                            padding: '2px 5px 0px 0px',
                            fontSize: "17px",
                            color: "#fff",
                        }}>
                            
                        </Typography>
                        <Typography sx={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "#5cb874",
                        }}>
                            <BiEnvelope /> <span style={{ color: "grey" }}>info@example.com</span>   <BsFillPhoneFill /> <span style={{ color: "grey" }}>+1 5589 55488 55</span>

                        </Typography>
                    </Box>
                    <Box sx={{
                        display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none" },
                        width: '100%',
                        justifyContent: 'center',
                        ml:{lg:"500px", md:"395px", sm:"245px", xl:"485px"},
                        position:"absolute"
                    }}>
                        <Typography sx={{

                            fontSize: "17px",
                            color: "grey  ",
                            "&:hover": {
                                color: "#5cb874"
                            }
                        }}>
                            <BsTwitter />
                        </Typography>
                        <Typography sx={{

                            fontSize: "17px",
                            color: "grey  ",
                            "&:hover": {
                                color: "#5cb874"
                            }
                        }}>
                            <Typography style={{ marginLeft: "15px" }}><BsFacebook /> </Typography>
                        </Typography>
                        <Typography sx={{

                            fontSize: "17px",
                            color: "grey  ",
                            "&:hover": {
                                color: "#5cb874"
                            }
                        }}>
                            <Typography style={{ marginLeft: "15px" }}><BsInstagram /></Typography>
                        </Typography>
                        <Typography sx={{

                            fontSize: "17px",
                            color: "grey  ",
                            "&:hover": {
                                color: "#5cb874"
                            }
                        }}>
                            <Typography style={{ marginLeft: "15px" }}><AiFillLinkedin /></Typography>
                        </Typography>

                    </Box>
                </Box>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{
                        padding: { xl: "2px 110px", lg: "5px 80px", md: "0px 15px 0px 45px", sm: "2px 35px", xs: "2px 10px" },
                        height: { xl: '80px', lg: '80px', md: '80px', sm: '70px', xs: '70px' },
                        background: '#fff'
                    }}>
                        <Typography href="/" sx={{
                            width: { xl: 'auto', lg: 'auto', md: 'auto', sm: '100%', xs: '100%' },
                        }}>
                            <Typography sx={{ fontSize: "30px", color: "#5cb874", fontWeight: "700" }}>
                                GREEN
                            </Typography>
                        </Typography>
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'right',
                            padding: '0px',
                            alignItems: 'center'
                        }}>
                            {Navbar.map((val, index) => (
                                <Box key={index}>
                                    {
                                        val.ok ?
                                            <DropdownButton id="dropdown-basic-button" title="Drop Down">
                                                <Dropdown.Item href="#" className='hovIch'>Drop Down 1</Dropdown.Item>
                                                <Dropdown as={ButtonGroup}>
                                                    <Dropdown.Item className='hovIch2'>Deep Drop Down</Dropdown.Item>
                                                    <Dropdown.Toggle split id="dropdown-split-basic" />
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#" className='hovIch'>Drop Down 1</Dropdown.Item>
                                                        <Dropdown.Item href="#" className='hovIch'>Drop Down 2</Dropdown.Item>
                                                        <Dropdown.Item href="#" className='hovIch'>Drop Down 3</Dropdown.Item>
                                                        <Dropdown.Item href="#" className='hovIch'>Drop Down 4</Dropdown.Item>
                                                        <Dropdown.Item href="#" className='hovIch'>Drop Down 5</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown.Item href="#" className='hovIch'>Drop Down 2</Dropdown.Item>
                                                <Dropdown.Item href="#" className='hovIch'>Drop Down 3</Dropdown.Item>
                                                <Dropdown.Item href="#" className='hovIch'>Drop Down 4</Dropdown.Item>
                                            </DropdownButton>
                                            :
                                            <Link className='hovnav' href={val.hr}
                                                
                                                onClick={handleCloseNavMenu}
                                                sx={{
                                                    my: 2,
                                                    display: 'block',
                                                    fontSize: '13px',

                                                    padding: { xl: '10px 0 10px 30px', lg: '10px 0 10px 27px', md: '10px 0 10px 15px' },
                                                    color: '#626262',
                                                    textDecoration: 'none',
                                                    textTransform: 'uppercase',
                                                    fontWeight: '550',
                                                    fontFamily: '"Roboto", sans-serif',
                                                    "&:hover": {
                                                        color: "#5cb874 "
                                                    }
                                                }}
                                            >
                                                {val.NavYoz1}
                                            </Link>
                                    }
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: { xl: 'auto', lg: 'auto', md: 'auto', sm: '100%', xs: '100%' },
                            justifyContent: 'right'
                        }}>
                            <Box sx={{
                                display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none" },
                                justifyContent: 'right',
                            }}>
                                <Button href='#make' sx={{

                                    background: '#FFF',
                                    height: '37px',
                                    padding: { xl: '8px 25px', lg: '8px 29px', md: '8px 10px !important', sm: '6px 12px', xs: '6px 12px' },
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    color: '#5cb874',
                                    marginLeft: '20px',
                                    display: 'flex',
                                    '&:hover': {
                                        background: '#5cb874',
                                        color: '#fff',
                                    },
                                    border: "2px solid #5cb874"
                                }}>
                                    <Box sx={{
                                        display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none" }
                                    }}>Get Started</Box>
                                </Button>
                            </Box>
                            <Box sx={{
                                display: { xs: 'flex', md: 'none' },
                                justifyContent: 'right',
                            }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpen}
                                    color="black"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    background: 'rgba(60, 60, 60, 0.5)',
                    width: '100%',
                    height: '100%',
                    padding: '55px 15px 15px 15px'
                }}
            >
                <Box sx={{
                    width: 'calc(100%-30px)',
                    background: '#fff',
                    height: '100%',
                    borderRadius: '8px',
                    padding: '10px 0px'
                }}>
                    <Link href='#'>
                        <Box sx={{
                            position: 'absolute',
                            color: '#fff',
                            justifyContent: 'right',
                            display: 'flex',
                            marginTop: '-45px',
                            fontSize: '25px',
                            marginLeft: { sm: '93%', xs: '87%' }
                        }}>
                            <AiOutlineClose />
                        </Box>
                    </Link>
                    {Navbar.map((val, ind) => (
                        <Box key={ind}>
                            {val.ok ?

                                <DropdownButton id="dropdown-basic-button" title="Drop Down" >
                                    <Dropdown.Item href="#" className='hovIch'>Drop Down 1</Dropdown.Item>
                                    <Dropdown as={ButtonGroup}>
                                        <Dropdown.Item className='hovIch2'>Deep Drop Down</Dropdown.Item>
                                        <Dropdown.Toggle split id="dropdown-split-basic" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#" className='hovIch'>Drop Down 1</Dropdown.Item>
                                            <Dropdown.Item href="#" className='hovIch'>Drop Down 2</Dropdown.Item>
                                            <Dropdown.Item href="#" className='hovIch'>Drop Down 3</Dropdown.Item>
                                            <Dropdown.Item href="#" className='hovIch'>Drop Down 4</Dropdown.Item>
                                            <Dropdown.Item href="#" className='hovIch'>Drop Down 5</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown.Item href="#" className='hovIch'>Drop Down 2</Dropdown.Item>
                                    <Dropdown.Item href="#" className='hovIch'>Drop Down 3</Dropdown.Item>
                                    <Dropdown.Item href="#" className='hovIch'>Drop Down 4</Dropdown.Item>
                                </DropdownButton>
                                :
                                <Link className='hovnav' href={val.hr}
                                    
                                    sx={{
                                        width: '100%',
                                        display: 'block',
                                        fontSize: '15px',
                                        padding: '12px 20px',
                                        color: '#626262',
                                        textDecoration: 'none',
                                        textTransform: 'uppercase',
                                        fontWeight: '550',
                                        fontFamily: '"Roboto", sans-serif'
                                    }}
                                >
                                    {val.NavYoz1}
                                </Link>
                            }
                        </Box>
                    ))}
                </Box>
            </Modal>
        </Box>
    );
}
export default Nav;