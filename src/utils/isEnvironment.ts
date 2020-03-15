import { Environment } from '../interfaces/Environment';

const ENVIRONMENT = process.env.NODE_ENV;

export const isDevelopment = ENVIRONMENT === Environment.Development;

export const isProduction = ENVIRONMENT === Environment.Production;

export const isTesting = ENVIRONMENT === Environment.Test;
