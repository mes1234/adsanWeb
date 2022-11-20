import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'format' })
export class FormatPipe implements PipeTransform {

    transform(value: number | undefined): string {
        if (value === undefined) {
            return "-.--";
        }
        return Number(value).toFixed(2);
    }
}