import { useEffect, useState } from "react";

export default function useTitle({ titleText }: any) {
          const [title, setTitle] = useState("");
          useEffect(() => {
                    document.title = titleText + " - Next Blog || TOUFIQ HASAN KIRON";
                    setTitle(titleText);
          }, [titleText]);

          return [title];
};
