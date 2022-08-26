/* tslint:disable */
/* eslint-disable */
/**
 * Unleash API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.11.0-beta.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    FeatureStrategySchema,
    FeatureStrategySchemaFromJSON,
    FeatureStrategySchemaFromJSONTyped,
    FeatureStrategySchemaToJSON,
} from './FeatureStrategySchema';

/**
 * 
 * @export
 * @interface FeatureEnvironmentSchema
 */
export interface FeatureEnvironmentSchema {
    /**
     * 
     * @type {string}
     * @memberof FeatureEnvironmentSchema
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureEnvironmentSchema
     */
    environment?: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureEnvironmentSchema
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FeatureEnvironmentSchema
     */
    enabled: boolean;
    /**
     * 
     * @type {Array<FeatureStrategySchema>}
     * @memberof FeatureEnvironmentSchema
     */
    strategies?: Array<FeatureStrategySchema>;
}

export function FeatureEnvironmentSchemaFromJSON(json: any): FeatureEnvironmentSchema {
    return FeatureEnvironmentSchemaFromJSONTyped(json, false);
}

export function FeatureEnvironmentSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureEnvironmentSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'environment': !exists(json, 'environment') ? undefined : json['environment'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'enabled': json['enabled'],
        'strategies': !exists(json, 'strategies') ? undefined : ((json['strategies'] as Array<any>).map(FeatureStrategySchemaFromJSON)),
    };
}

export function FeatureEnvironmentSchemaToJSON(value?: FeatureEnvironmentSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'environment': value.environment,
        'type': value.type,
        'enabled': value.enabled,
        'strategies': value.strategies === undefined ? undefined : ((value.strategies as Array<any>).map(FeatureStrategySchemaToJSON)),
    };
}
