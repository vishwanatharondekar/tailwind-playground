import React from 'react';

export default function Button(props: any) {
  const { size = 'medium', state = 'enabled', type, children } = props;
  const bgColors: any = {
    primary: {
      enabled: 'bg-btn-primary',
      disabled: 'bg-btn-primary-disabled',
    },
    secondary: {
      enabled: 'bg-btn-secondary',
      disabled: 'bg-btn-secondary-disabled',
    },
  };

  const textColors: any = {
    primary: {
      enabled: 'text-btn-primary',
      disabled: 'text-btn-primary-disabled',
    },
  };

  const sizes: any = {
    large: {
      height: 'h-btn-large',
      padding: 'py-2 px-4',
      fontSize: 'text-lg',
    },
    medium: {
      height: 'h-btn-medium',
      padding: 'py-1 px-4',
      fontSize: 'text-sm',
    },
  };

  return (
    <button
      className={`flex rounded items-center justify-center ${bgColors[type][state]} ${textColors[type][state]} ${sizes[size].height} ${sizes[size].padding} ${sizes[size].fontSize}`}
    >
      {children}
    </button>
  );
}
