/*
 * Copyright 2023 Wonderflow Design Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import _ from 'lodash';

import { Data, ScaleType } from '../types';

export const getValueFromKey = (
  object: Record<string, unknown>,
  key: string,
) => {
  let r = object[key];

  if (_.isUndefined(r)) {
    Object.entries(object)
      .filter(arr => _.isObject(arr[1]) && !_.isArray(arr[1]) && !_.isNil(arr[1]))
      .forEach((arr) => {
        const m = getValueFromKey(arr[1] as Record<string, unknown>, key);
        r = m ?? r;
      });
  }

  return r;
};

export const getPrimitiveFromKey = (
  object: Record<string, unknown>,
  key: string,
) => {
  const r = getValueFromKey(object, key);
  const isNumberOrString = typeof r === 'number' || typeof r === 'string';
  return isNumberOrString ? r : undefined;
};

export const extractDataFromArray = (
  arr: Array<Record<string, unknown>>,
  key: string,
) => arr.map(e => getValueFromKey(e, key));

export const extractPrimitivesFromArray = (
  arr: Array<Record<string, unknown>>,
  key: string,
) => arr.map(e => getPrimitiveFromKey(e, key));

export const extractDomainFromData = (data: Data, axis: { scaleType: ScaleType; dataKey: string[] }) => {
  const { scaleType, dataKey } = axis;

  let domain: Array<string | number> = [];

  if (axis) {
    const domainData = _.flattenDeep(dataKey.map(k => extractPrimitivesFromArray(data, k)));
    if (scaleType === 'label') {
      domain = domainData.map(e => (e ? `${e}` : ''));
    } else {
      domain = _.uniq(domainData).filter((d): d is string | number => !_.isNil(d));
    }
  }

  return domain;
};
