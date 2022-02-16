import { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

const ListWrapper = styled.ul`
    padding: 0;
    margin: 0 5px 0 0;
    background-color: white;
    border: 3px solid black;
`;

const List = styled.li<{ isSelected: boolean }>`
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    min-width: 180px;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
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

interface Props {
    jsonObj: any;
    onSetValue: (value: string) => void;
}

function CategoryList({ jsonObj, onSetValue }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [subList, setSubList] = useState<any>(null);

    const handleClickList = (entry: Array<any>) => {
        setSelectedCategory(entry[0]);

        if (typeof entry[1] === 'string') {
            setSubList(null);
            onSetValue(entry[1]);
        } else {
            setSubList(entry[1]);
            onSetValue('');
        }
    };

    useEffect(() => {
        setSubList(null);
        setSelectedCategory('');
    }, [jsonObj]);

    return (
        <>
            <ListWrapper>
                {Object.entries(jsonObj).map((entry) => (
                    <List
                        isSelected={selectedCategory === entry[0]}
                        key={String(entry[0] + entry[1])}
                        onClick={() => handleClickList(entry)}
                    >
                        <span>{entry[0]}</span>
                        <span>{typeof entry[1] !== 'string' && '▶️'}</span>
                    </List>
                ))}
            </ListWrapper>

            {subList && (
                <CategoryList jsonObj={subList} onSetValue={onSetValue} />
            )}
        </>
    );
}

export default CategoryList;
