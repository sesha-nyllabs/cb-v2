/**
 * Created by sesha on 4/5/17.
 */

export interface Chart {
    type: string;
    title: string;
    data: {
        labels?: string[];
        datasets: [{
            label?: string;
            data: number[];
            fill: boolean;
            borderColor?: string;
            backgroundColor? : string[];
            hoverBackgroundColor? : string[];

        }]
    };
    options?: {};
}