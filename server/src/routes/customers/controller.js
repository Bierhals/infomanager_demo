const httpErrors = require('http-errors');
const customersRepository = require('../../services/customersRepository');

// Get all customers
async function getCustomers(req) {
  try {
    if (req.query.sort) {
      req.query.sort = req.query.sort.replace(/\s/g, '');
    }

    const customers = await customersRepository.getCustomers(
      req.query.limit,
      req.query.offset,
      req.query.sort,
      req.query.search,
      req.query.embed,
    );

    return {
      ...customers,
      limit: req.query.limit,
      offset: req.query.offset,
      sort: req.query.sort,
      search: req.query.search,
      embed: req.query.embed,
    };
  } catch (err) {
    if (err.code === 'UNKNOWN_FIELDNAME' || err.code === 'UNKNOWN_REFERENCE') {
      throw httpErrors.BadRequest(err.message);
    } else {
      throw httpErrors.InternalServerError('Beim Abfragen der Kundendaten ist ein Fehler aufgetreten');
    }
  }
}

// Get single customer by ID
async function getCustomer(req) {
  try {
    const customer = await customersRepository.getCustomer(req.params.id);

    if (customer === null) {
      return httpErrors.NotFound('Der Kunde existiert nicht');
    }

    return customer;
  } catch (err) {
    throw httpErrors.InternalServerError('Beim Abfragen der Kundendaten ist ein Fehler aufgetreten');
  }
}

// Get all assets for a customer
async function getCustomerAssets(req) {
  try {
    if (req.query.sort) {
      req.query.sort = req.query.sort.replace(/\s/g, '');
    }

    const customerAssets = await customersRepository.getCustomerAssets(
      req.query.limit,
      req.query.offset,
      req.query.sort,
      req.params.id,
      null,
      req.query.onlyValid,
      'asset',
    );

    return {
      ...customerAssets,
      limit: req.query.limit,
      offset: req.query.offset,
      sort: req.query.sort,
    };
  } catch (err) {
    if (err.code === 'UNKNOWN_FIELDNAME' || err.code === 'UNKNOWN_REFERENCE') {
      throw httpErrors.BadRequest(err.message);
    } else {
      throw httpErrors.InternalServerError('Beim Abfragen der Kunden-Assets ist ein Fehler aufgetreten');
    }
  }
}

// Add a new customer
async function createCustomer(req) {
  try {
    const customer = await customersRepository.createCustomer(req.body);

    return customer;
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT') {
      throw httpErrors.BadRequest('Der Kundenname existiert bereits');
    } else {
      throw httpErrors.InternalServerError('Beim Anlegen eines neuen Kunden ist ein Fehler aufgetreten');
    }
  }
}

// Update an existing customer
async function updateCustomer(req) {
  try {
    const customer = await customersRepository.updateCustomer(req.params.id, req.body);

    return customer;
  } catch (err) {
    if (err.code === 'UPDATE_NOT_UNIQUE') {
      throw httpErrors.BadRequest('Der Kunde existiert nicht');
    } else if (err.code === 'SQLITE_CONSTRAINT') {
      throw httpErrors.BadRequest('Der Kundenname existiert bereits');
    } else {
      throw httpErrors.InternalServerError('Beim Aktualisieren der Kundendaten ist ein Fehler aufgetreten');
    }
  }
}

module.exports = {
  getCustomer,
  getCustomers,
  updateCustomer,
  createCustomer,
  getCustomerAssets,
};
