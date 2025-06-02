'use client';

import { ReactNode } from 'react';

interface IconProps {
  icon: ReactNode;
  className?: string;
}

function Icon({ icon, className = '' }: IconProps) {
  return <span className={className}>{icon}</span>;
}

export default Icon;
