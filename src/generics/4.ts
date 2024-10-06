type UserGenerics = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(_: Partial<UserGenerics>) {}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
