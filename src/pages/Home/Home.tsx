import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { IAppState } from '../../store/Store';
import { Mock } from '../../store/reducers/mockReducer'
import { getAllMock } from '../../store/actions/Mockaction'
import { store } from '../../index'

interface Props {
    mocks: Mock[];
}

const Home: React.FC<Props> = (props: any) => {
    useEffect(() => {
        store.dispatch(getAllMock());
        console.log(props.mocks);
    }, [props.mocks])

    return (
        <>
            <h1>Home</h1>
        </>
    )
}

const mapStateToProps = (store: IAppState) => {
    return {
        mocks: store.mockState.mock
    };
};

export default connect(mapStateToProps)(Home)