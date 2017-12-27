const stream = weex.requireModule('stream');
const storage = weex.requireModule('storage');
const baseURL = 'http://192.168.20.61:3000';

/**
 * 抓取数据
 * @param path 接口
 * @param type
 * @returns {Promise}
 */
export function fetch(path, type = 1) {

    return new Promise((resolve, reject) => {
        var headers = {};

        storage.getItem('Authorization', (e) => {
            if (e.result === 'success') {
                headers['Authorization'] = e.data;
            }
        });

        stream.fetch({
            method: 'get',
            url: `${baseURL}/${path}`,
            type: 'json',
            headers: headers,
        }, (response) => {
            var res = response.data;
            if (response.status === 200) {
                switch (type) {
                    case 1:
                        if (res &&
                            res.code === 200) {
                            resolve(res.data);
                        } else {
                            reject(response)
                        }
                        break;
                    case 2:
                        var data = {};
                        for (var item in res) {
                            if (res.hasOwnProperty(item)) {
                                if (res[item].body.code === 200) {
                                    data[item] = res[item].body.data;
                                } else {
                                    reject(response)
                                }
                            }
                        }
                        resolve(data);
                        break;
                    default:
                        break;
                }
                // resolve(res.data)
            } else {
                reject(response)
            }


            switch (type) {
                case 1:

                    if (response.status === 200 &&
                        res &&
                        res.code === 200) {
                        resolve(res.data)
                    } else {
                        reject(response)
                    }
                    break;
                case 2:

                default:
                    reject(response);
                    break;
            }

        });
    })
}

export function fetchIdsByType(type) {
    return fetch(`${type}stories`)
}

export function fetchItem(id) {
    return fetch(`item/${id}`)
}

export function fetchItems(ids) {
    return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchUser(id) {
    return fetch(`user/${id}`)
}

export function fetchPocket() {
    return fetch(`home/index/pocket`)
}

export function fetchCenter() {
    return fetch(`home/index/center`)
}

export function fetchAnswer() {
    return fetch(`home/index/answer`, 2)
}

export function fetchAnswerList(pageNo) {
    return fetch(`topicList?pageNo=${pageNo}`)
}