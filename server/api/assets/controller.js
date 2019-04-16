const httpErrors = require('http-errors');
const assetsRepository = require('../../dao/assetsRepository');
const customersRepository = require('../../dao/customersRepository');

// Get all assets
async function getAssets(req) {
  try {
    if (req.query.sort) {
      req.query.sort = req.query.sort.replace(/\s/g, '');
    }

    const assets = await assetsRepository.getAssets(
      req.query.limit,
      req.query.offset,
      req.query.sort,
      req.query.include,
    );

    return {
      ...assets,
      limit: req.query.limit,
      offset: req.query.offset,
      sort: req.query.sort,
    };
  } catch (err) {
    if (err.code === 'UNKNOWN_FIELDNAME' || err.code === 'UNKNOWN_REFERENCE') {
      throw httpErrors.BadRequest(err.message);
    } else {
      throw httpErrors.InternalServerError('Beim Abfragen der Assets ist ein Fehler aufgetreten');
    }
  }
}

// Get single asset by ID
async function getAsset(req) {
  try {
    const customer = await assetsRepository.getAsset(req.params.id);

    if (customer === null) {
      return httpErrors.NotFound('Das Asset existiert nicht');
    }

    return customer;
  } catch (err) {
    throw httpErrors.InternalServerError('Beim Abfragen des Assets ist ein Fehler aufgetreten');
  }
}

// Get all associated customers for an asset
async function getAssetCustomers(req) {
  try {
    if (req.query.sort) {
      req.query.sort = req.query.sort.replace(/\s/g, '');
    }

    const assetCustomers = await customersRepository.getCustomerAssets(
      req.query.limit,
      req.query.offset,
      req.query.sort,
      null,
      req.params.id,
      req.query.onlyValid,
      'customer',
    );

    return {
      ...assetCustomers,
      limit: req.query.limit,
      offset: req.query.offset,
      sort: req.query.sort,
    };
  } catch (err) {
    if (err.code === 'UNKNOWN_FIELDNAME' || err.code === 'UNKNOWN_REFERENCE') {
      throw httpErrors.BadRequest(err.message);
    } else {
      throw httpErrors.InternalServerError('Beim Abfragen der Asset-Kunden ist ein Fehler aufgetreten');
    }
  }
}


// Add a new asset
async function createAsset(req) {
  try {
    const customer = await assetsRepository.createAsset(req.body);

    return customer;
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT') {
      throw httpErrors.BadRequest('Ein Asset mit der gleichen Seriennummer existiert bereits');
    } else {
      throw httpErrors.InternalServerError('Beim Anlegen eines neuen Assets ist ein Fehler aufgetreten');
    }
  }
}

// Update an existing asset
async function updateAsset(req) {
  try {
    const customer = await assetsRepository.updateAsset(req.params.id, req.body);

    return customer;
  } catch (err) {
    if (err.code === 'UPDATE_NOT_UNIQUE') {
      throw httpErrors.BadRequest('Das Asset existiert nicht');
    } else if (err.code === 'SQLITE_CONSTRAINT') {
      throw httpErrors.BadRequest('Ein Asset mit der gleichen Seriennummer existiert bereits');
    } else {
      throw httpErrors.InternalServerError('Beim Aktualisieren des Assets ist ein Fehler aufgetreten');
    }
  }
}

module.exports = {
  getAssets,
  getAsset,
  updateAsset,
  createAsset,
  getAssetCustomers,
};
