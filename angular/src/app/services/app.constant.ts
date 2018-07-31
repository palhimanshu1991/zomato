import { HttpHeaders } from '@angular/common/http';

export const apiUrl = 'http://127.0.0.1:8000/api';

export const userToken = localStorage.getItem('userToken');
export const reqHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + userToken,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type'
});