export function fakeLogin(userName, password) {
    console.log(userName, password);

    if (userName !== 'Layth' || password !== 'Layth1973$')
        return null;

    console.log('login');

    return { userName: 'Layth Attili' }
}