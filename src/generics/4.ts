type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
  return { ...initialValues, ...updates };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
