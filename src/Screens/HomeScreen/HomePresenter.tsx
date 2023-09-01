import React from 'react';
import PropTypes from 'prop-types';

interface HomePresenter{
    movieDetail : any;
    loading : boolean;
}


const HomePresenter : React.FC<HomePresenter> = ({ 
movieDetail,
loading
}) => {
        return (
            <div>홈</div>
        )
    }

HomePresenter.propTypes = {
    movieDetail : PropTypes.object,
    loading : PropTypes.bool.isRequired
}

export default HomePresenter;