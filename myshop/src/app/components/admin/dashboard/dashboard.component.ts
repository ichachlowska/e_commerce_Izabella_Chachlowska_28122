import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(public mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getOrders();
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [{}],
    },

    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };

  public barChartLabels: Label[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [
    {
      data: [],
      label: "Series A",
    },
  ];

  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values

    var dates = document.getElementsByClassName("date");
    var arrayNumbers = [];
    var newDate;
    var uniqueDates;

    for (var i = 0; i < dates.length; i++) {
      arrayNumbers.push(dates.item(i).innerHTML);
    }

    const arrayDates = [];

    for (const key in dates) {
      if (typeof dates[key].innerHTML === "string")
        newDate = dates[key].innerHTML;
      arrayDates.push(
        newDate.replace("2020-", "").substring(0, 5).replace("-", ".")
      );
    }

    uniqueDates = [...new Set(arrayDates)];

    console.log(arrayDates);
    console.log(uniqueDates);

    this.barChartLabels = arrayDates;
  }
}
