import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarChart1() {
    return (
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C','group D','group E',] }]}
            series={[{ data: [4, 3, 5, 6, 8] }, { data: [1, 6, 3, 7, 4] }]}
            width={1190}
            height={500}
        />
    );
}