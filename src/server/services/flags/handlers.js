import { createNewFlag, getUserFlags } from "../../../db/models/flag.js";

/**
 * Get list of flags
 * @param req
 * @param res
 */
export async function getFlagsList(req, res) {
  const data = await getUserFlags({ user_id: req.user.id });
  res.json({ data });
}

/**
 * Create a new flag
 * @param req
 * @param res
 */
export async function createFlag(req, res) {
  const data = await createNewFlag({ user_id: req.user.id, ...req.body });
  res.json({
    data: data,
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
      name: "Flag 1",
    },
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
      id: req.params.id,
    },
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
