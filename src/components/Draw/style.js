import { createStyles, makeStyles } from '@material-ui/core';

const styles = () =>
    createStyles({
        root: {
            height: '100%',
            background: 'white',
            height: '100%',
            width: '500px',
            zIndex: 200,
            boxShadow: '1px 0px 7px rgba(0,0,0,0.5)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-out',
        },
        open: {
            transform: 'translateX(0)',
        },
        close: {
            fontWeight: 550,
        },
    });

export default makeStyles(styles);
