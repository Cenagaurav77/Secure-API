const responseCodes = {
  UNKNOWN_ERROR: 500,
  // Predefined 2xx HTTP codes
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  // Predefined 3xx HTTP codes
  NOT_MODIFIED: 304,
  // Predefined 4xx HTTP codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  RESOURCE_NOT_FOUND: 404,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  // Predefined 5xx HTTP codes
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
}

export default responseCodes
