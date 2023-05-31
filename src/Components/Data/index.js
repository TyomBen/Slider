import { URL } from "../Utills/constants";
import {useEffect, useState} from 'react';
import Carousels from "../CarouselSkeletOn";
const Data = () => {
    const [datas, setDatas] = useState ([]);
    const gettingData = async () => {
        const response = await fetch (`${URL}`);
        const data = await response.json();
        setDatas (data.slice (0, 4));
    }
    useEffect (() => {
        gettingData ();
    }, [])
    return (
        <Carousels datas = {datas} />
    )
}

export default Data;