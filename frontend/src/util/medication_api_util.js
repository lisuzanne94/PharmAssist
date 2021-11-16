import axios from 'axios';

export const getUserMedications = userId => {
    return axios.get(`/api/medications/user/${userId}`)
};

export const getMedication = medId => {
    return axios.get(`api/medications/${medId}`)
}

export const createMedication = data => {
    return axios.post('/api/medications/', data)
}

export const editMedication = medId => {
    return axios.patch(`/api/medications/${medId}`)
}

export const deleteMedication = medId => {
    return axios.delete(`/api/medications/${medId}`)
}