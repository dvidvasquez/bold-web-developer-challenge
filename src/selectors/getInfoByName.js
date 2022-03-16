import { data } from '../data/data.js';


export const getInfoByName = ( name = '' ) => {
    return data.find( info => info.name === name );
}