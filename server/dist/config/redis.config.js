import { Redis } from "ioredis";
const redis = new Redis({
    host: "localhost",
    port: 6379,
    password: "mypassword" // Set your Redis password here
});
export default redis;
