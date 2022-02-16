import { useState } from 'react';

import styled from 'styled-components';

import CategoryList from './CategoryList';

const Container = styled.div`
    width: 100%;
    margin-bottom: 100px;
`;

const Title = styled.div`
    padding: 15px;
    font-size: 30px;
    font-weight: bold;
`;

const Wrapper = styled.div`
    display: flex;
`;

const ValueWrapper = styled.div`
    width: 100%;
    border: 3px solid black;
    padding: 15px;
`;

const ValueArea = styled.div`
    border-radius: 20px;
    background-color: lightgray;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    border: 3px solid black;
`;

interface Props {
    jsonObj: any;
}

function HorizontalDataList({ jsonObj }: Props) {
    const [value, setValue] = useState<string>('');

    const handleSetValue = (nextValue: string) => {
        setValue(nextValue);
    };

    if (!jsonObj) {
        return null;
    }

    return (
        <Container>
            <Title>HorizontalData</Title>
            <Wrapper>
                <CategoryList jsonObj={jsonObj} onSetValue={handleSetValue} />

                <ValueWrapper>
                    {value && <ValueArea>{`"${value}"`}</ValueArea>}
                </ValueWrapper>
            </Wrapper>
        </Container>
    );
}

export default HorizontalDataList;
