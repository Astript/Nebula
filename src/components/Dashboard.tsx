import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

type Content = string;

const DashboardContent = ({ contents }: { contents: Content[] }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {contents.map((x) => {
        return (
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }} variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  UUOUOUOUOU
                </Typography>
                <Typography variant="h5" component="div">
                  {x}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  uouoou
                </Typography>
                <Typography variant="body2">
                  uouououououoo.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default function Dashboard() {
  const contents = ["Base64", "HTML Decode", "Json Fomatter", "jdsfj", "fdsf"];
  return <DashboardContent contents={contents} />;
}
