<script lang="ts">
    import { onMount } from 'svelte';
    import {
      Button,
      Card,
      CardBody,
      CardFooter,
      CardHeader,
      CardSubtitle,
      CardText,
      CardTitle
    } from '@sveltestrap/sveltestrap';
    import NavigationBar from "../NavigationBar/NavigationBar.svelte";
  
    let inputText = '';
  
    onMount(() => {
      inputText = sessionStorage.getItem('inputText') || '';
    });
  </script>
  
  <NavigationBar/>
  <Card>
    <CardHeader>
      <CardTitle>Hasil pencarian</CardTitle>
    </CardHeader>
    <CardBody>
      <CardSubtitle>Yang kamu cari :</CardSubtitle>
      <CardText>{inputText}</CardText>
      <Button>Download PPT</Button>
    </CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
  