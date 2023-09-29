export const envConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  mongodbUrl: process.env.MONGODB_URL,
  defaultLimit: +process.env.DEFAULT_LIMIT || 7,
});
