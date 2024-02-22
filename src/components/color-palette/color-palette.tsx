import { Element, Component, Prop, Host, h, Listen } from '@stencil/core';

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

  // handleClick() {
  //   const checkbox = document.getElementById('test') as HTMLInputElement;
  //   if (checkbox.checked) {
  //     console.log('test');
  //   }
  // }

  private inputChanged = (event: Event) => {
    console.log('input changed: ', (event.target as HTMLInputElement).value);
  };

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
              <input-toggle on toggleId="contrast" toggleLabel="Contrast values"></input-toggle>
              <input-toggle on toggleId="fail" toggleLabel="Fails"></input-toggle>
              <input-toggle on toggleId="pass" toggleLabel="Passes"></input-toggle>
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
