import React, { useRef, useState } from 'react';

import useOutsideClickToClose from './../../../../hooks/useOutsideClickToClose';
import { useStore } from './../../../../store/Store';
import usersActions from './../../../../store/Users/actions';
import User from './User';

const Results = ({ data }) => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(data.length > 0);
  const [, dispatch] = useStore();
  const handleCloseResults = () => {
    dispatch(usersActions.getUsersByName([]));
    setIsOpen(!isOpen);
  };
  useOutsideClickToClose(wrapperRef, handleCloseResults);
  return (
    <>
      {isOpen && (
        <div ref={wrapperRef} className="results__container">
          {data && data.map((item) => (
            <User user={item} />
          ))}
        </div>
      )}
    </>
  )
};

export default Results;
