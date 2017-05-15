/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            user: 1,
            name: "First Project",
            description: "This is about First Project description",
        },
        {
            id: 1,
            user: 1,
            name: "Second Project",
            description: "This is about Second Project description",
        },
        {
            id: 3,
            user: 1,
            name: "Thired Project",
            description: "This is about Thired Project description",
        }
    ]
}
