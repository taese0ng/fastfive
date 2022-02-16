import { useState } from 'react';

import styled from 'styled-components';

import CategoryList from './CategoryList';

const Container = styled.div`
    width: 100%;
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

function DataList({ jsonObj }: Props) {
    const [value, setValue] = useState<string>('');

    const handleSetValue = (nextValue: string) => {
        setValue(nextValue);
    };

    return (
        <Container>
            {jsonObj && (
                <>
                    <CategoryList
                        jsonObj={jsonObj}
                        onSetValue={handleSetValue}
                    />

                    <ValueWrapper>
                        {value && <ValueArea>{`"${value}"`}</ValueArea>}
                    </ValueWrapper>
                </>
            )}
        </Container>
    );
}

export default DataList;
