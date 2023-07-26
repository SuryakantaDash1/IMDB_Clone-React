import { AppBar, Toolbar, styled,  } from '@mui/material';
import { logoURL } from '../../constants/constants';



const StyledToolbar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
`;

const Logo = styled('img')({
    width: 64
})

const Header = () => {
    return (
        <AppBar>
            <StyledToolbar>
                <Logo src={logoURL} alt="logo" />
            </StyledToolbar>
        </AppBar>
    )
}

export default Header;