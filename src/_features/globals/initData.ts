import { User } from "payload-types";

export const initUsers: User[] = [
  {
    id: "1",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    email: "admin@withpayload.com",
    username: "adminuser",
    role: "admin",
    password: process.env.ADMIN_PASSWORD,
  },
  {
    id: "2",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    email: "user@withpayload.com",
    password: "test",
    username: "user1",
    role: "user",
  },
];
