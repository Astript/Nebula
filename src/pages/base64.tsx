import { Menu, Paper, Stack, TextField } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { Buffer } from "buffer";

const Base64 = () => {
  const [txt, setTxt] = useState("");
  // const decode = useMemo(() => isDecode ? Buffer.from(src).toString("base64") : , [src]);
  // const encode = useMemo(() => Buffer.from(src).toString("base64"), [src]);
  return (
    <Stack padding={2} spacing={2}>
      <Paper></Paper>
    </Stack>
  );
};

export default Base64;
