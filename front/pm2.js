module.exports = {
  apps : [{
    script    : "'npm run prod' --name spaghetti",
    instances : "2",
    exec_mode : "cluster"
  }]
}