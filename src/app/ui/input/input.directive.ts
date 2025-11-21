import { Directive, input, computed } from '@angular/core';
import { cn } from '../utils';

@Directive({
    selector: 'input[uiInput], textarea[uiInput]',
    standalone: true,
    host: {
        '[class]': 'computedClass()'
    }
})
export class InputDirective {
    class = input<string>('');

    computedClass = computed(() => {
        return cn(
            'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            this.class()
        );
    });
}
