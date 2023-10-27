import React, {
  useLayoutEffect,
  useRef,
} from 'react';
import {
  flow,
  forEach,
  isFunction,
  negate,
  noop,
  omitBy,
} from 'lodash/fp';
import {
  withKey,
} from 'moredash';

type WebComponentProps<T extends Omit<T, 'component'>> = T & {
  component: string,
};

const WebComponent = <T extends Omit<T, 'component'>>({
  component,
  ...props
}: WebComponentProps<T>) => {
  const ref = useRef<any>(null);

  useLayoutEffect(
    () => {
      if (ref.current) {
        flow(
          omitBy(isFunction),
          withKey(forEach)((value: any, key: string) => {
            ref.current![key] = value;
          }),
        )(props);

        const theRef = ref.current;
        const theProps = props;

        flow(
          omitBy(negate(isFunction)),
          withKey(forEach)((value: any, key: string) => {
            theRef!.addEventListener(key, value);
          }),
        )(theProps);

        return () => {
          if (theRef) {
            flow(
              omitBy(negate(isFunction)),
              withKey(forEach)((value: any, key: string) => {
                theRef!.removeEventListener(key, value);
              }),
            )(theProps);
          }
        };
      }

      return noop;
    },
    [props],
  );

  return React.createElement(component, { ref });
};

export default WebComponent;
