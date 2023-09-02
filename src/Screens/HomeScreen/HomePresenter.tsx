import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import styles from './Home.module.css';

interface HomePresenter{
    movieDetail : any;
    loading : boolean;
    error : any;
}


const HomePresenter : React.FC<HomePresenter> = ({ 
    movieDetail,
    loading,
    error
    }) => {
        return loading? (
            <Loader></Loader>
        ) :  (
            <div>홈</div>
    
        )
    }

HomePresenter.propTypes = {
    movieDetail : PropTypes.object,
    loading : PropTypes.bool.isRequired
}

export default HomePresenter;