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

import clsx from 'clsx';
import {
  forwardRef, PropsWithChildren,
} from 'react';

import {
  Elevator,
  // IconButton, Stack, Title, useOverlayContext,
} from '@/components';

import * as styles from './modal-content.module.css';

export type ModalContentProps = PropsWithChildren<PropsWithClass<{
  /**
   * Set the theme of the content card. To ensure contrast with the default overlay color (dark),
   * this is set to `light` by default.
   */
  theme?: 'dark' | 'light' | 'auto';
}>>

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(({
  children,
  className,
  theme = 'light',
  ...otherProps
}, forwardedRef) => (
  <Elevator resting={4}>
    <div
      className={clsx(styles.Content, className)}
      ref={forwardedRef}
      data-theme={theme}
      {...otherProps}
    >
      {children}
    </div>
  </Elevator>
));

ModalContent.displayName = 'Modal.Content';
