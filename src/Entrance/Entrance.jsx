import React, {Component} from 'react';
import styled from 'styled-components';
import {StaggeredMotion, spring} from 'react-motion';
//src tut: https://www.youtube.com/watch?v=gF_Q_bEyOS0   @8:46

import Menu from '../Menu';

const colors = [
    '#B3E5FC',
    '#B1D4FA',
    '#4FC3F7',
    '#29B6F6',
    '#03A9F4'
];

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    min-height: 100vh;

`;
const Box = styled.div`
    flex-basis: ${(props) => props.width}%;
    background: ${(props) => props.bgColor};
`;
const ContentWrapper = styled.div`
    flex-basis: 100%;
    background: ${(props) => props.bgColor};
`;

class Entrance extends Component {
    componentDidMount() {
        this.props.setBootstrap(false);
    }
    
    render() {
        const{
            children,
        } = this.props;
        return(
            <StaggeredMotion 
                defaultStyles={[
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                ]}
                styles={(prevStyles) => [
                    { width: spring(0) },
                    { width: spring(prevStyles[0].width) },
                    { width: spring(prevStyles[1].width) },
                    { width: spring(prevStyles[2].width) },
                ]}
                >
                {(styles) => (
                    <Wrapper>
                        <Box bgColor={colors[0]} width={styles[0].width}/>
                        <Box bgColor={colors[1]} width={styles[1].width}/>
                        <Box bgColor={colors[2]} width={styles[2].width}/>
                        <Box bgColor={colors[3]} width={styles[3].width}/>
                        <ContentWrapper bgColor={colors[4]}>
                            {children}
                        </ContentWrapper>

                    </Wrapper>
                )}
            </StaggeredMotion>
        );
    }
}

export default Entrance;