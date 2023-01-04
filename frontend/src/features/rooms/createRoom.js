export default function createRoom(name, passoword, user) {
    return {
        name,
        passoword,
        user,
        id: new Date().getTime()
    }
}
