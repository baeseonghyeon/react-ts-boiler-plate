import React from 'react';
import cb from 'classnames/bind';
import styles from './home.module.scss';

const cn = cb.bind(styles);

const Home: React.FC = () => {
    return (
        <div className={cn('example')}>
            <div>Home Page</div>
        </div>
    );
};

export default Home;
