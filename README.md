# code-review

Реализовать функциональность с помощью которой можно будет получать данные пользователей в нужном формате.
На вход будет передаваться **userId** в виде строки. Данные лежат в `/api/users/{userId}`.
В зависимости от роли пользователя должны возвращаться разные данные.

Таких форматов сейчас 2:

Если роль **admin**, то возвращаются поля **name**, **role**, **password**(хеш-пароля) и **permissions**.
Если роль **regular**, то **name** и **role**.

Форматы в дальнейшем могут изменяться.

Поле **permissions** должно возвращаться в _kebab-case_ виде и разбираться только из валидных значений: **reportStats**, **validate**.

Эти поля тоже могут в дальнейшем изменяться.
