// @flow

import type { EmbedProps } from '../../bootstrap';
import React from 'react';
import { Gw2Buff } from 'armory-component-ui-addbuff';
import styles from './styles.less';

type Props = EmbedProps & {
  ids: Array<String>,
};

const BuffsEmbed = ({ ids, traits, className, blankText, size, ...props }: Props) => (
  <div className={className}>
    {ids.map((item) =>
      <Gw2Buff
        name={item}
        {...props}
      />
    )}
  </div>
);

export default BuffsEmbed;
