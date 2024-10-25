/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-interview-mocker_owner:dEM7zqlQ4DbI@ep-royal-haze-a5wmyt2u.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
  },
};
