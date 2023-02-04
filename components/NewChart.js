import React from "react";
import Chart from "chart.js";

export default function NewChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Assets",
            backgroundColor: "#82D616",
            borderColor: "#82D616",
            data: [50, 30, 300, 200, 500, 275, 400, 240, 500],
            fill: false,
          },
          {
            label: "Liabilities",
            fill: false,
            backgroundColor: "#FF8540",
            borderColor: "#FF8540",
            data: [30, 100, 200, 20, 150, 100, 440, 175, 420],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "#67748E",
        },
        legend: {
          labels: {
            fontColor: "#67748E",
          },
          align: "start",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#67748E",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "#67748E",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "#8C8C8C",
                zeroLineColor: "#8C8C8C",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#67748E",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "#67748E",
              },
              gridLines: {
                display: true,
                borderDash: [4],
                borderDashOffset: [4],
                color: "#8C8C8C",
                zeroLineColor: "#8C8C8C",
                zeroLineBorderDash: [0],
                zeroLineBorderDashOffset: [0],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-white1">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <label className="text-grey2 px-[5px] text-sm font-semibold">Assets and Liabilities</label>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-[328px] w-[745px]">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}