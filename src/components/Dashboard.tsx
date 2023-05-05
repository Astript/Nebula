import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const DashboardContent = ({ works }: { works: Work[] }) => {
  const router = useRouter();
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {works.map((x, id) => {
        return (
          <Grid key={id} item xs={6}>
            <Card sx={{ minWidth: 275 }} variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {x.description}
                </Typography>
                <Typography variant="h5" component="div">
                  {x.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {x.description}
                </Typography>
                <Typography variant="body2">
                  uouououououoo.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => router.push(x.path)}>
                  Go
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export type Work = {
  name: string;
  path: string;
  description: string;
};

export default function Dashboard() {
  const base64: Work = {
    name: "Base64",
    path: "./base64",
    description: "base64 decode and encode",
  };

  const works: Work[] = [base64];
  return <DashboardContent works={works} />;
}
