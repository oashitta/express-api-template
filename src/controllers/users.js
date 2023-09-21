import { testEnvironmentVariable } from '../config';

export const allUsersPage = (req, res) => {
  res.status(200).json({ msg: "users have not been created yet"})
}
