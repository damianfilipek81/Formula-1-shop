import React from 'react';
import styles from './Modal.module.scss';
import { MetroSpinner } from "react-spinners-kit";

const Component = () => {

  return (
    <div className={styles.root}>
      <MetroSpinner size={100} color="#D62323" loading={true} />;
    </div>
  );
};

export {
  Component as Modal,
  Component as ModalComponent,
};
