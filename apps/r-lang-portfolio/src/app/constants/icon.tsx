'use client';

import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import type { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  size?: number;
  className?: string;
}

export default function Icon({
  icon: IconComponent,
  size = 16,
  className = '',
}: IconProps) {
  const Component = IconComponent as ComponentType<IconBaseProps>;
  return <Component size={size} className={className} />;
}
