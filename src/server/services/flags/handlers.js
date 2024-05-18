/**
 * Get list of flags
 * @param req
 * @param res
 */
export function getFlagsList(req, res) {
  res.json({ data: [] });
}

/**
 * Create a new flag
 * @param req
 * @param res
 */
export function createFlag(req, res) {
  res.json({
    data: {
      ...req.body,
      id: 1
    }
  });
}

/**
 * Get a flag by id
 * @param req
 * @param res
 */
export function getFlag(req, res) {
  res.json({
    data: {
      id: req.params.id,
      name: "Flag 1"
    }
  });
}

/**
 * Update a flag by id
 * @param req
 * @param res
 */
export function updateFlag(req, res) {
  res.json({
    data: {
      ...req.body,
      id: req.params.id
    }
  });
}

/**
 * Delete a flag by id
 * @param req
 * @param res
 */
export function deleteFlag(req, res) {
  res.send();
}