import { useEffect, useRef } from "react";

// usePreviousは、ReactのuseRefとuseEffectを組み合わせて、
// コンポーネントの前回の値を保持するカスタムフックです。
// useRefは、コンポーネントのライフサイクルを通じて値を保持するために使用されます。
export function usePrevious<T>(value: T): T {
  const ref = useRef(value);
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}
