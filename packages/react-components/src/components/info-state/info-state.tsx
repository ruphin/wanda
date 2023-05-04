/*
 * Copyright 2022-2023 Wonderflow Design Team
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

import { domMax, LazyMotion, m } from 'framer-motion';
import { forwardRef, PropsWithChildren, ReactNode } from 'react';

import {
  Stack, StackProps, Symbol, SymbolProps,
} from '@/components';

import { Text } from '../text-new';
import * as styles from './info-state.module.css';

export type InfoStateProps = PropsWithClass<{
  /**
   * Set the main tagline of the info state. This should be catchy and short
   * as much as possible.
   */
  title: ReactNode;
  /**
   * The icon to display. This is used to enforce the message of the info state.
   * This is not displayed if `image` is set.
   */
  icon?: SymbolProps['source'];
  /**
   * Set the icon color. Please use the correct color based on the type of the message.
   * Eg. Don't use `green` for negative informations.
   */
  iconColor?: 'gray' | 'cyan' | 'green' | 'purple' | 'yellow' | 'red' | 'blue';
  /**
   * An image may be used instead of an icon. The image is centered and scaled.
   */
  image?: string;
  /**
   * Set the direction of the content (column or row).
   */
  direction?: StackProps['direction'];
  /**
   * Pass the suplementary actions to the info state. Even if you can pass
   * as many elements as you want, we suggest to add no more than two actions.
   */
  actions?: ReactNode;
}>

export const InfoState = forwardRef<HTMLDivElement, PropsWithChildren<InfoStateProps>>(({
  className,
  children,
  title,
  icon,
  image,
  direction = 'column',
  iconColor = 'blue',
  actions,
  ...otherProps
}, forwardedRef) => {
  const isHorizontal = direction === 'row';

  return (
    <Stack
      ref={forwardedRef}
      direction={direction}
      rowGap={24}
      columnGap={32}
      className={className}
      hAlign={isHorizontal ? 'start' : 'center'}
      vAlign={(isHorizontal && image) ? 'center' : 'start'}
      fill={false}
      wrap={!!image}
      {...otherProps}
    >
      <LazyMotion features={domMax}>
        {(!image && icon) && (
          <m.span
            data-info-state-icon-color={iconColor}
            className={styles.IconWrapper}
          >
            <Symbol source={icon} dimension={48} />
          </m.span>
        )}

        {(image && !icon) && <img className={styles.Image} alt="" width="400" src={image} loading="lazy" decoding="async" />}

        <Stack
          rowGap={16}
          hAlign={isHorizontal ? 'start' : 'center'}
          vAlign="center"
          fill={false}
        >
          <Text style={{ maxWidth: '40ch' }} textAlign={isHorizontal ? 'start' : 'center'} variant="heading-4">{title}</Text>
          <Text as="div" style={{ maxWidth: '60ch' }} textAlign={isHorizontal ? 'start' : 'center'}>{children}</Text>
          {actions && (
            <Stack vPadding={16} inline direction="row" columnGap={16} rowGap={16} wrap>
              {actions}
            </Stack>
          )}
        </Stack>
      </LazyMotion>
    </Stack>
  );
});

InfoState.displayName = 'InfoState';
