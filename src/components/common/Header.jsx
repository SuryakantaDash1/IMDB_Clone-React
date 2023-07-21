
import { AppBar, Toolbar, styled,  } from '@mui/material';

const StyledToolbar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
`;

const Header = () => {
    return (
        <AppBar>
            <StyledToolbar>

            </StyledToolbar>
        </AppBar>
    )
}

export default Header;