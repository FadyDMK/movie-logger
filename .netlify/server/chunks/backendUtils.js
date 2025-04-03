import prisma from "@prisma/client";
import bcrypt from "bcrypt";
const db = new prisma.PrismaClient();
const checkUser = async (username) => {
  const userFound = await db.user.findUnique({
    where: { username }
  });
  if (userFound) {
    return true;
  }
  return false;
};
const registerUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password.toString(), 12);
  return await db.user.create({
    data: {
      username: user.username.toString(),
      password: hashedPassword,
      userAuthToken: crypto.randomUUID()
    }
  });
};
const findUserByUsernameWithPassword = async (username) => {
  return await db.user.findUnique({
    where: { username }
  });
};
const logMovie = async (userId, movieId, rating, status) => {
  const user = await db.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    return false;
  }
  const log = await db.log.create({
    data: {
      userId,
      mediaId: movieId,
      rating,
      status
    }
  });
  return log;
};
const checkMovieAndUser = async (userId, movieId) => {
  const user = await db.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    return false;
  }
  const log = await db.log.findFirst({
    where: {
      userId,
      mediaId: movieId
    }
  });
  if (!log) {
    return false;
  }
  return log;
};
const getUserLog = async (userId) => {
  const user = await db.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    return false;
  }
  const log = await db.log.findMany({
    where: {
      userId
    }
  });
  return log;
};
export {
  checkUser as a,
  checkMovieAndUser as c,
  db as d,
  findUserByUsernameWithPassword as f,
  getUserLog as g,
  logMovie as l,
  registerUser as r
};
