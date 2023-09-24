import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowUpward } from '@mui/icons-material';
import { Box } from '@mui/system';

function LimitedList({ limit, children }) {

  const [index, setIndex] = useState(limit);

  const length = Children.count(children);

  const handleSwitch = () => {
    if (index < length) {
      setIndex(length);
    } else {
      setIndex(limit);
    }
  }

  return (
    <>
      {Children.toArray(children).slice(0, index)}
      {length > limit && (
        <Box textAlign="center" mx="auto" width="100%" color="#3B85F3" fontSize={40} onClick={handleSwitch}>
          {index < length ? '...' : <ArrowUpward />}
        </Box>
      )}
    </>
  )
}

LimitedList.propTypes = {
  limit: PropTypes.number,
  children: PropTypes.node.isRequired,
};

LimitedList.defaultProps = {
  limit: 3,
};

export default LimitedList;
