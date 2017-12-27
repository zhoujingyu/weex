import {
    fetchItems,
    fetchIdsByType,
    fetchUser,
    fetchPocket,
    fetchCenter,
    fetchAnswer,
    fetchAnswerList,
} from './fetch';

const LOAD_MORE_STEP = 10;
const modal = weex.requireModule('modal');

// ensure data for rendering given list type
export function FETCH_LIST_DATA({commit, dispatch, state}, {type}) {
    commit('SET_ACTIVE_TYPE', {type})
    return fetchIdsByType(type)
        .then(ids => commit('SET_LIST', {type, ids}))
        .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
}

// load more items
export function LOAD_MORE_ITEMS({dispatch, state}) {
    state.counts[state.activeType] += LOAD_MORE_STEP
    return dispatch('ENSURE_ACTIVE_ITEMS')
}

// ensure all active items are fetched
export function ENSURE_ACTIVE_ITEMS({dispatch, getters}) {
    return dispatch('FETCH_ITEMS', {
        ids: getters.activeIds
    })
}

export function FETCH_ITEMS({commit, state}, {ids}) {
    // only fetch items that we don't already have.
    const newIds = ids.filter(id => !state.items[id])
    return newIds.length
        ? fetchItems(newIds).then(items => commit('SET_ITEMS', {items}))
        : Promise.resolve()
}

export function FETCH_USER({commit, state}, {id}) {
    return state.users[id]
        ? Promise.resolve(state.users[id])
        : fetchUser(id).then(user => commit('SET_USER', {user}))
}

/**
 * 会员课程数据
 * @param commit
 * @param state
 * @returns {*}
 * @constructor
 */
export function FETCH_POCKET({commit, state}) {
    return JSON.stringify(state.pocket) !== '{}'
        ? Promise.resolve(state.pocket)
        : fetchPocket().then(pocket => commit('SET_POCKET', {pocket}))
}

/**
 * 个人中心数据
 * @param commit
 * @param state
 * @returns {*}
 * @constructor
 */
export function FETCH_CENTER({commit, state}) {
    return JSON.stringify(state.center) !== '{}'
        ? Promise.resolve(state.center)
        : fetchCenter()
            .then(center => commit('SET_CENTER', {center}))
            .catch((err) => {
                var message = '发生未知错误';
                if (err.data && err.data.error === 'unauthorized') {
                    message = '未登录'
                }

                modal.toast({
                    message: message
                });
            })
}

/**
 * 成长百答数据
 * @param commit
 * @param state
 * @returns {*}
 * @constructor
 */
export function FETCH_ANSWER({commit, state}) {
    return JSON.stringify(state.answer) !== '{}'
        ? Promise.resolve(state.answer)
        : fetchAnswer()
            .then(answer => commit('SET_ANSWER', {answer}))
            .catch((err) => {
                modal.toast({
                    message: '获取成长百答内容失败'
                });
            })
}

/**
 * 成长百答列表数据
 * @param commit
 * @param state
 * @returns {Promise.<T>}
 * @constructor
 */
export function FETCH_ANSWER_LIST({commit, state}) {
    if (state.answerListLoading) {
        return Promise.resolve(state.answerList);
    } else {
        commit('SET_ANSWER_LIST_LOADING', {flag: true});
        return fetchAnswerList(state.answerListPageNo + 1)
            .then(answerList => commit('SET_ANSWER_LIST', {answerList}))
            .catch((err) => {
                modal.toast({
                    message: '获取成长百答列表失败'
                });
            })
    }
}