import React from 'react';

interface FooProps {
  /**
   * The size
   */
  size: { width: number; height: number };
}

const Foo: React.FC<FooProps> = (props: FooProps) => <>{JSON.stringify(props)}</>;

export const component = Foo;
