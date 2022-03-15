import { useEffect } from 'react';import useLatest from '../utils/useLatest';function useUnmount(fn) {    const fnRef = useLatest(fn);    useEffect(        () => {            return function () {                fnRef.current();            }        },        []    );};export default useUnmount;