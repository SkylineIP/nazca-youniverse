import { useEffect, useState } from "react";

function useIs4K() {
  const [is4k, setIs4k] = useState(false);

  useEffect(() => {
    const check = () => setIs4k(window.innerWidth >= 3840);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return is4k;
}

export default useIs4K;