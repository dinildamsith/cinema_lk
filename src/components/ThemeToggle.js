import { useThemeContext } from '../hooks/ThemeContext';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeToggle() {
    const { mode, toggleTheme } = useThemeContext();

    return (
        <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}
export default ThemeToggle;