import React from 'react';
import clsx from 'clsx';
import useStyles from './style';

const SlideDrawer = ({ children,isOpen, className }) => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.root, className, { [classes.open]: isOpen, [classes.close]: !isOpen })}>
            {children}
        </div>
    );
};

export default SlideDrawer;
