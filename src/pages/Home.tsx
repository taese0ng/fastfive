import { useState } from 'react';

import styled from 'styled-components';

import FileSelector from '../components/FileSelector';
import { HorizontalDataList } from '../components/horizontal';
import { VerticalDataList } from '../components/vertical';

const Container = styled.div`
    width: 100%;
`;

function Home() {
    const [jsonObj, setJsonObj] = useState<any>(null);

    const handleRecursiveObj: any = (
        obj: any,
        arr: Array<string>,
        idx: number,
        value: string
    ) => {
        const tempObj: any = obj[arr[idx - 1]] || {};

        if (arr.length > idx) {
            const key = arr[idx];
            tempObj[key] = handleRecursiveObj(tempObj, arr, idx + 1, value);
            return tempObj;
        }

        return value;
    };

    const handleChangeJsonData = (data: string) => {
        const parseData = JSON.parse(data);

        const objEntries = Object.entries(parseData).map((entry) => [
            entry[0].split('.'),
            entry[1],
        ]);

        const obj: any = {};
        objEntries.forEach((entry: Array<any>) => {
            obj[entry[0][0]] = handleRecursiveObj(obj, entry[0], 1, entry[1]);
        });

        setJsonObj(obj);
    };

    return (
        <Container>
            <FileSelector onChangeJsonData={handleChangeJsonData} />
            <HorizontalDataList jsonObj={jsonObj} />
            <VerticalDataList jsonObj={jsonObj} />
        </Container>
    );
}

export default Home;
