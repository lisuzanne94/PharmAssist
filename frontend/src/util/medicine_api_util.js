import axios from 'axios';

export const getMedications = () => {
    return axios.get('/api/medications')
};

export const getUserMedication = id => {
    return axios.get(`api/medications/user/${id}`)
}

export const createMedication = data => {
    return axios.post('/api/medications/', data)
}

export const editMedication = id => {
    return axios.patch(`/api/medications/${id}`)
}

export const deleteMedication = id => {
    return axios.delete(`/api/medications/${id}`)
}