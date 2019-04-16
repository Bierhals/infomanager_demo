async function getHome() {
  return 'Infomanager-API 1.0 / nodejs / fastify';
}

async function getHealth() {
  return {
    status: 'ok',
  };
}

module.exports = {
  getHome,
  getHealth,
};
