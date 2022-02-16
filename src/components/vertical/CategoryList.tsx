import { useState } from 'react';

import styled, { css } from 'styled-components';

const ListWrapper = styled.ul<{ isFirst: boolean }>`
    padding: 0;
    ${({ isFirst }) =>
        !isFirst &&
        css`
            margin: 0 0 0 30px;
        `};
    background-color: white;
`;

const List = styled.li<{ isSelected: boolean }>`
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    min-width: 180px;
    padding: 5px 10px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 8px;
    background-color: lightgray;

    ${({ isSelected }) =>
        isSelected &&
        css`
            background-color: #f4e995;
        `};

    :hover {
        background-color: #f4e995;
        cursor: pointer;
    }
`;

const ValueArea = styled.div`
    border: 3px solid black;
    font-size: 20px;
    font-weight: bold;
    min-width: 180px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 8px;
    background-color: lightgray;
    margin: 0 0 0 30px;
`;

interface Props {
    jsonObj: any;
    isFirst: boolean;
}

function CategoryList({ jsonObj, isFirst }: Props) {
    const [value, setValue] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [subList, setSubList] = useState<any>(null);

    const handleClickList = (entry: Array<any>) => {
        setSelectedCategory(entry[0]);

        if (typeof entry[1] === 'string') {
            setSubList(null);
            setValue(entry[1]);
        } else {
            setSubList(entry[1]);
            setValue('');
        }
    };

    return (
        <ListWrapper isFirst={isFirst}>
            {Object.entries(jsonObj).map((entry) => (
                <>
                    <List
                        isSelected={selectedCategory === entry[0]}
                        key={String(entry[0] + entry[1])}
                        onClick={() => handleClickList(entry)}
                    >
                        <span>
                            {selectedCategory === entry[0] ? '▼' : '▶'}{' '}
                        </span>
                        <span>{entry[0]}</span>
                    </List>
                    {selectedCategory === entry[0] && subList && (
                        <CategoryList isFirst={false} jsonObj={subList} />
                    )}

                    {selectedCategory === entry[0] && value && (
                        <ValueArea>{value}</ValueArea>
                    )}
                </>
            ))}
        </ListWrapper>
    );
}

export default CategoryList;
