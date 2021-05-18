/* eslint-disable */
module.exports = {
  apps: [
    {
      name: 'professions',
      script: 'lerna',
      args: 'exec --scope=@rabota/professions yarn start',
      cwd: './',
      autorestart: true,
      watch: false,
      env_production: {
        NODE_ENV: 'production',
      },
      time: true,
    },
  ],
}
