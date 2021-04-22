import React, { FC } from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useSelector, useDispatch } from 'react-redux';
import { remove, Notification } from '../../features/notifications';
import { RootState } from '../../store';

export const Notifications: FC = () => {

    const dispatch = useDispatch();

    const onClose = (id: number) => dispatch(remove({ id }));

    const notifications: Notification[] = useSelector(({ notifications }: RootState) => notifications);

    return (
        <React.Fragment>
            {
                notifications.map(({ text, severity, id }, i: number) => (
                    <Snackbar
                        key={ id }
                        open
                        autoHideDuration={ 2000 }
                        onClose={ () => onClose(id) }
                        anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
                        style={ { top: `${i * 60}px` } }
                    >
                        <Alert
                            elevation={6}
                            variant="filled"
                            severity={ severity }
                        >
                            { text }
                        </Alert>
                    </Snackbar>
                ))
            }
        </React.Fragment>
    );
};
