import React from 'react';
import cb from 'classnames/bind';
import styles from './home.module.scss';
import { useObserver } from 'mobx-react';
import useStore from 'modules/useStore';

const cn = cb.bind(styles);

const Home: React.FC = () => {
    const { numberStore } = useStore();

    return useObserver(() => {
        return (
            <div className={cn('example')}>
                <div>
                    <h1>Home Page</h1>
                    <h2>{numberStore.num}</h2>
                    <button onClick={() => numberStore.setIncreaseNumber()}>
                        +
                    </button>
                    <button onClick={() => numberStore.setDecreaseNumber()}>
                        -
                    </button>
                </div>
            </div>
        );
    });
};

export default Home;
