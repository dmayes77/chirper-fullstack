import * as baseService from './base';

function all() {
    return baseService.get('/api/chirps');
}

function one(id) {
    return baseService.get(`/api/chirps/${id}`);
}

function insert(data) {
    return baseService.post('/api/chirps', data);
}

function update(id, data) {
    return baseService.put(`/api/chirps/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/chirps/${id}`);
}

export { all, one, insert, update, destroy };