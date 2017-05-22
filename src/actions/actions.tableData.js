export const API = 'http://localhost:3001/tableData';
export const GET_TABLEDATA = 'GET_TABLEDATA';
export const GET_BY_FIELDS = 'GET_BY_FIELDS';

export function receiveSongs(type, data) {
    return {
        type: type,
        data: data,
        receivedAt: Date.now()
    }
}

/**
 * Makes a request to API with no filter.
 * @param {string} Type of the request default value = GET_TABLEDATA.
 */
export function fetchTableData(type = GET_TABLEDATA) {
    return dispatch => {
        setTimeout(() => {

        fetch(`${API}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            dispatch(receiveSongs(GET_TABLEDATA, data));
        })
        .catch((error) => {
            alert(error);
        });
        }, 2000);
    }

}

/**
 * Makes a request to API with filters.
 * @param {string} data of the request default value is an empty object.
 */
export function fetchSearchByFields(data = {
                                    date: '',
                                    deliveryCountry: '',
                                    manufacturer: '',
                                    gender: '',
                                    size: '',
                                    colour: '',
                                    style: '',
                                    count: ''
                                  }) {
    return dispatch => {
        fetch(`${API}/byFields?date=${data.date}&deliveryCountry=${data.deliveryCountry}&manufacturer=${data.manufacturer}&gender=${data.gender}&size=${data.size}&colour=${data.colour}&style=${data.style}&count=${data.count}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            dispatch(receiveSongs(GET_BY_FIELDS, data));
        })
        .catch((error) => {
            alert(error);
        });
    }

}