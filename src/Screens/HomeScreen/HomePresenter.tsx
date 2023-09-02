import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import styles from './Home.module.css';
import { Helmet, HelmetProvider} from 'react-helmet-async'

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
        <div className={styles.container}>
            <HelmetProvider>
                <Helmet>
                    <title>넷플릭스 - 홈</title>
                </Helmet>
            </HelmetProvider>

            <div>컨텐츠 적을 예정</div>
        </div>
    
    )
}

HomePresenter.propTypes = {
    movieDetail : PropTypes.object,
    loading : PropTypes.bool.isRequired
}

export default HomePresenter;