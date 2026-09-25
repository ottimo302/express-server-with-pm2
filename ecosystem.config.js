module.exports = {
  apps: [
    {
      name: "server",
      script: "server.js",
      instances: 3,
      exec_mode: "cluster"
    }
  ]
};