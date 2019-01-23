export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {
            user
        }
    })
);

export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {
            user
        }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

// $.ajax({
//     method: 'POST',
//     url: `/api/users`,
//     data: {
//         user: {
//             username: 'bob1',
//             password: 'password',
//             email: 'bob1@aol.com'
//         }
//     }
// })


// $.ajax({
//     method: 'POST',
//     url: `/api/session`,
//     data: {
//         user: {
//             username: 'bob1',
//             password: 'password',
//             email: 'bob1@aol.com'
//         }
//     }
// })
//why doesnt this work




