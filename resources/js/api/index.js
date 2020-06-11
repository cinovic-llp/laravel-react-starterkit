import axios from 'axios';

function get(url) {
    return axios.get(url, {
        validateStatus: function (status) {
            if (status == 401) {
                window.location.href = "/login";
            } else {
                return status < 500;
            }
        }
    });
}

function Delete(url) {
    return axios.delete(url, {
        validateStatus: function (status) {
            if (status == 401) {
                window.location.href = "/login";
            } else {
                return status < 500;
            }
        }
    });
}

function post(url, data) {
    return axios.post(url, data, {
        validateStatus: function (status) {
            if (status == 401) {
                window.location.href = "/login";
            } else {
                return status < 500;
            }
        }
    });
}

export const ApiGetUser = response => {
    return get(`api/user`, response);
};


export const ApiGetUserList = (response) => {
    let per_page = (response.payload.perPage) ? response.payload.perPage : 10;
    let page = (response.payload.page) ? response.payload.page : 1;
    return get(`api/users?per_page=${per_page}&column=name&order=desc&page=${page}`);
};
