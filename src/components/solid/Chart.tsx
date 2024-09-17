import { onMount } from "solid-js";
import { Chart, Title, Tooltip, Legend, Colors } from "chart.js/auto";
import { canvas } from "./Chart.module.css";
import data from '../../../public/data/top-10-vulnerable.json'

export function MyChart() {
  let chart: HTMLCanvasElement;
  // const data = [
  //   { year: 2010, count: 10 },
  //   { year: 2011, count: 20 },
  //   { year: 2012, count: 15 },
  //   { year: 2013, count: 25 },
  //   { year: 2014, count: 22 },
  //   { year: 2015, count: 30 },
  //   { year: 2016, count: 28 },
  // ];

  /**
   * You must register optional elements before using the chart,
   * otherwise you will have the most primitive UI
   */
  onMount(() => {
    Chart.register(Title, Tooltip, Legend, Colors);
    new Chart(chart, {
      type: "bar",
      data: {
        labels: data.map((row) => row.name),
        datasets: [
          {
            label: "Vulnerable downloads per week",
            data: data.map((row) => row.stats.vulnerableDownloads),
          },
        ],
      },
    });
  });

  return (
    <div>
      <canvas ref={chart} class={canvas}></canvas>
    </div>
  );
}
