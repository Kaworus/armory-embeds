// @flow

import type { EmbedProps } from '../../bootstrap';

import React from 'react';
import Buff from '../../components/Buffs';

export default function (element: HTMLElement, ids: Array<number>) {
  return (props: EmbedProps) => <Buff {...props} ids={ids} />;
}
