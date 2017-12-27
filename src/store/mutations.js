export function SET_ACTIVE_TYPE(state, {type}) {
    state.activeType = type
}

export function SET_LIST(state, {type, ids}) {
    state.lists[type] = ids
}

export function SET_ITEMS(state, {items}) {
    items.forEach(item => {
        if (item) {
            Vue.set(state.items, item.id, item)
        }
    })
}

export function SET_USER(state, {user}) {
    Vue.set(state.users, user.id, user)
}

export function SET_POCKET(state, {pocket}) {
    Vue.set(state, 'pocket', pocket);
}

export function SET_CENTER(state, {center}) {
    Vue.set(state, 'center', center);
}

export function SET_ANSWER(state, {answer}) {
    Vue.set(state, 'answer', answer);
}


export function SET_ANSWER_LIST(state, {answerList}) {
    Vue.set(state, 'answerList', state.answerList.concat(answerList));
    Vue.set(state, 'answerListPageNo', state.answerListPageNo + 1);
    SET_ANSWER_LIST_LOADING(state, {flag: false});
}


export function SET_ANSWER_LIST_LOADING(state, {flag}) {
    Vue.set(state, 'answerListLoading', flag);
}