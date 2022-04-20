import { createContext, useState, useEffect } from 'react';

const initialDataState = {
    IDs: '00',
    Lat: '0.00000',
    Long: '0.00000'
}
const DataContext = createContext(initialDataState);

export function DataContextProvider(props) {
    const [dataObj, setDataObj] = useState(initialDataState)

    useEffect(() => {
        fetch('api/getData')
        .then((res) => res.json())
        .then((data) => {
            setDataObj((oldDataObj) => {
                let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
                prevDataObj.IDs = data.IDs
                return prevDataObj
            });
        })
      }, []); 

    // see https://nextjs.org/docs/basic-features/data-fetching/client-side
    function getIds() {
        return dataObj.IDs
    }


    const context = {
        getIds: getIds
    };

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContext;