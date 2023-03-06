import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexMarkers,
  ApexFill,
  ApexForecastDataPoints,
  ApexLegend
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  colors: string[];
  fill: ApexFill;
  forecastDataPoints: ApexForecastDataPoints;
  legend: ApexLegend;
};

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.css']
})
export class MecanicoComponent {
  mecanico: any;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private authService: AuthService) {
    this.chartOptions = {
      series: [
        {
          type: "rangeArea",
          name: "Fallidos Rango",
  
          data: [
            {
              x: "Jan",
              y: [10, 20]
            },
            {
              x: "Feb",
              y: [30, 40]
            },
            {
              x: "Mar",
              y: [50, 60]
            },
            {
              x: "Apr",
              y: [70, 80]
            },
            {
              x: "May",
              y: [90, 100]
            },
            {
              x: "Jun",
              y: [110, 120]
            },
            {
              x: "Jul",
              y: [130, 140]
            },
            {
              x: "Aug",
              y: [150, 160]
            }
          ]
        },
  
        {
          type: "rangeArea",
          name: "Exitosos Rango",
          data: [
            {
              x: "Jan",
              y: [20, 40]
            },
            {
              x: "Feb",
              y: [40, 60]
            },
            {
              x: "Mar",
              y: [60, 80]
            },
            {
              x: "Apr",
              y: [80, 100]
            },
            {
              x: "May",
              y: [120, 140]
            },
            {
              x: "Jun",
              y: [140, 160]
            },
            {
              x: "Jul",
              y: [160, 180]
            },
            {
              x: "Aug",
              y: [180, 200]
            }
          ]
        },
  
        {
          type: "line",
          name: "Fallidos",
          data: [
            {
              x: "Jan",
              y: 20
            },
            {
              x: "Feb",
              y: 40
            },
            {
              x: "Mar",
              y: 60
            },
            {
              x: "Apr",
              y: 80
            },
            {
              x: "May",
              y: 100
            },
            {
              x: "Jun",
              y: 120
            },
            {
              x: "Jul",
              y: 140
            },
            {
              x: "Aug",
              y: 160
            },
            {
              x: "Sep",
              y: 180
            },
            {
              x: "Oct",
              y: 200
            }
          ]
        },
        {
          type: "line",
          name: "Exitosos",
          data: [
            {
              x: "Jan",
              y: [30]
            },
            {
              x: "Feb",
              y: [50]
            },
            {
              x: "Mar",
              y: [70]
            },
            {
              x: "Apr",
              y: [90]
            },
            {
              x: "May",
              y: [130]
            },
            {
              x: "Jun",
              y: [150]
            },
            {
              x: "Jul",
              y: [170]
            },
            {
              x: "Aug",
              y: [190]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeArea",
        animations: {
          speed: 500
        }
      },
      colors: ["#d4526e", "#33b2df", "#d4526e", "#33b2df"],
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: [0.24, 0.24, 1, 1]
      },
      forecastDataPoints: {
        count: 2,
        dashArray: 4
      },
      stroke: {
        curve: "straight",
        width: [0, 0, 2, 2]
      },
      legend: {
        show: true,
        customLegendItems: ["Pedidos Exitosos", "Pedidos Fallidos"],
        inverseOrder: true
      },
      title: {
        text: "Gráfica de Mecánico"
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      }
    };

   }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.authService.getProfile().subscribe((res: any) => {
      this.mecanico = res.data.user;
      console.log(res)
    });
  }
}
