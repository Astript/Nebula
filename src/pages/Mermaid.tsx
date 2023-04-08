import { Divider, Grid, Paper, Stack } from "@mui/material";
import mermaid from "mermaid";
import { useEffect, useRef, useState } from "react";

const Mermaid = () => {
  const ref = useRef(null);

  const [src, setSrc] = useState("");
  useEffect(() => {
    if (src) {
      if (ref.current) mermaid.init({}, ref.current);
    }
  }, [ref.current, src]);
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
  }, []);
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 600,
            width: 500,
          }}
        >
          <textarea
            value={src}
            onChange={(v) => setSrc(v.target.value)}
          ></textarea>
        </Paper>

        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 600,
            width: 500,
          }}
        >
          <div ref={ref}>{src}</div>
        </Paper>
      </Stack>
    </div>
  );
};

export default Mermaid;
