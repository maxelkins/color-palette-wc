import { Element, Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'color-palette',
  styleUrl: 'color-palette.css',
  shadow: true,
})
export class ColorPalette {
  @Element() hostElement: HTMLElement;
  @Prop() colors: string;
  @Prop() title: string;
  @Prop() controls: boolean;
  colorsArray: string[];

  // Split colors prop string into an array of colors
  componentWillLoad() {
    this.colorsArray = this.colors.split(',').map(color => color.trim());
  }

  render() {
    return (
      <Host>
        {/* This main wrapper is needed for :has(), as it currently cannot be used on :host */}
        <main>
          {this.title ? <div class="title">{this.title}</div> : ''}
          {this.controls ? (
            <div class="controls">
              {/* <div class="input-checkbox">
                <input type="checkbox" name="contrast" id="contrast" />
                <label htmlFor="contrast">Contrast values</label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" name="fail" id="fail" />
                <label htmlFor="fail">Hide fails</label>
              </div> */}
              <input-toggle toggleId="contrast" toggleLabel="Contrast values"></input-toggle>
              <input-toggle toggleId="fail" toggleLabel="Hide fails"></input-toggle>
              <input-toggle toggleId="pass" toggleLabel="Hide passes"></input-toggle>
            </div>
          ) : (
            ''
          )}
          <div class="palette">
            {this.colorsArray.map(color => (
              <color-palette-row color={color}></color-palette-row>
            ))}
          </div>
        </main>
      </Host>
    );
  }
}
