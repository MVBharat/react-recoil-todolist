const userData = [
    {
        id: 1,
        name: "John Doe",
        address: "42nd Street, Unknown",
        phone: "1111111111",
        email: "john@doe.com",
    },
     {
        id: 2,
        name: "John Doe",
        address: "42nd Street, Unknown",
        phone: "1111111111",
        email: "john@doe.com",
    }
];

export const getUserData = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                userData.map((user) => ({ id: user.id, name: user.name }))
            );
        }, 2000);
    });

