import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/carservice';
import { EventService } from '../service/eventservice';
import { Car } from '../domain/car';
import { SelectItem } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

import { Portfolio } from '../../shared/portfolio';
import { Benchmark } from '../../shared/benchmark';
import { PortfolioService } from '../../shared/portfolio.service';
import { BenchmarkService } from '../../shared/benchmark.service';
import { ChartModel } from '../../shared/chartModel';
import { Dataset } from '../../shared/chartModel';


@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    cities: SelectItem[];

    cars: Car[];

    cols: any[];

    chartData: any;

    events: any[];

    selectedCity: any;

    selectedCar: Car;

    items: MenuItem[];

    header: any;

    managedPortfolios: any;
    rootPortfoliosValue: number;
    masterPortfolios: Portfolio[];
    assetPortfolios: Portfolio[];
    secondLevelPortfolios: Portfolio[];
    top5Portfolios: Portfolio[];

    chartOptions: any;
    chartOptionsProfitability: any;

    chartDataEvolutionTitle: string;
    chartDataEvolution: ChartModel;
    chartDataProfitability: ChartModel;

    constructor(private portfolioService: PortfolioService, private benchmarkService: BenchmarkService, private carService: CarService, private eventService: EventService) { }

    ngOnInit() {
        this.portfolioService.countPortfolios().subscribe(count => this.managedPortfolios = count);
        this.portfolioService.sumPortfolios().subscribe(sum => this.rootPortfoliosValue = sum);

        this.portfolioService.getAssets().subscribe(data => {
            this.assetPortfolios = data;
            this.top5Portfolios = this.assetPortfolios.sort(this.dynamicSort('-value')).slice(0, 5);
        });

        this.portfolioService.getSecondLevelPortfolios().subscribe(data => {
            this.secondLevelPortfolios = data;
            this.secondLevelPortfolios = this.secondLevelPortfolios.sort(this.dynamicSort('-value'));
        });

        this.portfolioService.getRootRevisions().then(data => {
            var chartModel = new ChartModel();
            chartModel.labels = [];
            chartModel.datasets = [];

            var chartModelProfitability = new ChartModel();
            chartModelProfitability.labels = [];
            chartModelProfitability.datasets = [];

            var dataset = new Dataset();
            dataset.data = [];

            var returnDataset = new Dataset();
            returnDataset.data = [];
            //returnDataset.backgroundColor = [];

            var benchmarkDataset = new Dataset();
            benchmarkDataset.data = [];
            //benchmarkDataset.backgroundColor = [];

            var initialQuoteValue: number;
            initialQuoteValue = data[0].quoteValue;

            data.forEach(eachObj => {
                this.chartDataEvolutionTitle = eachObj.name;

                chartModel.labels.push((new Date(eachObj.quoteValueDate).toLocaleDateString("pt-BR")));
                chartModelProfitability.labels.push((new Date(eachObj.quoteValueDate).toLocaleDateString("pt-BR")));

                dataset.label = "Growth";
                dataset.pointRadius = 0;
                dataset.fill = true;
                dataset.borderColor = eachObj.color;
                dataset.backgroundColor = "#4169E1";
                dataset.yAxisID = "evoAxis";
                dataset.data.push(eachObj.value);

                returnDataset.label = "Return";
                returnDataset.pointRadius = 0;
                returnDataset.fill = false;
                returnDataset.borderColor = "#008000";
                //returnDataset.backgroundColor.push("#008000");
                returnDataset.yAxisID = "returnAxis";
                returnDataset.data.push(eachObj.quoteValue - 100);

                benchmarkDataset.label = "SELIC";
                benchmarkDataset.pointRadius = 0;
                benchmarkDataset.fill = false;
                benchmarkDataset.borderColor = "#C0C0C0";
                //benchmarkDataset.backgroundColor.push("#C0C0C0");
                benchmarkDataset.yAxisID = "returnAxis";
                benchmarkDataset.data.push(eachObj.quoteValueBenchmark - 100);
            });

            chartModel.datasets.push(dataset);
            chartModelProfitability.datasets.push(returnDataset);
            chartModelProfitability.datasets.push(benchmarkDataset);

            this.chartDataEvolution = chartModel;
            this.chartDataProfitability = chartModelProfitability;
        });

        this.chartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'evoAxis',
                    scaleLabel: {
                        display: true,
                        labelString: 'Growth ($)'
                    },
                    ticks: {
                        callback: function (label, index, labels) {
                            return label.toLocaleString('pt-BR', { minimumFractionDigits: 0 });
                        }
                    }
                }]
            }
        };

        this.chartOptionsProfitability = {
            responsive: true,
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    id: 'returnAxis',
                    scaleLabel: {
                        display: true,
                        labelString: 'Percent (%)'
                    },
                    ticks: {
                        callback: function (label, index, labels) {
                            return label.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                        }
                    }
                }],
            }
        };

        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.eventService.getEvents().then(events => { this.events = events; });

        this.cities = [];
        this.cities.push({ label: 'Select City', value: null });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFC107'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#03A9F4'
                }
            ]
        };

        this.items = [
            { label: 'Save', icon: 'ui-icon-check' },
            { label: 'Update', icon: 'ui-icon-refresh' },
            { label: 'Delete', icon: 'ui-icon-delete' }
        ];

        this.header = {
            left: 'prev, next today',
            center: 'title',
            right: 'month, agendaWeek, agendaDay'
        };
    }

    dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}
