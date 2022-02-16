import styled from 'styled-components';

import CategoryList from './CategoryList';

const Wrapper = styled.div`
    border: 3px solid black;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding: 15px;
`;

interface Props {
    jsonObj: any;
}

function VerticalDataList({ jsonObj }: Props) {
    if (!jsonObj) {
        return null;
    }

    return (
        <div>
            <Title>VerticalData</Title>
            <Wrapper>
                <CategoryList isFirst jsonObj={jsonObj} />
            </Wrapper>
        </div>
    );
}

export default VerticalDataList;
