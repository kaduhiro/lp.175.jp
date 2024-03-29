import { VFC, useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '@/themes/Context';

export type ThemeMenuProps = {};

const ThemeMenu: VFC<ThemeMenuProps> = () => {
	const { setTheme } = useContext(ThemeContext);

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (e: any) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClickMenu = (theme: string) => {
		setTheme(theme);
		handleClose();
	};

	return (
		<>
			<IconButton color="inherit" aria-label="menu" onClick={handleClick}>
				<DarkModeIcon />
			</IconButton>

			<Menu
				sx={{
					'.MuiMenu-list': {
						color: 'black',
					},
				}}
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={() => handleClickMenu('Light')}>
					ライトテーマ
				</MenuItem>
				<MenuItem onClick={() => handleClickMenu('Dark')}>
					ダークテーマ
				</MenuItem>
			</Menu>
		</>
	);
};

export default ThemeMenu;
