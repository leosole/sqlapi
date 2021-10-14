const  config = {
    user:  'leosole', // sql user
    password:  'BD2021-1', //sql user password
    server:  'localhost', // if it does not work try- localhost
    database:  'Fornecedor',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  1433
  }

  module.exports = config;
