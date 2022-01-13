import React, { useRef, useState } from 'react';
import { Avatar } from '@mui/material'

import useOutsideClickToClose from './../../../../hooks/useOutsideClickToClose';
import { useStore } from './../../../../store/Store';
import usersActions from './../../../../store/Users/actions';

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
            <div key={item.id} className="results__result">
              <div className='posts__post-box' >
                <Avatar src={item.profile_img} sx={{ width: 24, height: 24 }} />
              </div>
              <div className='posts__post-box' >
                <h5>{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
};

export default Results;
