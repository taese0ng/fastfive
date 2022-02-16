import { ChangeEvent } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;

const Input = styled.input`
    margin: 15px;
`;

interface Props {
    onChangeJsonData: (data: string) => void;
}

function FileSelector({ onChangeJsonData }: Props) {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;

        if (!fileList) return;

        const file = fileList[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (event) => {
            onChangeJsonData(String(event.target?.result));
        };
    };

    return (
        <Container>
            <Input accept=".json" onChange={handleFileChange} type="file" />
        </Container>
    );
}

export default FileSelector;
