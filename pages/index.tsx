import { Layout } from "@/components/layouts";
import EntryList from "@/components/ui/EntryList";
import NewEntry from "@/components/ui/NewEntry";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { NextPage } from "next";

export default function Home() {

  return (
    <>
      <Layout title="Home - OpenJira">

        <Grid container spacing={ 2 }>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="Pendientes"/>
              <NewEntry></NewEntry>
              <EntryList status="pending"/>
            </Card>
          </Grid>
          
            <Grid item xs={12} sm={4}>
              <Card sx={{height: 'calc(100vh - 100px)'}}>
                <CardHeader title="En progreso"/>
                <EntryList status="in-progress"/>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{height: 'calc(100vh - 100px)'}}>
                <CardHeader title="Completadas"/>
                <EntryList status="finished"/>
              </Card>
            </Grid>
          </Grid>
          
      </Layout>
    </>
  )
}
