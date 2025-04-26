
export const useKeyupFunction = () => {
  const handleEnterKey = (e: React.KeyboardEvent, callback: () => void) => {
    IsKey(e.nativeEvent, ['Enter'], callback);
  };

  const handleEscapeKey = (e: React.KeyboardEvent, callback: () => void) => {
    IsKey(e.nativeEvent, ['Escape'], callback);
  };

  const handleArrowUpKey = (e: React.KeyboardEvent, callback: () => void) => {
    IsKey(e.nativeEvent, ['ArrowUp'], callback);
  };

  const handleArrowDownKey = (e: React.KeyboardEvent, callback: () => void) => {
    IsKey(e.nativeEvent, ['ArrowDown'], callback);
  };

  const handleTabKey = (e: React.KeyboardEvent, callback: () => void) => {
    IsKey(e.nativeEvent, ['Tab'], callback);
  };

  const IsKey = (e: KeyboardEvent, keys: string[], callback: () => void) => {
    if (keys.includes(e.key)) {
      e.preventDefault();
      callback();
    }
  };

  return {
    handleEnterKey,
    handleEscapeKey,
    handleArrowUpKey,
    handleArrowDownKey,
    handleTabKey,
    IsKey,
  };
}
