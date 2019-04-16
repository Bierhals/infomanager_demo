const httpErrors = require('http-errors');
const customersRepository = require('../../dao/customersRepository');

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
      null,
      null,
      req.query.onlyValid,
      req.query.embed,
    );

    return {
      ...customerAssets,
      limit: req.query.limit,
      offset: req.query.offset,
      sort: req.query.sort,
      onlyValid: req.query.onlyValid,
      embed: req.query.embed,
    };
  } catch (err) {
    if (err.code === 'UNKNOWN_FIELDNAME' || err.code === 'UNKNOWN_REFERENCE') {
      throw httpErrors.BadRequest(err.message);
    } else {
      throw httpErrors.InternalServerError('Beim Abfragen der Kunden-Assets ist ein Fehler aufgetreten');
    }
  }
}

// Get single customerAsset by ID
async function getCustomerAsset(req) {
  try {
    const customerAsset = await customersRepository
      .getCustomerAsset(req.params.id, req.query.embed);

    if (customerAsset === null) {
      return httpErrors.NotFound('Das Kunden-Asset existiert nicht');
    }

    return customerAsset;
  } catch (err) {
    throw httpErrors.InternalServerError('Beim Abfragen der Kundendaten ist ein Fehler aufgetreten');
  }
}

// Add a new customerAsset
async function createCustomerAsset(req) {
  try {
    const customerAsset = await customersRepository.createCustomerAsset(req.body);

    return customerAsset;
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT') {
      throw httpErrors.BadRequest('Die Asset-Zuordnung existiert bereits');
    } else {
      throw httpErrors.InternalServerError('Beim Anlegen eines neuen Kunden ist ein Fehler aufgetreten');
    }
  }
}

// Update an existing customerAsset
async function updateCustomerAsset(req) {
  try {
    const customerAsset = await customersRepository
      .updateCustomerAsset(req.params.id, req.body);

    return customerAsset;
  } catch (err) {
    if (err.code === 'UPDATE_NOT_UNIQUE') {
      throw httpErrors.BadRequest('Die Asset-Zuordnung existiert nicht');
    } else if (err.code === 'SQLITE_CONSTRAINT') {
      throw httpErrors.BadRequest('Die Asset-Zuordnung existiert bereits');
    } else {
      throw httpErrors.InternalServerError('Beim Aktualisieren der Kundendaten ist ein Fehler aufgetreten');
    }
  }
}

module.exports = {
  getCustomerAssets,
  getCustomerAsset,
  updateCustomerAsset,
  createCustomerAsset,
};
