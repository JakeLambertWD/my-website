import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#f0db4f'
		},
		secondary: {
			main: green[500]
		}
	}
});

export default theme;
