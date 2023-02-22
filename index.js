/*Реализовать функциональность с помощью которой можно будет получать данные пользователей в нужном формате.
На вход будет передаваться userId в виде строки. Данные лежат в /api/users/{userId}.
В зависимости от роли пользователя должны возвращаться разные данные.
Таких форматов сейчас 2:
Если роль admin, то возвращаются поля name, role, password(хеш-пароля) и permissions. Если роль regular, то name и role.
Форматы в дальнейшем могут изменяться.

Поле permissions должно возвращаться в kebab-case виде и разбираться только из валидных значений: reportStats, validate.
Эти поля тоже могут в дальнейшем изменяться.*/

export async function getUserData(userId) {
    const user = await fetch(`/api/users/${userId}`)
    const rights = { reportStats: true, validate: true, };
    let data;
    switch (true) {
        case user.role == 'admin':
            data = {
                name: user.name,
                role: user.role,
                password: user.password,
                permissions: [],
            }
            Object.keys(rights).forEach(permission => {
                if (rights[permission]) {
                    if (permission === 'reportStats') {
                        data.permissions.push('report-stats')
                    } else {
                        data.permissions.push(permission);
                    }
                }
            })
            break;
        case user.role == 'regular':
            data = {
                name: user.name,
                role: user.role,
            }
    }
    return data;
}