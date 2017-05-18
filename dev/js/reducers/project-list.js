/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            user: 1,
            projectName: "First Projects",
            projectDescription: "This is about First (1) Project description",
        },
        {
            id: 2,
            user: 1,
            projectName: "Second Project",
            projectDescription: "This is about Second (2) Project description",
        },
        {
            id: 3,
            user: 1,
            projectName: "Thired Project",
            projectDescription: "This is about Thired (3) Project description",
        },
        {
            id: 4,
            user: 2,
            projectName: "Forth Project",
            projectDescription: "This is about Forth (4) Project description",
        },
        {
            id: 5,
            user: 3,
            projectName: "Fifth Project",
            projectDescription: "This is about Fifth (5) Project description",
        },
        {
            id: 6,
            user: 3,
            projectName: "Sixth Project",
            projectDescription: "This is about Sixth (6) Project description",
        }
    ]
}
