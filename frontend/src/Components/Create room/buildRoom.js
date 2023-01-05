export default function buildRoom(name, password, user) {
    return {
        name,
        password,
        user,
        id: new Date().getTime()
    }
}
