/* line charts variables*/

let chart1 = document.querySelector('#chart1').getContext('2d');
let chart2 = document.querySelector('#chart2').getContext('2d');
let chart3 = document.querySelector('#chart3').getContext('2d');
let chart4 = document.querySelector('#chart4').getContext('2d');
let chart5 = document.querySelector('#chart5').getContext('2d');
let chart6 = document.querySelector('#chart6').getContext('2d');
/* line charts */

    /*hourly*/

    let chart1Function = new Chart(chart1,{
        type: 'line', // bar, horizontalBar,pie,line,doughnut, radar, polarArea;
        data: {
            labels:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00',
            '8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00',
            '20:00','21:00','22:00','23:00'],
            datasets:[{
            
                data:[
                    60,
                    20,
                    40,
                    30,
                    60,
                    70,
                    50,
                    20,
                    40,
                    70,
                    60,
                    70,
                    60,
                    90,
                    40,
                    80,
                    70,
                    30,
                    60,
                    80,
                    40,
                    40,
                    70,
                    70,
                ],
                backgroundColor:[
                    'rgb(43, 101, 184,0.7)'
                ],
                
                borderColor: 'black',
                lineCap: "square",
                borderWidth: 1
                }]
        },
        options:{
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            },
            scales:{
                xAxes:[{
                    gridLines:{
                    offsetGridLines:true
                    }
                }]
            }
        }
    })

    /* daily */

    let chart2Function = new Chart(chart2,{
        type: 'line', // bar, horizontalBar,pie,line,doughnut, radar, polarArea;
        data: {
            labels:['Monday','Tuesday','Wensday','Thursday','Friday','Saturday','Sunday'],
            datasets:[{
            
                data:[
                    100,
                    120,
                    80,
                    200,
                    160,
                    300,
                    220,
                ],
                backgroundColor:[
                    'rgb(43, 101, 184,0.7)'
                ],
                
                borderColor: 'black',
                lineCap: "square",
                borderWidth: 1
                }]
        },
        options:{
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            },
            scales:{
                xAxes:[{
                    gridLines:{
                    offsetGridLines:true
                    }
                }]
            }
        }
    })

    /*weekly*/

    let chart3Function = new Chart(chart3,{
        type: 'line', // bar, horizontalBar,pie,line,doughnut, radar, polarArea;
        data: {
            labels:['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
            datasets:[{
            
                data:[
                    500,
                    750,
                    900,
                    1600,
                    1000,
                    900,
                    2000,
                    1550,
                    1600,
                    2000,
                    3300,
                ],
                backgroundColor:[
                    'rgb(43, 101, 184,0.7)'
                ],
                
                borderColor: 'black',
                lineCap: "square",
                borderWidth: 1
                }]
        },
        options:{
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            },
            scales:{
                xAxes:[{
                    gridLines:{
                    offsetGridLines:true
                    }
                }]
            }
        }
    })

    /*yearly*/

    let chart4Function = new Chart(chart4,{
        type: 'line', // bar, horizontalBar,pie,line,doughnut, radar, polarArea;
        data: {
            labels:['2016','2017','2018','2019','2020'],
            datasets:[{
            
                data:[
                    102500,
                    150300,
                    175400,
                    200200,
                    300600,
                    
                ],
                backgroundColor:[
                    'rgb(43, 101, 184,0.7)'
                ],
                
                borderColor: 'black',
                lineCap: "square",
                borderWidth: 1
                }]
        },
        options:{
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            },
            scales:{
                xAxes:[{
                    gridLines:{
                    offsetGridLines:true
                    }
                }]
            }
        }
    })


    /* daily bar chart*/
    let chart5Function = new Chart(chart5,{
        type: 'bar', // bar, horizontalBar,pie,line,doughnut, radar, polarArea;
        data: {
            labels:['S','M','T','W','T','F','S'],
            datasets:[{
            
                data:[
                    100,
                    120,
                    80,
                    200,
                    160,
                    300,
                    220,
                ],
                backgroundColor:[
                    'rgb(43, 101, 184,0.7)',
                    'rgb(43, 101, 184,0.7)',
                    'rgb(43, 101, 184,0.7)',
                    'rgb(43, 101, 184,0.7)',
                    'rgb(43, 101, 184,0.7)',
                    'rgb(43, 101, 184,0.7)',
                    'rgb(43, 101, 184,0.7)'
                ],
                
                borderColor: 'black',
                lineCap: "square",
                borderWidth: 1
                }]
        },
        options:{
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            },
            scales:{
                xAxes:[{
                    gridLines:{
                    offsetGridLines:true
                    }
                }]
            }
        }
    })

    /*doughnutChart*/

    let chart6Function = new Chart(chart6,{
        type: 'doughnut', // bar, horizontalBar,pie,line,doughnut, radar, polarArea;
        data: {
            labels:['Phones',
            'Tablets',
            'Desktop'],

            datasets:[{
            
                data:[
                    100,
                    120,
                    80,
                ],
                backgroundColor:[
                    'rgb(43, 101, 184,0.7)',
                    'rgba(126, 43, 184, 0.7)',
                    'rgba(184, 43, 101, 0.7)',
                ],
                
                borderColor: 'black',
                lineCap: "square",
                borderWidth: 1
                }]
        },
        options:{
            elements: {
                line: {
                    tension: 0
                }
            },

            legend: {
                position: 'right',
                fontSize: 20
                
            },
            
            labels: {
                position: 'outside',
                fontFamily: "Comic Sans MS",
                boxWidth: 600,
                boxHeight: 2
            }
        }
    })