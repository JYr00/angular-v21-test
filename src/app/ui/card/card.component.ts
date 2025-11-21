import { Component, input, computed } from '@angular/core';
import { cn } from '../utils';

@Component({
    selector: 'ui-card',
    standalone: true,
    template: '<ng-content />',
    host: {
        '[class]': 'computedClass()'
    }
})
export class CardComponent {
    class = input<string>('');

    computedClass = computed(() => {
        return cn(
            'block rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm',
            this.class()
        );
    });
}
