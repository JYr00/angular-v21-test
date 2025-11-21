import { Component, input, computed } from '@angular/core';
import { cn } from '../utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
    selector: 'button[ui-button], a[ui-button]',
    standalone: true,
    template: '<ng-content />',
    host: {
        '[class]': 'computedClass()'
    }
})
export class ButtonComponent {
    variant = input<ButtonVariant>('primary');
    size = input<ButtonSize>('md');
    class = input<string>('');

    computedClass = computed(() => {
        const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background cursor-pointer';

        const variants: Record<ButtonVariant, string> = {
            primary: 'bg-slate-900 text-white hover:bg-slate-900/90',
            secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-100/80',
            outline: 'border border-slate-200 hover:bg-slate-100 hover:text-slate-900',
            ghost: 'hover:bg-slate-100 hover:text-slate-900',
            destructive: 'bg-red-500 text-white hover:bg-red-600',
        };

        const sizes: Record<ButtonSize, string> = {
            sm: 'h-9 px-3 text-xs',
            md: 'h-10 py-2 px-4',
            lg: 'h-11 px-8 rounded-md',
        };

        return cn(
            baseStyles,
            variants[this.variant()],
            sizes[this.size()],
            this.class()
        );
    });
}
