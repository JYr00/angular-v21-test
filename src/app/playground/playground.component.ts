import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent, type ButtonVariant, type ButtonSize, CardComponent, InputDirective } from '@ui';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CardComponent, InputDirective],
  template: `
    <div class="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <div class="mx-auto max-w-6xl space-y-8">
        
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold tracking-tight">Component Playground</h1>
            <p class="text-slate-500">Interact with components to see how they behave.</p>
          </div>
          <a href="/" class="text-sm font-medium text-blue-600 hover:underline">Back to Home</a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Controls Panel -->
          <div class="lg:col-span-4 space-y-6">
            <ui-card class="p-6 space-y-6 sticky top-8">
              <h2 class="text-lg font-semibold border-b border-slate-100 pb-2">Controls</h2>
              
              <!-- Button Controls -->
              <div class="space-y-4">
                <h3 class="text-sm font-medium text-slate-900">Button Configuration</h3>
                
                <div class="space-y-2">
                  <label class="text-xs font-medium text-slate-500 uppercase">Variant</label>
                  <select [ngModel]="btnVariant()" (ngModelChange)="btnVariant.set($event)" class="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900">
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="outline">Outline</option>
                    <option value="ghost">Ghost</option>
                    <option value="destructive">Destructive</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-xs font-medium text-slate-500 uppercase">Size</label>
                  <select [ngModel]="btnSize()" (ngModelChange)="btnSize.set($event)" class="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-xs font-medium text-slate-500 uppercase">Label</label>
                  <input uiInput [ngModel]="btnLabel()" (ngModelChange)="btnLabel.set($event)" type="text" />
                </div>
              </div>

            </ui-card>
          </div>

          <!-- Preview Panel -->
          <div class="lg:col-span-8 space-y-8">
            
            <!-- Button Preview -->
            <section class="space-y-4">
              <h2 class="text-xl font-semibold">Button Preview</h2>
              <ui-card class="p-12 flex items-center justify-center bg-white border-dashed border-2 border-slate-200 min-h-[200px]">
                <button ui-button [variant]="btnVariant()" [size]="btnSize()">
                  {{ btnLabel() }}
                </button>
              </ui-card>
              
              <!-- Code Snippet -->
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <code class="text-sm text-blue-400 font-mono">
                  &lt;button ui-button variant="{{btnVariant()}}" size="{{btnSize()}}"&gt;{{btnLabel()}}&lt;/button&gt;
                </code>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  `
})
export class PlaygroundComponent {
  btnVariant = signal<ButtonVariant>('primary');
  btnSize = signal<ButtonSize>('md');
  btnLabel = signal<string>('Click me');
}
